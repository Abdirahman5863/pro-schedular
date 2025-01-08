import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'ProScheduler - Revolutionize Your Scheduling',
  description: 'Join the waitlist for ProScheduler - the ultimate tool that combines smart scheduling with portfolio management. Simplify your workflow and enhance your client experience.',
  keywords: ['scheduling', 'portfolio', 'professional tools', 'time management', 'client booking'],
  openGraph: {
    title: 'ProScheduler - Revolutionize Your Scheduling',
    description: 'Join the waitlist for ProScheduler - the ultimate tool that combines smart scheduling with portfolio management.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
       
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
    
    </ClerkProvider>
  )
}

