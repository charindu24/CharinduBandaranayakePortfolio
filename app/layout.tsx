import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./Provider";
 // Import your music player

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charindu's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/iconlogo.png" sizes="any" className="rounded-full" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
