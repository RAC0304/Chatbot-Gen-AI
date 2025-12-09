"use client"

import { Zap } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "ai" | "user"
  timestamp?: string
}

interface MessageBubbleProps {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isAI = message.sender === "ai"

  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} gap-2 md:gap-3`}>
      {isAI && (
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex-shrink-0 flex items-center justify-center">
          <Zap className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </div>
      )}
      <div
        className={`max-w-[280px] md:max-w-md px-3 md:px-4 py-2 md:py-3 rounded-xl ${isAI
            ? "bg-card border border-cyan-500/30 text-card-foreground"
            : "bg-gradient-to-r from-cyan-600 to-purple-600 text-white"
          }`}
      >
        <p className="text-xs md:text-sm leading-relaxed">{message.text}</p>
        {message.timestamp && (
          <p className={`text-xs mt-1 ${isAI ? 'text-muted-foreground' : 'text-white/70'}`}>
            {message.timestamp}
          </p>
        )}
      </div>
    </div>
  )
}
