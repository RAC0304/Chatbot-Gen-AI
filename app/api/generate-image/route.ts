import { NextRequest, NextResponse } from 'next/server';
import { HfInference } from '@huggingface/inference';

export async function POST(req: NextRequest) {
    try {
        const { prompt } = await req.json();

        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json(
                { error: 'Prompt is required and must be a string' },
                { status: 400 }
            );
        }

        console.log('Generating image for prompt:', prompt);

        // Cek apakah Hugging Face API key tersedia
        if (!process.env.HUGGINGFACE_API_KEY) {
            console.error('HUGGINGFACE_API_KEY is not configured');
            return NextResponse.json(
                { error: 'Hugging Face API key not configured. Please add HUGGINGFACE_API_KEY to .env.local' },
                { status: 500 }
            );
        }

        console.log('Calling Hugging Face API with official SDK...');

        // Inisialisasi Hugging Face Inference client
        const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

        // Generate image menggunakan Stable Diffusion XL
        const result = await hf.textToImage({
            model: 'stabilityai/stable-diffusion-xl-base-1.0',
            inputs: prompt,
            parameters: {
                negative_prompt: 'blurry, bad quality, low resolution',
            }
        });

        console.log('Converting image to base64...');

        // HfInference mengembalikan Blob, konversi ke base64
        const arrayBuffer = await (result as unknown as Blob).arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Image = buffer.toString('base64');
        
        // Return image sebagai data URL
        const imageUrl = `data:image/png;base64,${base64Image}`;

        console.log('Image generated successfully, base64 length:', base64Image.length);

        return NextResponse.json({ 
            imageUrl,
            prompt 
        });

    } catch (error: any) {
        console.error('Error generating image:', error);
        console.error('Error stack:', error.stack);
        
        // Handle specific errors
        let errorMessage = 'Gagal membuat gambar: ';
        
        if (error.message?.includes('Model') && error.message?.includes('loading')) {
            errorMessage = 'Model sedang loading. Tunggu 30-60 detik dan coba lagi.';
        } else if (error.message?.includes('401') || error.message?.includes('Unauthorized')) {
            errorMessage = 'API key tidak valid. Periksa HUGGINGFACE_API_KEY di .env.local';
        } else if (error.message?.includes('429') || error.message?.includes('rate limit')) {
            errorMessage = 'Terlalu banyak request. Tunggu beberapa saat.';
        } else {
            errorMessage += error.message || 'Unknown error';
        }
        
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
