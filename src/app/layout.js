import "./globals.css";
import { Oswald, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Biker‑Chronicles",
  description: "Motorcycle blog & merch.",
  metadataBase: new URL("https://biker-chronicles.com"),
};

const heading = Oswald({
  subsets: ["latin"],
  weight: ["400","600","700"],
  variable: "--font-heading",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
