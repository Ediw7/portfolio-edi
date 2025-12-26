import "./globals.css";
import Navbar from "@/components/Navbar";
import { GeistSans } from 'geist/font/sans';
import SmoothScroll from "@/components/SmoothScroll";
import { CanvasCursor, CustomCursor, WhatsAppButton } from "@/components/ClientComponents";

export const metadata = {
  title: "Edi Wicoro",
  description: "Edi Wicoro Portfolio",
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
        <SmoothScroll>
          <CustomCursor />
          {children}
          <CanvasCursor />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}