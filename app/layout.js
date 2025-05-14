import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HWORLD",
  description: "Hworld Official company website",
  icons: {
    icon: '/hworld.png',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}, bg-darker font-poppins`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
