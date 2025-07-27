import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AnalyticsTracker from "@/components/analytics-tracker"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Full-Stack Developer Portfolio",
  description: "A professional portfolio showcasing full-stack development skills and projects",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense>
            <AnalyticsTracker />
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
