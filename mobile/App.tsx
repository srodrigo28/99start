import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import { AdminScreen } from "./src/features/admin";
import { StoreAdminDetailScreen, type AdminStore } from "./src/features/admin/StoreAdminDetailScreen";
import { CadastroScreen } from "./src/features/cadastro";
import { CommandasScreen } from "./src/features/comandas";
import { ConfigScreen } from "./src/features/config";
import { StartScreen } from "./src/features/cta";
import { DashboardScreen } from "./src/features/dashboard";
import { LoginScreen } from "./src/features/login";
import { ShowScreen } from "./src/features/show";
import type { AuthSession } from "./src/types";
import "./global.css";

type AppScreen =
  | "start"
  | "login"
  | "cadastro"
  | "show"
  | "dashboard"
  | "config"
  | "comandas"
  | "admin"
  | "admin-store";

export default function App() {
  const [screen, setScreen] = useState<AppScreen>("start");
  const [onboardingData, setOnboardingData] = useState({
    ownerName: "Sebastiao Rodrigo",
    city: "Aparecida de Goiania - GO",
  });
  const [selectedAdminStore, setSelectedAdminStore] = useState<AdminStore | null>(null);
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-[#07111f]">
      <StatusBar style="light" />
      {screen === "start" ? (
        <StartScreen
          onCreateAccount={() => setScreen("cadastro")}
          onLogin={() => setScreen("login")}
        />
      ) : null}
      {screen === "login" ? (
        <LoginScreen
          onBackHome={() => setScreen("start")}
          onCreateAccount={() => setScreen("cadastro")}
          onLoginSuccess={(session) => {
            setAuthSession(session);
            setOnboardingData({
              ownerName: session.user.owner_name,
              city: session.establishment.city,
            });
            setScreen("dashboard");
          }}
          onMasterLoginSuccess={() => setScreen("admin")}
        />
      ) : null}
      {screen === "cadastro" ? (
        <CadastroScreen
          onBackHome={() => setScreen("start")}
          onComplete={(payload) => {
            setAuthSession(payload.session);
            setOnboardingData({
              ownerName: payload.ownerName,
              city: payload.city,
            });
            setScreen("show");
          }}
        />
      ) : null}
      {screen === "show" ? (
        <ShowScreen
          ownerName={onboardingData.ownerName}
          city={onboardingData.city}
          onBackHome={() => setScreen("start")}
          onGoDashboard={() => setScreen("dashboard")}
        />
      ) : null}
      {screen === "dashboard" ? (
        <DashboardScreen
          onBackHome={() => setScreen("start")}
          onOpenConfig={() => setScreen("config")}
          onOpenCommandas={() => setScreen("comandas")}
        />
      ) : null}
      {screen === "config" ? (
        <ConfigScreen onBackDashboard={() => setScreen("dashboard")} />
      ) : null}
      {screen === "comandas" ? (
        <CommandasScreen
          onBackDashboard={() => setScreen("dashboard")}
          onGoTables={() => setScreen("dashboard")}
        />
      ) : null}
      {screen === "admin" ? (
        <AdminScreen
          onBackHome={() => setScreen("start")}
          onOpenStoreDetail={(store) => {
            setSelectedAdminStore(store);
            setScreen("admin-store");
          }}
        />
      ) : null}
      {screen === "admin-store" && selectedAdminStore ? (
        <StoreAdminDetailScreen
          store={selectedAdminStore}
          onBack={() => setScreen("admin")}
          onLogout={() => setScreen("start")}
        />
      ) : null}
    </SafeAreaView>
  );
}
