import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Playfair_Display, Roboto } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import Nav from "@/components/ReusableComponents/Nav";
import Footer from "@/components/ReusableComponents/Footer";
config.autoAddCss = false;

export const metadata = {
  title: "Task Flow",
  description: "Managing task made simple",
};

const playFairDispay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playFairDispay.className} ${roboto.className} `}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
