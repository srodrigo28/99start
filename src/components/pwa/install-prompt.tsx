"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const DISMISS_KEY = "pwa-install-dismissed";

function isMobileDevice() {
  if (typeof window === "undefined") {
    return false;
  }

  return /android|iphone|ipad|ipod|mobile/i.test(window.navigator.userAgent);
}

function isIosDevice() {
  if (typeof window === "undefined") {
    return false;
  }

  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isStandaloneMode() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(display-mode: standalone)").matches || Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone);
}

export function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [iosMode, setIosMode] = useState(false);

  useEffect(() => {
    if (!isMobileDevice() || isStandaloneMode()) {
      return;
    }

    if (window.localStorage.getItem(DISMISS_KEY) === "true") {
      return;
    }

    setIosMode(isIosDevice());

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    if (isIosDevice()) {
      setVisible(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const closePrompt = () => {
    window.localStorage.setItem(DISMISS_KEY, "true");
    setVisible(false);
  };

  const installApp = async () => {
    if (!deferredPrompt) {
      return;
    }

    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {
      setVisible(false);
      return;
    }

    closePrompt();
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-3 rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(13,19,30,0.97),rgba(7,11,18,0.98))] p-4 text-[var(--text)] shadow-[0_24px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
              app mobile
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold">
              Instale o 99Start no celular
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Abra mais rapido, use em tela cheia e prepare o projeto para operacao mobile em producao.
            </p>
          </div>
          <button
            type="button"
            onClick={closePrompt}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)]"
          >
            fechar
          </button>
        </div>

        {iosMode && !deferredPrompt ? (
          <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-[var(--text)]">
            No iPhone, toque em compartilhar e depois em Adicionar a Tela de Inicio para instalar.
          </p>
        ) : (
          <button
            type="button"
            onClick={installApp}
            className="rounded-full bg-[linear-gradient(135deg,#ff8b36,#ff5f6d)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(255,95,109,0.28)]"
          >
            Instalar aplicativo
          </button>
        )}
      </div>
    </div>
  );
}
