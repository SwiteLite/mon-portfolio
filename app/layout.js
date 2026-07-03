import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Portfolio de Paul ANDRÉ",
  description: "Développeur full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
       </body>
    </html>
  );
}
