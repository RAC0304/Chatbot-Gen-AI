"use client"

import { useState, useEffect } from "react"
import { Send, Loader2, Mic, MicOff, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export default function ChatInput({ onSendMessage, isLoading = false }: ChatInputProps) {
  const [input, setInput] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState<any>(null)

  useEffect(() => {
    // Initialize speech recognition
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      const recognitionInstance = new SpeechRecognition()
      recognitionInstance.continuous = false
      recognitionInstance.interimResults = false
      recognitionInstance.lang = 'id-ID' // Bahasa Indonesia

      recognitionInstance.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInput(transcript)
        setIsListening(false)
      }

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error)
        setIsListening(false)
      }

      recognitionInstance.onend = () => {
        setIsListening(false)
      }

      setRecognition(recognitionInstance)
    }
  }, [])

  const toggleListening = () => {
    if (!recognition) {
      alert('Speech recognition tidak didukung di browser ini. Gunakan Chrome atau Edge.')
      return
    }

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      recognition.start()
      setIsListening(true)
    }
  }

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };



  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-80 md:right-6 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="relative flex items-center gap-2">
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-70" />
            <div className="relative bg-card border border-cyan-500/50 rounded-full flex items-center px-4 md:px-6 py-2 md:py-3 glow-border">
              <Input
                type="text"
                placeholder={isListening ? "Mendengarkan..." : "Ketik pertanyaanmu di sini..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading || isListening}
                className="bg-transparent border-0 placeholder-foreground/40 focus:outline-none text-foreground text-sm md:text-base"
              />
            </div>
          </div>

          {/* Mic Button */}
          <Button
            onClick={toggleListening}
            size="icon"
            disabled={isLoading}
            className={`rounded-full ${isListening
                ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
              } text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 h-10 w-10 md:h-12 md:w-12`}
            title="Voice Input"
          >
            {isListening ? (
              <MicOff className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Mic className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </Button>

          {/* Send Button */}
          <Button
            onClick={handleSend}
            size="icon"
            disabled={!input.trim() || isLoading}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 h-10 w-10 md:h-12 md:w-12"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
            ) : (
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
