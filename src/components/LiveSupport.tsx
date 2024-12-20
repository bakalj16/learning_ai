'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  id: string
  sender: 'user' | 'support'
  text: string
}

export default function LiveSupport() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        sender: 'user',
        text: newMessage.trim()
      }
      setMessages([...messages, userMessage])
      setNewMessage('')

      // Simular respuesta del soporte
      setTimeout(() => {
        const supportMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'support',
          text: '¡Gracias por tu mensaje! Un representante te atenderá pronto.'
        }
        setMessages(prevMessages => [...prevMessages, supportMessage])
      }, 1000)
    }
  }

  return (
    <Card className="h-[400px] flex flex-col">
      <CardHeader>
        <CardTitle>Soporte en Vivo</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-2 ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>Enviar</Button>
        </div>
      </div>
    </Card>
  )
}