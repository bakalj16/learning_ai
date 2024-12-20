'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface ProgressData {
  subject: string
  progress: number
}

const sampleProgressData: ProgressData[] = [
  { subject: 'Matemáticas', progress: 75 },
  { subject: 'Ciencias', progress: 60 },
  { subject: 'Literatura', progress: 80 },
  { subject: 'Historia', progress: 45 },
]

export default function StudentProgress() {
  const [progressData, setProgressData] = useState<ProgressData[]>([])

  useEffect(() => {
    // En una implementación real, esto se conectaría a un backend para obtener el progreso real del estudiante
    setProgressData(sampleProgressData)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tu Progreso</CardTitle>
      </CardHeader>
      <CardContent>
        {progressData.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{item.subject}</span>
              <span>{item.progress}%</span>
            </div>
            <Progress value={item.progress} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}