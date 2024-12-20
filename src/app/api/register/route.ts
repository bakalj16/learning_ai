import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    const hashedPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ user: { name: user.name, email: user.email } })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Error durante el registro' }, { status: 500 })
  }
}