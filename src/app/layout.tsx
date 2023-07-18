import { type Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "~/lib/utils"
import "~/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Magic Beats",
  description: "Ahmedabad's best music academy.",
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", inter.variable)}>
        {children}
      </body>
    </html>
  )
}
