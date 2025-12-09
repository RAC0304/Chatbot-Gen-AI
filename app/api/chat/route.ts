import { NextRequest, NextResponse } from 'next/server';
import { findResponse } from '@/lib/chat-dataset';

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Message is required and must be a string' },
                { status: 400 }
            );
        }

        console.log('Processing message:', message);

        // Simulasi delay untuk pengalaman yang lebih realistis
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

        // Dapatkan response dari dataset
        const response = findResponse(message);

        console.log('Generated response:', response);

        return NextResponse.json({ response });
    } catch (error: any) {
        console.error('Error processing message:', error);
        return NextResponse.json(
            { error: 'Failed to process message' },
            { status: 500 }
        );
    }
}
