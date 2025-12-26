"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Sidebar from "@/components/sidebar"
import ChatArea from "@/components/chat-area"
import SpeechCleanup from "@/components/speech-cleanup"

interface Message {
  id: number
  text: string
  sender: "ai" | "user"
  timestamp?: string
}

interface ChatHistory {
  id: number
  firstMessage: string
  timestamp: Date
  messages: Message[]
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("chat")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [chatKey, setChatKey] = useState(0)
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([])
  const [currentChatId, setCurrentChatId] = useState<number | null>(null)
  const [currentMessages, setCurrentMessages] = useState<Message[]>([])

  // Load chat history from JSON file on mount
  useEffect(() => {
    fetch('/api/chat-history')
      .then(res => res.json())
      .then(data => {
        setChatHistory(data.map((chat: any) => ({
          ...chat,
          timestamp: new Date(chat.timestamp),
          messages: chat.messages || []
        })))
      })
      .catch(e => {
        console.error('Failed to load chat history:', e)
      })
  }, [])

  // Save chat history to JSON file when it changes
  useEffect(() => {
    if (chatHistory.length > 0) {
      fetch('/api/chat-history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(chatHistory)
      }).catch(e => {
        console.error('Failed to save chat history:', e)
      })
    }
  }, [chatHistory])

  // Update current chat messages in history whenever currentMessages changes
  useEffect(() => {
    if (currentChatId && currentMessages.length > 0) {
      setChatHistory(prev => prev.map(chat =>
        chat.id === currentChatId
          ? { ...chat, messages: currentMessages }
          : chat
      ))
    }
  }, [currentMessages, currentChatId])

  const handleNewChat = () => {
    setCurrentChatId(null)
    setCurrentMessages([])
    setChatKey(prev => prev + 1) // Force re-render ChatArea with new key
  }

  const handleFirstMessage = (message: string) => {
    if (!currentChatId) {
      const newChatId = Date.now()
      const newChat: ChatHistory = {
        id: newChatId,
        firstMessage: message,
        timestamp: new Date(),
        messages: []
      }
      setChatHistory(prev => [newChat, ...prev])
      setCurrentChatId(newChatId)
    }
  }

  const handleSelectChat = (chatId: number) => {
    const chat = chatHistory.find(c => c.id === chatId)
    if (chat) {
      setCurrentChatId(chatId)
      setCurrentMessages(chat.messages)
      setChatKey(prev => prev + 1)
    }
  }

  const handleDeleteChat = (chatId: number) => {
    // Delete from JSON file via API
    fetch('/api/chat-history', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chatId })
    }).catch(e => {
      console.error('Failed to delete chat:', e)
    })

    // Update local state
    setChatHistory(prev => prev.filter(chat => chat.id !== chatId))

    // If deleting current chat, reset
    if (currentChatId === chatId) {
      setCurrentChatId(null)
      setCurrentMessages([])
      setChatKey(prev => prev + 1)
    }
  }

  const handleMessagesUpdate = (messages: Message[]) => {
    setCurrentMessages(messages)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Global Speech Cleanup Handler */}
      <SpeechCleanup />

      {/* Sidebar - Hidden on mobile by default, collapsible on desktop */}
      <div className={`${sidebarOpen ? 'fixed inset-0 z-40 md:relative md:z-0' : 'hidden'} md:block`}>
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="relative z-50">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            collapsed={!sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            onNewChat={handleNewChat}
            chatHistory={chatHistory}
            onSelectChat={handleSelectChat}
            onDeleteChat={handleDeleteChat}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Desktop Header with Groq branding */}
        <div className="hidden md:flex items-center justify-between px-6 py-4 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Groq</span>
          </div>
        </div>

        {/* Mobile Header with hamburger */}
        <div className="md:hidden flex items-center justify-between p-3 border-b border-slate-700/50 bg-slate-900/95">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-white transition-all"
            title="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-md shadow-orange-500/20">
              <span className="text-white font-bold text-xs">G</span>
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Groq</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
            N
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "chat" && (
            <ChatArea
              key={chatKey}
              onFirstMessage={handleFirstMessage}
              initialMessages={currentMessages}
              onMessagesUpdate={handleMessagesUpdate}
            />
          )}
        </div>
      </div>
    </div>
  )
}
