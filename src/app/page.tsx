import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Bienvenido a LearningAI</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Descubre una nueva forma de aprender con nuestro sistema de enseñanza personalizado basado en redes neuronales.
      </p>
      <div className="flex space-x-4">
        <Link href="/login">
          <Button>Iniciar Sesión</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline">Registrarse</Button>
        </Link>
      </div>
    </div>
  )
}