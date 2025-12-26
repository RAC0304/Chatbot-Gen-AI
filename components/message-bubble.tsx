"use client"

import { useState, useEffect } from "react"
import { Zap, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  const [isSpeaking, setIsSpeaking] = useState(false)

  // Cleanup: Stop speech when component unmounts or page refreshes
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  // Stop speech if user navigates away or refreshes
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const speakText = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech tidak didukung di browser ini.')
      return
    }

    if (isSpeaking) {
      // Stop speaking
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    } else {
      // Start speaking
      const utterance = new SpeechSynthesisUtterance(message.text)
      utterance.lang = 'id-ID' // Bahasa Indonesia
      utterance.rate = 0.9 // Kecepatan bicara
      utterance.pitch = 1.0 // Nada suara

      utterance.onend = () => {
        setIsSpeaking(false)
      }

      utterance.onerror = () => {
        setIsSpeaking(false)
      }

      window.speechSynthesis.speak(utterance)
      setIsSpeaking(true)
    }
  }

  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} gap-2 md:gap-3`}>
      {isAI && (
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex-shrink-0 flex items-center justify-center">
          <Zap className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <div
          className={`max-w-[280px] md:max-w-md px-3 md:px-4 py-2 md:py-3 rounded-xl ${isAI
            ? "bg-card border border-cyan-500/30 text-card-foreground"
            : "bg-gradient-to-r from-cyan-600 to-purple-600 text-white"
            }`}
        >
          <p className="text-xs md:text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>

          {message.timestamp && (
            <p className={`text-xs mt-1 ${isAI ? 'text-muted-foreground' : 'text-white/70'}`}>
              {message.timestamp}
            </p>
          )}
        </div>

        {/* Speaker button for AI messages */}
        {isAI && (
          <Button
            onClick={speakText}
            size="sm"
            variant="ghost"
            className={`self-start h-6 px-2 text-xs ${isSpeaking ? 'text-cyan-500 animate-pulse' : 'text-muted-foreground hover:text-cyan-500'
              }`}
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-3 h-3 mr-1" />
                Stop
              </>
            ) : (
              <>
                <Volume2 className="w-3 h-3 mr-1" />
                Dengar
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
