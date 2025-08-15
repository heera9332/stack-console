import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SCHeader from "@/components/Header";
import SCFooter from "@/components/sc-footer";
import CTASection from "@/components/footer-cta";
import { ThemeProvider } from "@/components/theme-provider";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <SCHeader />
        {children}
        <CTASection/>
        <SCFooter/>
        </ThemeProvider>
      </body>
    </html>
  );
}
