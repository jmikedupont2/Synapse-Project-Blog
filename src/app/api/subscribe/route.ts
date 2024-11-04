import { NextResponse } from 'next/server'
import { createSubscription } from '@/lib/subscription'

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

    // Use the subscription service instead of direct DB access
    const subscription = await createSubscription(email, name)

    return NextResponse.json(
      { 
        message: 'Subscription successful',
        data: subscription 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    
    // Handle specific error cases
    if (error instanceof Error) {
      if (error.message.includes('duplicate')) {
        return NextResponse.json(
          { error: 'Email already subscribed' },
          { status: 409 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    )
  }
} 