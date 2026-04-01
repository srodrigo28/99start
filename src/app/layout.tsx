import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { PwaInstallPrompt } from "@/components/pwa/install-prompt";
import { PwaRegistrar } from "@/components/pwa/pwa-registrar";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://start-app-three.vercel.app"),
  title: "99Start",
  description: "Gestao de estabelecimentos, mesas e comandas com foco em operacao mobile.",
  applicationName: "99Start",
  manifest: "/manifest.webmanifest",
  keywords: ["99Start", "PWA", "gestao", "comandas", "mesas", "mobile"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon?size=192" },
      { url: "/icon?size=512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "99Start",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "99Start",
    description: "Gestao de estabelecimentos, mesas e comandas com foco em operacao mobile.",
    url: "https://start-app-three.vercel.app/",
    siteName: "99Start",
    images: [
      {
        url: "/icon?size=512",
        width: 1200,
        height: 630,
        alt: "99Start",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "99Start",
    description: "Gestao de estabelecimentos, mesas e comandas com foco em operacao mobile.",
    images: ["/icon?size=512"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#07111d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
        <PwaRegistrar />
        <PwaInstallPrompt />
        {children}
      </body>
    </html>
  );
}
