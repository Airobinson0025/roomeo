import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import MainNavbar from "../components/global/navbar";


const font = DM_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Roomeo",
  description: "The ultimate solution for young adults seeking compatible housemates and affordable housing in urban areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <MainNavbar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
