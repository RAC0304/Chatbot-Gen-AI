"use client"

import { Zap, BarChart3, MessageSquare, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-slate-900/95 to-slate-800/90 border-r border-slate-700/50 flex flex-col backdrop-blur-sm">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Neural</h1>
            <p className="text-sm text-cyan-300 font-medium">AI Chat</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <Button
          onClick={() => setActiveTab("chat")}
          variant="ghost"
          className={`w-full justify-start gap-3 h-12 rounded-xl transition-all duration-200 ${activeTab === "chat"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
              : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
        >
          <MessageSquare className={`w-5 h-5 ${activeTab === "chat" ? "text-white" : ""}`} />
          <span className="font-medium">Chat</span>
        </Button>

        <Button
          onClick={() => setActiveTab("dashboard")}
          variant="ghost"
          className={`w-full justify-start gap-3 h-12 rounded-xl transition-all duration-200 ${activeTab === "dashboard"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
              : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
        >
          <BarChart3 className={`w-5 h-5 ${activeTab === "dashboard" ? "text-white" : ""}`} />
          <span className="font-medium">Dashboard</span>
        </Button>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700/50 space-y-1">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-12 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-12 rounded-xl text-slate-300 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </Button>

        {/* User Profile */}
        <div className="mt-4 p-3 rounded-xl bg-slate-800/60 border border-slate-700/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Neural User</p>
              <p className="text-xs text-slate-400">Online</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
