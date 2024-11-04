import { NextResponse } from 'next/server'
import { db } from '@/lib/db' // You'll need to set up your database connection

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Store in database
    await db.subscriber.create({
      data: {
        email,
        name,
      },
    })

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 