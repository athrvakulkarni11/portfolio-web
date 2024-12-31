import type { Metadata } from "next"
import { JetBrains_Mono } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Athrva Kulkarni - AI Engineer & Developer",
  description: "Portfolio of Athrva Kulkarni - Computer Science Engineer specializing in AI",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn(
        "min-h-screen bg-gray-50 dark:bg-[#444343] font-mono antialiased overflow-x-hidden",
        jetbrainsMono.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="p-4 md:p-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

