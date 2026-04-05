import { useState } from "react";

import { ScreenContainer } from "../../shared/components";
import { ApiRequestError, loginOwner } from "../../services";
import { isEmail, isRequired } from "../../shared/utils";
import { LoginForm, LoginHeader } from "./components";
import type { AuthSession } from "../../types";

type LoginScreenProps = {
  onBackHome: () => void;
  onCreateAccount: () => void;
  onLoginSuccess: (session: AuthSession) => void;
  onMasterLoginSuccess: () => void;
};

export function LoginScreen({
  onBackHome,
  onCreateAccount,
  onLoginSuccess,
  onMasterLoginSuccess,
}: LoginScreenProps) {
  const defaultEmail =
    process.env.EXPO_PUBLIC_DEFAULT_LOGIN_EMAIL ?? "admin@gmail.com";
  const defaultPassword =
    process.env.EXPO_PUBLIC_DEFAULT_LOGIN_PASSWORD ?? "123123";
  const masterEmail =
    process.env.EXPO_PUBLIC_MASTER_LOGIN_EMAIL ?? "master@gmail.com";
  const masterPassword =
    process.env.EXPO_PUBLIC_MASTER_LOGIN_PASSWORD ?? "123123";

  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [alert, setAlert] = useState<
    { title: string; message: string; variant: "error" | "success" | "info" } | undefined
  >();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEnterPanel = async () => {
    const nextErrors: { email?: string; password?: string } = {};

    if (!isRequired(email)) {
      nextErrors.email = "Informe seu e-mail para continuar.";
    } else if (!isEmail(email)) {
      nextErrors.email = "Digite um e-mail valido.";
    }

    if (!isRequired(password)) {
      nextErrors.password = "Digite sua senha.";
    } else if (password.length < 6) {
      nextErrors.password = "Sua senha precisa ter ao menos 6 caracteres.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setAlert({
        title: "Revise os dados do login",
        message: "Use as credenciais padrao definidas no .env para seguir testando.",
        variant: "error",
      });
      return;
    }

    if (email === masterEmail && password === masterPassword) {
      setAlert(undefined);
      onMasterLoginSuccess();
      return;
    }

    setIsSubmitting(true);
    setAlert(undefined);

    try {
      const session = await loginOwner({ email, password });
      onLoginSuccess(session);
    } catch (error) {
      if (error instanceof ApiRequestError) {
        const apiFieldErrors: { email?: string; password?: string } = {};

        if (error.errors.includes("email")) {
          apiFieldErrors.email = "Revise o e-mail informado.";
        }

        if (error.errors.includes("password")) {
          apiFieldErrors.password = "Revise a senha informada.";
        }

        setErrors((previous) => ({ ...previous, ...apiFieldErrors }));
        setAlert({
          title: "Nao foi possivel entrar",
          message: error.message,
          variant: "error",
        });
      } else {
        setAlert({
          title: "Falha de conexao com a API",
          message: "Verifique a URL ativa da API e tente novamente em instantes.",
          variant: "error",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScreenContainer>
      <LoginHeader onBackHome={onBackHome} />
      <LoginForm
        email={email}
        password={password}
        emailError={errors.email}
        passwordError={errors.password}
        alert={alert}
        isSubmitting={isSubmitting}
        onDismissAlert={() => setAlert(undefined)}
        onEmailChange={(value) => {
          setEmail(value.trim());
          setErrors((previous) => ({ ...previous, email: undefined }));
        }}
        onPasswordChange={(value) => {
          setPassword(value);
          setErrors((previous) => ({ ...previous, password: undefined }));
        }}
        onEnterPanel={handleEnterPanel}
        onCreateAccount={onCreateAccount}
      />
    </ScreenContainer>
  );
}
