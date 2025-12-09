"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import ChatArea from "@/components/chat-area"
import Dashboard from "@/components/dashboard"

export default function Home() {
  const [activeTab, setActiveTab] = useState("chat")

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header with Navigation */}
        <div className="md:hidden bg-background border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold gradient-text">Neural AI</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("chat")}
                className={`px-3 py-1 rounded text-sm ${activeTab === "chat"
                    ? "bg-cyan-500 text-white"
                    : "text-foreground/60"
                  }`}
              >
                Chat
              </button>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`px-3 py-1 rounded text-sm ${activeTab === "dashboard"
                    ? "bg-cyan-500 text-white"
                    : "text-foreground/60"
                  }`}
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "chat" && <ChatArea />}
          {activeTab === "dashboard" && <Dashboard />}
        </div>
      </div>
    </div>
  )
}
