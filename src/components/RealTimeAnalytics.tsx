'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function RealTimeAnalytics() {
  const [analytics, setAnalytics] = useState({
    retentionRate: 0,
    participationRate: 0,
    personalizationLevel: 0
  })

  useEffect(() => {
    const fetchAnalytics = async () => {
      // Simular obtención de datos analíticos en tiempo real
      const response = await fetch('/api/analytics')
      const data = await response.json()
      setAnalytics(data)
    }

    fetchAnalytics()
    const interval = setInterval(fetchAnalytics, 60000) // Actualizar cada minuto

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Retención de Conocimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{analytics.retentionRate.toFixed(2)}%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Participación</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{analytics.participationRate.toFixed(2)}%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Nivel de Personalización</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{analytics.personalizationLevel.toFixed(2)}%</p>
        </CardContent>
      </Card>
    </div>
  )
}