import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SCFooter from "@/components/sc-footer";
import ScHeader from "@/components/sc-header/sc-header";
import "./globals.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StackConsole",
  description:
    "Stack Console's self-service cloud management platform designed for OpenStack, CloudStack, OpenNebula and VMware.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <ScHeader />
          {children}
          <SCFooter />
        </ThemeProvider>

        <Script src="/fade-in.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
