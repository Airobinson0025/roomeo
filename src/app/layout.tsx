import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import MainNavbar from "../components/global/navbar";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ThemeProvider } from "@/components/toggles/theme-toggle";


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
          <SmoothScroll>
            <MainNavbar/>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
