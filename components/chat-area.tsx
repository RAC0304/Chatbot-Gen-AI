"use client"

import { useState, useEffect, useRef } from "react"
import MessageBubble from "@/components/message-bubble"
import ChatInput from "@/components/chat-input"

interface Message {
  id: number;
  text: string;
  sender: "ai" | "user";
  timestamp?: string;
}

export default function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! Saya adalah Neural AI Assistant. Saya dapat membantu Anda dengan berbagai topik seperti AI, programming, web development, dan tips karir tech. Apa yang ingin Anda tanyakan?",
      sender: "ai"
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (messageText: string) => {
    // Add user message to chat
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: typeof window !== 'undefined' ? new Date().toLocaleTimeString() : undefined
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Call local chat API
      console.log('Sending message to API:', messageText);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      console.log('API response status:', response.status);

      const data = await response.json();
      console.log('API response data:', data);

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      // Add AI response to chat
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: data.response,
        sender: "ai",
        timestamp: typeof window !== 'undefined' ? new Date().toLocaleTimeString() : undefined
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Error sending message:', error);

      // Add error message
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Maaf, terjadi kesalahan. Silakan coba lagi dalam beberapa saat.",
        sender: "ai",
        timestamp: typeof window !== 'undefined' ? new Date().toLocaleTimeString() : undefined
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 pb-20 md:pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <h1 className="text-2xl md:text-4xl font-bold gradient-text mb-2">Neural AI Assistant</h1>
            <p className="text-foreground/60 text-sm md:text-lg">Chatbot cerdas dengan dataset lokal</p>
          </div>

          {/* Messages */}
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-3 md:px-4 py-2 max-w-xs">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-foreground/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-xs md:text-sm text-foreground/60">AI sedang berpikir...</span>
                  </div>
                </div>
              </div>
            )}
            {/* Invisible div for auto-scroll */}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  )
}
