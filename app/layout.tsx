import "./globals.css";
import Navbar from "@/components/Navbar";
import { GeistSans } from 'geist/font/sans';
import CanvasCursor from "@/components/CanvasCursor";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

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