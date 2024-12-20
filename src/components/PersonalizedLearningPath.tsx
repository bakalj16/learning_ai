'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

interface LearningModule {
  id: string
  title: string
  completed: boolean
}

export default function PersonalizedLearningPath() {
  const [modules, setModules] = useState<LearningModule[]>([])
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)

  useEffect(() => {
    // Simular la carga de módulos desde una API
    const fetchedModules: LearningModule[] = [
      { id: '1', title: 'Introducción a las ecuaciones', completed: false },
      { id: '2', title: 'Propiedades de los triángulos', completed: false },
      { id: '3', title: 'Álgebra básica', completed: false },
    ]
    setModules(fetchedModules)
  }, [])

  const handleCompleteModule = () => {
    setModules(prevModules => {
      const newModules = [...prevModules]
      newModules[currentModuleIndex].completed = true
      return newModules
    })

    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(prevIndex => prevIndex + 1)
    }
  }

  const progress = (modules.filter(m => m.completed).length / modules.length) * 100

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Tu Ruta de Aprendizaje Personalizada</CardTitle>
      </CardHeader>
      <CardContent>
        {modules.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mb-2">{modules[currentModuleIndex].title}</h3>
            <Progress value={progress} className="mb-4" />
            <Button onClick={handleCompleteModule} disabled={modules[currentModuleIndex].completed}>
              {modules[currentModuleIndex].completed ? 'Completado' : 'Marcar como completado'}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}