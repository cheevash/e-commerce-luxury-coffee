import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/context/ToastContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import CartDrawer from "@/components/CartDrawer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Aura | Luxury Coffee",
  description: "Experience the pinnacle of coffee luxury. Curated blends, elegant roasts, and an unforgettable taste journey.",
  openGraph: {
    title: "Aura | Luxury Coffee",
    description: "Experience the pinnacle of coffee luxury. Curated blends, elegant roasts, and an unforgettable taste journey.",
    url: "https://your-domain.com",
    siteName: "Aura Luxury Coffee",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Aura Luxury Coffee",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col font-sans bg-luxury-dark text-luxury-white transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <ToastProvider>
              <Header />
              <main className="flex-grow pt-[80px]">
                {children}
              </main>
              <Footer />
              <Toast />
              <CartDrawer />
            </ToastProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
