import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LearningAI - Sistema de Aprendizaje Personalizado',
  description: 'Sistema basado en Redes Neuronales para mejorar el Proceso de Enseñanza y Aprendizaje',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">LearningAI</h1>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">Inicio</Link>
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <Link href="/profile" className="hover:underline">Perfil</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
      </body>
    </html>
  )
}