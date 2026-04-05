from __future__ import annotations

import os
import subprocess
import sys
import venv
from dataclasses import dataclass
from pathlib import Path
from typing import Callable


BASE_DIR = Path(__file__).resolve().parent
VENV_DIR = BASE_DIR / ".venv"
REQUIREMENTS_FILE = BASE_DIR / "requirements" / "dev.txt"
RUN_FILE = BASE_DIR / "run.py"


@dataclass
class StepResult:
    number: int
    title: str
    success: bool
    details: list[str]


STEP_RESULTS: list[StepResult] = []


def print_line(message: str = "") -> None:
    print(message)


def print_header(title: str) -> None:
    print_line()
    print_line("=" * 72)
    print_line(title)
    print_line("=" * 72)


def print_step(number: int, title: str) -> None:
    print_line()
    print_line(f"[PASSO {number}] {title}")


def print_ok(message: str) -> None:
    print_line(f"  [OK] {message}")


def print_info(message: str) -> None:
    print_line(f"  [INFO] {message}")


def print_error(message: str) -> None:
    print_line(f"  [ERRO] {message}")


def register_step(number: int, title: str, success: bool, details: list[str]) -> None:
    STEP_RESULTS.append(
        StepResult(number=number, title=title, success=success, details=details.copy())
    )


def run_step(number: int, title: str, action: Callable[[], list[str]]) -> None:
    print_step(number, title)
    details: list[str] = []

    try:
        details = action()
        for detail in details:
            print_ok(detail)
        register_step(number, title, True, details)
    except Exception as exc:
        message = str(exc).strip() or "Falha sem detalhe adicional."
        details = [message]
        print_error(message)
        register_step(number, title, False, details)
        raise


def print_summary() -> None:
    print_header("RESUMO FINAL")

    total_steps = len(STEP_RESULTS)
    total_success = sum(1 for step in STEP_RESULTS if step.success)
    total_errors = total_steps - total_success

    print_line(f"Total de passos executados: {total_steps}")
    print_line(f"Total com sucesso: {total_success}")
    print_line(f"Total com erro: {total_errors}")

    print_line()
    print_line("Passo a passo:")
    for step in STEP_RESULTS:
        status = "OK" if step.success else "ERRO"
        print_line(f"{step.number}. [{status}] {step.title}")
        for detail in step.details:
            print_line(f"   - {detail}")


def describe_database_error(message: str) -> str:
    normalized = message.lower()

    if "password authentication failed" in normalized:
        return (
            "Autenticacao recusada pelo PostgreSQL. "
            "A combinacao de DB_USER e DB_PASSWORD no api/.env nao foi aceita."
        )

    if "database" in normalized and "does not exist" in normalized:
        return (
            "Banco de dados nao encontrado. "
            "Revise o valor de DB_NAME no api/.env."
        )

    if "connection refused" in normalized:
        return (
            "Conexao recusada pelo servidor. "
            "Revise DB_HOST, DB_PORT e confirme se o PostgreSQL esta aceitando conexoes externas."
        )

    if "timeout expired" in normalized or "timed out" in normalized:
        return (
            "Tempo limite excedido ao tentar conectar no banco. "
            "Verifique rede, firewall, IP do servidor e porta liberada."
        )

    if "could not translate host name" in normalized or "name or service not known" in normalized:
        return (
            "Host do banco nao pode ser resolvido. "
            "Revise DB_HOST no api/.env."
        )

    if "no pg_hba.conf entry" in normalized:
        return (
            "O servidor PostgreSQL bloqueou esse cliente pelas regras de acesso. "
            "Sera preciso liberar o IP atual no pg_hba.conf ou na politica do provedor."
        )

    if "ssl" in normalized:
        return (
            "A falha parece relacionada a SSL. "
            "Revise DB_SSL_MODE no api/.env. Em muitos provedores o valor correto e require."
        )

    return (
        "Falha ao conectar no PostgreSQL. "
        "Revise DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME e DB_SSL_MODE no api/.env."
    )


def get_venv_python() -> Path:
    if os.name == "nt":
        return VENV_DIR / "Scripts" / "python.exe"
    return VENV_DIR / "bin" / "python"


def venv_exists() -> bool:
    return get_venv_python().exists()


def ensure_venv() -> list[str]:
    if venv_exists():
        return [
            f"Ambiente virtual encontrado em {VENV_DIR}",
            f"Python do venv: {get_venv_python()}",
        ]

    venv.create(VENV_DIR, with_pip=True)
    return [
        f"Ambiente virtual criado em {VENV_DIR}",
        f"Python do venv: {get_venv_python()}",
    ]


def is_running_inside_target_venv() -> bool:
    current_python = Path(sys.executable).resolve()
    target_python = get_venv_python().resolve()
    return current_python == target_python


def ensure_venv_runtime() -> list[str]:
    current_python = Path(sys.executable).resolve()
    target_python = get_venv_python().resolve()

    if current_python == target_python:
        return [
            "O script ja esta rodando dentro do venv correto.",
            f"Python ativo: {current_python}",
        ]

    return [
        "O script ainda nao estava dentro do venv correto.",
        f"Python atual: {current_python}",
        f"Python esperado: {target_python}",
        "O processo sera reiniciado automaticamente usando o Python do venv.",
    ]


def reexec_in_venv() -> "NoReturn":
    venv_python = get_venv_python()
    os.execv(str(venv_python), [str(venv_python), str(Path(__file__).resolve())])


def install_dependencies() -> list[str]:
    if not REQUIREMENTS_FILE.exists():
        raise FileNotFoundError(f"Arquivo de dependencias nao encontrado: {REQUIREMENTS_FILE}")

    subprocess.run(
        [sys.executable, "-m", "pip", "install", "--upgrade", "pip"],
        check=True,
        cwd=BASE_DIR,
    )
    subprocess.run(
        [sys.executable, "-m", "pip", "install", "-r", str(REQUIREMENTS_FILE)],
        check=True,
        cwd=BASE_DIR,
    )

    return [
        "Pip atualizado no ambiente virtual.",
        f"Dependencias instaladas a partir de {REQUIREMENTS_FILE}",
    ]


def ensure_project_imports() -> None:
    base_dir_str = str(BASE_DIR)
    if base_dir_str not in sys.path:
        sys.path.insert(0, base_dir_str)


def check_database_connection() -> list[str]:
    ensure_project_imports()

    from app.config import get_settings

    try:
        import psycopg
    except ImportError as exc:
        raise RuntimeError(
            "Dependencia psycopg indisponivel. Verifique a instalacao das dependencias no venv."
        ) from exc

    settings = get_settings()
    connection_params = {
        "host": settings.db_host,
        "port": settings.db_port,
        "user": settings.db_user,
        "password": settings.db_password,
        "dbname": settings.db_name,
    }
    if settings.db_ssl_mode:
        connection_params["sslmode"] = settings.db_ssl_mode

    try:
        with psycopg.connect(**connection_params) as connection:
            with connection.cursor() as cursor:
                cursor.execute("SELECT 1")
                cursor.fetchone()
    except psycopg.OperationalError as exc:
        friendly_message = describe_database_error(str(exc))
        raise RuntimeError(
            "\n".join(
                [
                    "Falha na validacao da conexao com o banco.",
                    f"Host: {settings.db_host}",
                    f"Porta: {settings.db_port}",
                    f"Banco: {settings.db_name}",
                    f"Usuario: {settings.db_user}",
                    f"SSL mode: {settings.db_ssl_mode or 'vazio'}",
                    f"Diagnostico: {friendly_message}",
                    f"Detalhe tecnico: {exc}",
                ]
            )
        ) from exc

    return [
        "Conexao com o PostgreSQL validada com sucesso.",
        f"Host: {settings.db_host}",
        f"Porta: {settings.db_port}",
        f"Banco: {settings.db_name}",
        f"Usuario: {settings.db_user}",
        f"SSL mode: {settings.db_ssl_mode or 'vazio'}",
    ]


def start_api() -> int:
    if not RUN_FILE.exists():
        raise FileNotFoundError(f"Arquivo principal da API nao encontrado: {RUN_FILE}")

    print_line()
    print_line("[PASSO 5] Iniciar API")
    print_info(f"Arquivo principal: {RUN_FILE}")
    print_info("A API sera iniciada agora.")
    return subprocess.run([sys.executable, str(RUN_FILE)], cwd=BASE_DIR).returncode


def main() -> int:
    print_header("SETUP DA API 99START")

    try:
        run_step(1, "Verificar ou criar ambiente virtual", ensure_venv)
        run_step(2, "Garantir execucao dentro do venv", ensure_venv_runtime)

        if not is_running_inside_target_venv():
            print_summary()
            reexec_in_venv()

        run_step(3, "Instalar ou atualizar dependencias", install_dependencies)
        run_step(4, "Validar conexao com o banco", check_database_connection)
        print_summary()
        return start_api()
    except Exception:
        print_summary()
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
