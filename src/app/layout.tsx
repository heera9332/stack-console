import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SCHeader from "@/components/Header";

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
        <SCHeader />
        {children}
      </body>
    </html>
  );
}
