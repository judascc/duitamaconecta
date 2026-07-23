import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

title:
"Duitama Conecta | Negocios, servicios y promociones de Duitama",


description:
"Encuentra restaurantes, ferreterías, tiendas, servicios y emprendimientos de Duitama en un solo lugar.",


keywords:[
"Duitama",
"negocios Duitama",
"comercio Duitama",
"servicios Duitama",
"Boyacá",
"comprar en Duitama"
],


openGraph:{


title:
"Duitama Conecta - Comercio local de Duitama",


description:
"Conecta con negocios, productos y servicios de nuestra ciudad.",


url:
"https://duitamaconecta.vercel.app",


siteName:
"Duitama Conecta",


locale:
"es_CO",


type:
"website"


}

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
