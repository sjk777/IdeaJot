import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './(marketing)/_components/providers/theme-provider'
import { ConvexClientProvider } from './(marketing)/_components/providers/convex.provider'
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IdeaJot',
  description: 'Your partner to organization',
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme: light)",
        url:"/logo.svg",
        href:"/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url:"/logo-dark.svg",
        href:"/logo-dark.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* wrapped the ThemeProvider with the ConvexClientProvider to add the convex provider to the website */}
        <ConvexClientProvider>
        {/* Followed Shadcn documenation to add darkmode to the website */}
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="ideaJot-theme-2">
        {children}
        <Toaster position="bottom-center"/>
        </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  )
}
