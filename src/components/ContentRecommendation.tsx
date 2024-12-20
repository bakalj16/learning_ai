'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ContentItem {
  id: string
  title: string
  type: 'video' | 'article' | 'quiz'
  difficulty: number
}

const sampleContent: ContentItem[] = [
  { id: '1', title: 'Introducción a las ecuaciones', type: 'video', difficulty: 1 },
  { id: '2', title: 'Propiedades de los triángulos', type: 'article', difficulty: 2 },
  { id: '3', title: 'Quiz de álgebra básica', type: 'quiz', difficulty: 1 },
  // Añade más contenido aquí...
]

export default function ContentRecommendation() {
  const [recommendations, setRecommendations] = useState<ContentItem[]>([])

  useEffect(() => {
    // En una implementación real, esto se conectaría a un backend para obtener recomendaciones personalizadas
    setRecommendations(sampleContent.slice(0, 3))
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contenido Recomendado</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {recommendations.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.title}</span>
              <Button variant="outline" size="sm">
                {item.type === 'video' ? 'Ver' : item.type === 'article' ? 'Leer' : 'Intentar'}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}