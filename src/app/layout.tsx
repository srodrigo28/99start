import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
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
  title: "Painel do Proprietário", 
  description: "Gestão de estabelecimentos, mesas e comandas.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  
  // Otimização para Redes Sociais (Facebook, LinkedIn, WhatsApp, etc)
  openGraph: {
    title: "Gestão de estabelecimentos, mesas e comandas.",
    description: "Gestão de estabelecimentos, mesas e comandas.",
    url: "https://start-app-three.vercel.app/",
    siteName: "Gestão de estabelecimentos, mesas e comandas.",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Gestão de estabelecimentos, mesas e comandas.",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Otimização específica para o Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "Painel do Proprietário",
    description: "Gestão de estabelecimentos, mesas e comandas.",
    images: ["/favicon.ico"],
  },

  // Instruções para os robôs do Google (Indexar a página e seguir os links)
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
