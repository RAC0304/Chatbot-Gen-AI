"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

export default function ChatEmptyState() {
  const [greeting, setGreeting] = useState("")
  const [subGreeting, setSubGreeting] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const getGreeting = () => {
      // Get Jakarta time
      const jakartaTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "numeric",
        hour12: false
      })
      
      const hour = parseInt(jakartaTime)

      if (hour >= 5 && hour < 12) {
        return "Welcome, Good Morning"
      } else if (hour >= 12 && hour < 17) {
        return "Welcome, Good Afternoon"
      } else if (hour >= 17 && hour < 21) {
        return "Welcome, Good Evening"
      } else {
        return "Welcome, Good Night"
      }
    }

    const greetingMessages = [
      "What are you working on?",
      "How can I help you today?",
      "What would you like to know?",
      "Ready to assist you!",
      "Let's create something amazing!",
      "What's on your mind?",
    ]

    setGreeting(getGreeting())
    setSubGreeting(greetingMessages[Math.floor(Math.random() * greetingMessages.length)])

    // Update greeting every minute
    const interval = setInterval(() => {
      setGreeting(getGreeting())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 -mt-24">
      <div className="max-w-2xl w-full text-center space-y-6 animate-fade-in">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
        </div>

        {/* Main Greeting */}
        {mounted && (
          <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            {greeting}
          </h1>
        )}

        {/* Sub Greeting */}
        {mounted && (
          <h2 className="text-xl md:text-2xl text-foreground/70 font-medium">
            {subGreeting}
          </h2>
        )}
      </div>
    </div>
  )
}
