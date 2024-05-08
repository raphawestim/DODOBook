import type { Metadata } from "next";
import { Inter, Poppins as popis, Roboto_Flex as Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = popis({ subsets: ["latin"], weight: "400" , variable: "--font-poppins"});
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto"});

export const metadata: Metadata = {
  title: "DODOBook",
  description: "Busca de conteúdo e grupos educacionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} bg-gray-900`}>{children}</body>
    </html>
  );
}
