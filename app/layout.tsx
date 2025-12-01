import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "CodeVista — Code Explainer",
  description: "Paste code. Understand code. CodeVista explains it gently.",
  icons: {
    icon: "/codevista.jpg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">{children}</body>
    </html>
  );
}
