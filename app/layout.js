import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation"
import Footer from "@/components/Footer/Footer"
import "./globals.css";


export const metadata = {
  title: "Portfolio de Paul ANDRÉ",
  description: "Développeur full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
       <Navigation />
        <main>{children}</main>
        <Footer/>
       </body>
      
    </html>
  );
}
