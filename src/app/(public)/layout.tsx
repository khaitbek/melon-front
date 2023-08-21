import { MainThemeProvider } from "@/providers";
import { Inter, Laila, Montserrat } from 'next/font/google';
import '../globals.css';
import { Header } from "@/components";

const inter = Inter({ subsets: ['latin', 'cyrillic', 'latin-ext', 'cyrillic-ext'], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ['latin', 'cyrillic', 'latin-ext', 'cyrillic-ext'], variable: "--font-montserrat" });
const laila = Laila({ subsets: ['latin', 'latin-ext'], weight: "500", variable: "--font-laila" });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html suppressHydrationWarning lang="en">
        <body className={`${inter.variable} ${montserrat.variable} ${laila.variable} font-montserrat`}>
          <MainThemeProvider>
            {/* <Header /> */}
            {children}
          </MainThemeProvider>
        </body>
      </html>
    </>
  )
}