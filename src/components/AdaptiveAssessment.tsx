'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

interface Question {
  id: string
  text: string
  options: string[]
  correctAnswer: string
  difficulty: number
}

const sampleQuestions: Question[] = [
  {
    id: '1',
    text: '¿Cuál es la capital de Francia?',
    options: ['Londres', 'Berlín', 'París', 'Madrid'],
    correctAnswer: 'París',
    difficulty: 1
  },
  {
    id: '2',
    text: '¿Cuál es el resultado de 8 x 7?',
    options: ['54', '56', '58', '60'],
    correctAnswer: '56',
    difficulty: 2
  },
  // Añade más preguntas aquí...
]

export default function AdaptiveAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [score, setScore] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(1)

  useEffect(() => {
    // En una implementación real, esto se conectaría a un backend para obtener preguntas adaptativas
    setCurrentQuestion(sampleQuestions[0])
  }, [])

  const handleSubmit = () => {
    if (currentQuestion && selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }

    // Lógica simple de adaptación: si responde correctamente, aumenta la dificultad
    const nextQuestionIndex = currentQuestion?.difficulty as number
    setCurrentQuestion(sampleQuestions[nextQuestionIndex] || null)
    setSelectedAnswer('')
    setQuestionNumber(questionNumber + 1)
  }

  if (!currentQuestion) {
    return (
      <Card>
        <CardContent>
          <h2 className="text-2xl font-bold">Evaluación Completada</h2>
          <p>Tu puntuación final es: {score}/{questionNumber - 1}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pregunta {questionNumber}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{currentQuestion.text}</p>
        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleSubmit} className="mt-4" disabled={!selectedAnswer}>
          Siguiente
        </Button>
      </CardContent>
    </Card>
  )
}