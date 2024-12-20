import { NextResponse } from 'next/server'

export async function GET() {
  // Simular obtención de datos analíticos
  const analytics = {
    retentionRate: Math.random() * 100,
    participationRate: Math.random() * 100,
    personalizationLevel: Math.random() * 100
  }

  return NextResponse.json(analytics)
}