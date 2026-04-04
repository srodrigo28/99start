import { useState } from "react";

import { ScreenContainer } from "../../shared/components";
import { isEmail, isRequired } from "../../shared/utils";
import { LoginForm, LoginHeader } from "./components";

type LoginScreenProps = {
  onBackHome: () => void;
  onCreateAccount: () => void;
  onLoginSuccess: () => void;
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

  const handleEnterPanel = () => {
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

    if (Object.keys(nextErrors).length === 0) {
      const isDefaultLogin = email === defaultEmail && password === defaultPassword;
      const isMasterLogin = email === masterEmail && password === masterPassword;

      if (!isDefaultLogin && !isMasterLogin) {
        nextErrors.email = "Use um acesso de teste configurado no .env.";
        nextErrors.password = "As credenciais precisam corresponder a um perfil liberado.";
      }
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

    setAlert(undefined);
    if (email === masterEmail && password === masterPassword) {
      onMasterLoginSuccess();
      return;
    }

    onLoginSuccess();
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
