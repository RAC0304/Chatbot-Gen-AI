"use client"

import { useState, useEffect, useRef } from "react"
import MessageBubble from "@/components/message-bubble"
import ChatInput from "@/components/chat-input"
import ChatEmptyState from "@/components/chat-empty-state"

interface Message {
  id: number;
  text: string;
  sender: "ai" | "user";
  timestamp?: string;
  imageUrl?: string;
  type?: "text" | "image";
}

interface ChatAreaProps {
  onFirstMessage?: (message: string) => void;
  initialMessages?: Message[];
  onMessagesUpdate?: (messages: Message[]) => void;
}

export default function ChatArea({ onFirstMessage, initialMessages = [], onMessagesUpdate }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isFirstMessage = useRef(initialMessages.length === 0);

  // Load initial messages when prop changes
  useEffect(() => {
    setMessages(initialMessages)
    isFirstMessage.current = initialMessages.length === 0
  }, [initialMessages])

  // Notify parent when messages change
  useEffect(() => {
    if (onMessagesUpdate && messages.length > 0) {
      onMessagesUpdate(messages)
    }
  }, [messages, onMessagesUpdate])

  // Auto scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (messageText: string) => {
    // Call onFirstMessage callback if this is the first message
    if (isFirstMessage.current && onFirstMessage) {
      onFirstMessage(messageText);
      isFirstMessage.current = false;
    }

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
        body: JSON.stringify({ 
          message: messageText,
          chatHistory: messages // Kirim history untuk context
        }),
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

  const generateImage = async (prompt: string) => {
    // Add user message to chat
    const userMessage: Message = {
      id: Date.now(),
      text: `Generate image: ${prompt}`,
      sender: "user",
      timestamp: typeof window !== 'undefined' ? new Date().toLocaleTimeString() : undefined,
      type: "text"
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      console.log('Generating image with prompt:', prompt);

      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      console.log('Image API response status:', response.status);

      const data = await response.json();
      console.log('Image API response data received');

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      // Add AI response with image
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: `Gambar berhasil dibuat untuk prompt: "${prompt}"`,
        sender: "ai",
        timestamp: typeof window !== 'undefined' ? new Date().toLocaleTimeString() : undefined,
        imageUrl: data.imageUrl,
        type: "image"
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('Error generating image:', error);

      // Add error message
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: error.message?.includes('Model is currently loading') 
          ? "Model sedang loading. Silakan coba lagi dalam beberapa saat." 
          : "Maaf, gagal membuat gambar. Silakan coba lagi.",
        sender: "ai",
        timestamp: typeof window !== 'undefined' ? new Date().toLocaleTimeString() : undefined,
        type: "text"
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-950/80">
      {messages.length === 0 ? (
        /* Empty State */
        <ChatEmptyState />
      ) : (
        /* Messages Area */
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto">
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
      )}

      {/* Chat Input */}
      <ChatInput onSendMessage={sendMessage} onGenerateImage={generateImage} isLoading={isLoading} />
    </div>
  )
}
