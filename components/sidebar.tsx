"use client"

import { useState } from "react"
import { Zap, MessageSquare, Settings, LogOut, X, PenSquare, Clock, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ChatHistory {
  id: number
  firstMessage: string
  timestamp: Date
}

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  collapsed?: boolean
  onToggle?: () => void
  onNewChat?: () => void
  chatHistory?: ChatHistory[]
  onSelectChat?: (chatId: number) => void
  onDeleteChat?: (chatId: number) => void
}

export default function Sidebar({ activeTab, setActiveTab, collapsed = false, onToggle, onNewChat, chatHistory = [], onSelectChat, onDeleteChat }: SidebarProps) {
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)

  const handleDelete = (chatId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setDeleteConfirm(chatId)
  }

  const confirmDelete = (chatId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    onDeleteChat?.(chatId)
    setDeleteConfirm(null)
  }

  const cancelDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    setDeleteConfirm(null)
  }

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-64'} h-screen bg-gradient-to-b from-slate-900/95 to-slate-800/90 border-r border-slate-700/50 flex flex-col backdrop-blur-sm transition-all duration-300`}>
      {/* Logo with Toggle */}
      <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
        {!collapsed ? (
          <>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Neural</h1>
                <p className="text-sm text-cyan-300 font-medium">AI Chat</p>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="p-1.5 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-white transition-all"
              title="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </>
        ) : (
          <button
            onClick={onToggle}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 mx-auto hover:scale-105 transition-transform cursor-pointer hidden md:flex"
            title="Open sidebar"
          >
            <Zap className="w-6 h-6 text-white" />
          </button>
        )}
      </div>

      {/* New Chat Button */}
      <div className="p-2">
        <Button
          onClick={onNewChat}
          variant="outline"
          className={`w-full ${collapsed ? 'justify-center px-2' : 'justify-start gap-3 px-4'} h-12 rounded-xl border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 text-cyan-300 hover:text-cyan-200 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25`}
          title="New Chat"
        >
          <PenSquare className="w-5 h-5" />
          {!collapsed && <span className="font-medium">New Chat</span>}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1 overflow-hidden flex flex-col">
        {/* All Chats Header */}
        {!collapsed && (
          <div className="px-4 py-2 flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <Clock className="w-3 h-3" />
            <span>All Chats</span>
          </div>
        )}

        {/* Chat History List */}
        {!collapsed && chatHistory.length > 0 ? (
          <ScrollArea className="flex-1">
            <div className="space-y-1 px-2">
              {chatHistory.map((chat) => (
                <div key={chat.id} className="relative group">
                  {deleteConfirm === chat.id ? (
                    /* Delete Confirmation */
                    <div className="w-full p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                      <p className="text-xs text-red-300 mb-2">Hapus chat ini?</p>
                      <div className="flex gap-2">
                        <Button
                          onClick={(e) => confirmDelete(chat.id, e)}
                          size="sm"
                          className="flex-1 h-7 text-xs bg-red-500 hover:bg-red-600 text-white"
                        >
                          Ya
                        </Button>
                        <Button
                          onClick={cancelDelete}
                          size="sm"
                          variant="outline"
                          className="flex-1 h-7 text-xs border-slate-600 hover:bg-slate-700"
                        >
                          Tidak
                        </Button>
                      </div>
                    </div>
                  ) : (
                    /* Chat Item */
                    <div className="relative">
                      <button
                        onClick={() => onSelectChat?.(chat.id)}
                        className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 text-left"
                        title={chat.firstMessage}
                      >
                        <MessageSquare className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0 pr-8">
                          <p className="text-sm text-slate-300 truncate max-w-[140px]">
                            {chat.firstMessage}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {new Date(chat.timestamp).toLocaleDateString('id-ID', { 
                              day: 'numeric', 
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </button>
                      {/* Delete Button */}
                      <button
                        onClick={(e) => handleDelete(chat.id, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-all z-10"
                        title="Delete chat"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        ) : !collapsed && chatHistory.length === 0 ? (
          <div className="flex-1 flex items-center justify-center px-4 py-8">
            <div className="text-center">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <p className="text-xs text-slate-500">No chat history yet</p>
              <p className="text-xs text-slate-600 mt-1">Start a new conversation</p>
            </div>
          </div>
        ) : null}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-slate-700/50 space-y-1">

        {/* User Profile */}
        {!collapsed ? (
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
        ) : (
          <div className="mt-4 mx-auto w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
            N
          </div>
        )}
      </div>
    </aside>
  )
}
