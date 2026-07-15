import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from 'next/font/google'
import Navigation from "@/components/Navigation/Navigation"
import Footer from "@/components/Footer/Footer"
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


// Configurer Inter pour le texte courant
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Configurer Poppins pour les titres
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})


export const metadata = {
  title: "Portfolio de Paul ANDRÉ",
  description: "Ingénieur Logiciel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body>
       <Navigation />
        <main>{children}</main>
        <Footer/>
        <Analytics />
       </body>
      
    </html>
  );
}
