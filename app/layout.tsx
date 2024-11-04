import type { Metadata } from "next";
import { Great_Vibes, Parisienne, Cinzel, Poppins, Darumadrop_One } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: ["400"],
});
const parisienne = Parisienne({
  subsets: ["latin"],
  variable: "--font-parisienne",
  display: "swap",
  weight: ["400"],
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400","500","600","700","800"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400","500","600","700","800"],
});
const darumadrop = Darumadrop_One({
  subsets: ["latin"],
  variable: "--font-darumadrop",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Irna & Galih",
  description: "Wedding Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${parisienne.variable} ${cinzel.variable} ${poppins.variable}  ${darumadrop.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
