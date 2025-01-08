import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, UserCircle, Share2, Bell } from 'lucide-react'
import ThemeToggle from "@/components/theme-toggle"

import { Waitlist } from "@clerk/nextjs"
import Waitlisted from "@/components/waitlist"

export default function Home() {

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-[#EEF1FF] via-[#F3F6FF] to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold">ProSchedular</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="#waitlist" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Join the Waitlist
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center px-4 pb-12 pt-20 text-center">
        <div className="flex gap-2">
          <Badge variant="secondary" className="rounded-full bg-white/80 backdrop-blur-sm px-4 py-1 dark:bg-gray-800/80">
            Waitlist Open
          </Badge>
          <Badge variant="secondary" className="rounded-full bg-white/80 backdrop-blur-sm px-4 py-1 dark:bg-gray-800/80">
            Coming Soon
          </Badge>
        </div>

        <h1 className="mt-12 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Revolutionize Scheduling with ProSchedular 🚀
        </h1>
        
        <p className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          Manage your appointments and showcase your expertise—all in one place.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl">
          <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50 transition-opacity group-hover:opacity-70 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
            <div className="relative">
              <Calendar className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Smart Scheduling</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Simplified appointment booking with customizable availability. Avoid double bookings and wasted time—our system manages your calendar automatically.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50 transition-opacity group-hover:opacity-70 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
            <div className="relative">
              <UserCircle className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Professional Profiles</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Create and share a professional landing page showcasing your services, expertise, and availability. Stand out with a personalized page that represents you.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50 transition-opacity group-hover:opacity-70 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
            <div className="relative">
              <Share2 className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Calendar Integrations</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Sync with Google Calendar, Outlook, and other tools. Keep everything in one place by connecting ProSchedular with your favorite calendar.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50 transition-opacity group-hover:opacity-70 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
            <div className="relative">
              <Bell className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Automated Notifications</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Send reminders and confirmations via email or SMS. Keep your clients in the loop with timely reminders that ensure everyone stays on schedule.
              </p>
            </div>
          </div>
        </div>
        
 
        <div id="waitlist" className="mt-16 w-full max-w-md space-y-4">
        <Waitlist
  appearance={{
    elements: {
      card: "bg-card border border-border shadow-lg rounded-xl p-6",
      headerTitle: "hidden",
      headerSubtitle: "text-muted-foreground",
      socialButtonsBackground: "bg-white hover:bg-white/60",
      dividerText: "text-muted-foreground",
      dividerLine: "bg-border",
      formFieldLabel: "text-foreground",
      footer: "hidden",
      button: "bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg", // Customize the button color here
    },
  }}
/>

        </div> 


        <div className="mt-10 text-center">
          <div className="flex justify-center -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800" />
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Join <span className="font-medium">500+</span> professionals already on the waitlist
          </p>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
        © ProSchedular – Simplify your workflow, increase efficiency, and enhance client experience.
      </footer>
    </div>
  )
}

