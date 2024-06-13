import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Fashion Store",
  description: "Explore Your Unique Style with Our Exclusive Collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
