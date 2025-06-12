import "./globals.css";
import Nav from "@/components/nav";

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
      <body className="bg-darker font-poppins">
        <Nav />
        {children}
      </body>
    </html>
  );
}
