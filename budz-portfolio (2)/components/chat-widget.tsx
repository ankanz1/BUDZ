"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi there! How can I help you today?",
      sender: "agent",
      timestamp: new Date().toISOString(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim() === "") return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: newMessage,
      sender: "user",
      timestamp: new Date().toISOString(),
    }

    setMessages([...messages, userMessage])
    setNewMessage("")

    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentMessage = {
        id: messages.length + 2,
        content: "Thanks for your message! One of our team members will get back to you shortly.",
        sender: "agent",
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, agentMessage])
    }, 1000)
  }

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className={`w-80 sm:w-96 shadow-lg transition-all duration-300 ${isMinimized ? "h-14" : "h-[450px]"}`}>
          <CardHeader className="p-4 border-b flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Support Agent" />
                <AvatarFallback>BZ</AvatarFallback>
              </Avatar>
              <CardTitle className="text-base">BUDZ Support</CardTitle>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={toggleMinimize} className="h-8 w-8">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-4 overflow-y-auto h-[330px]">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-2 border-t">
                <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" className="h-10 w-10">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </>
          )}
        </Card>
      ) : (
        <Button onClick={toggleChat} size="icon" className="h-14 w-14 rounded-full shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

