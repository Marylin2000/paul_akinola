import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('payload-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { error: 'No session token' },
        { status: 401 }
      );
    }

    // Validate token with Payload API
    const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3000/api'}/users/me`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Invalid session' },
        { status: 401 }
      );
    }

    const user = await response.json();

    return NextResponse.json(
      { success: true, user, token },
      { status: 200 }
    );
  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}