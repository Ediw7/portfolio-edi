import "./globals.css";
import Navbar from "@/components/Navbar";
import { GeistSans } from 'geist/font/sans';
import CanvasCursor from "@/components/CanvasCursor";

export const metadata = {
  title: "Edi Wicoro",
  description: "Full Stack Engineer",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} antialiased bg-black text-white`}>
        <Navbar />
        {children}
        <CanvasCursor />
      </body>
    </html>
  );
}