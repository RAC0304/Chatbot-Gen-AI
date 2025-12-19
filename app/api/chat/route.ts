import { NextRequest, NextResponse } from 'next/server';
import { findResponse } from '@/lib/chat-dataset';
import Groq from 'groq-sdk';

// Inisialisasi Groq dengan Llama
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || ''
});

export async function POST(req: NextRequest) {
    try {
        const { message, chatHistory } = await req.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Message is required and must be a string' },
                { status: 400 }
            );
        }

        console.log('Processing message:', message);
        console.log('Chat history provided:', chatHistory ? 'Yes' : 'No');

        // Simulasi delay untuk pengalaman yang lebih realistis
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

        // Coba dapatkan response dari dataset
        const datasetResponse = findResponse(message);

        let response: string;

        // Jika tidak ditemukan di dataset (null), gunakan Groq API
        if (datasetResponse === null) {
            console.log('Question not in dataset, using Groq API...');
            
            // Cek apakah API key tersedia
            if (!process.env.GROQ_API_KEY) {
                console.warn('Groq API key not configured, using fallback response');
                response = "Maaf, pertanyaan Anda di luar topik yang saya kuasai saat ini. Saya lebih ahli dalam topik teknologi, programming, AI, dan hal-hal terkait IT. Bisakah Anda bertanya tentang topik tersebut?";
            } else {
                try {
                    // Build conversation history untuk context
                    const messages: any[] = [
                        {
                            role: "system",
                            content: "Kamu adalah Neural AI, asisten penelitian dan teknologi yang sangat cerdas. Tugasmu:\n\n1. WAJIB membaca seluruh chat history untuk memahami konteks percakapan\n2. Jika user bertanya tentang topik/penelitian/kode yang disebutkan sebelumnya, HARUS merujuk dan menggunakan informasi dari chat history tersebut\n3. Berikan jawaban yang detail, spesifik, dan relevan dengan pertanyaan user\n4. Jangan pernah bilang 'tidak punya akses' atau 'tidak tahu' jika informasi sudah ada di chat history\n5. Jawab dalam bahasa Indonesia dengan format bersih tanpa ** atau *\n\nContoh: Jika user cerita tentang penelitian X di pesan pertama, lalu tanya 'apa yang kamu lakukan dengan penelitian saya' di pesan kedua, kamu HARUS jawab berdasarkan penelitian X yang disebutkan sebelumnya."
                        }
                    ];

                    // Tambahkan chat history jika ada - ambil semua untuk context penuh
                    if (chatHistory && Array.isArray(chatHistory) && chatHistory.length > 0) {
                        console.log('Total chat history:', chatHistory.length);
                        
                        // Ambil 20 pesan terakhir untuk context yang cukup
                        const recentHistory = chatHistory.slice(-20);
                        recentHistory.forEach((msg: any) => {
                            if (msg.text && msg.sender) {
                                messages.push({
                                    role: msg.sender === 'user' ? 'user' : 'assistant',
                                    content: msg.text
                                });
                            }
                        });
                    }

                    // Tambahkan pesan user saat ini
                    messages.push({
                        role: "user",
                        content: message
                    });

                    console.log('Total messages sent to Groq:', messages.length);
                    console.log('Last user message:', message);

                    // Gunakan Groq API dengan model Llama
                    const chatCompletion = await groq.chat.completions.create({
                        messages: messages,
                        model: "llama-3.3-70b-versatile",
                        temperature: 0.3,
                        max_tokens: 2048,
                    });
                    
                    let rawResponse = chatCompletion.choices[0]?.message?.content || 
                                      "Maaf, saya tidak dapat memberikan respons yang tepat saat ini.";
                    
                    // Bersihkan format markdown yang tidak diinginkan
                    response = rawResponse
                        .replace(/\*\*([^*]+)\*\*/g, '$1')  // Hapus bold **text**
                        .replace(/\*([^*]+)\*/g, '$1');      // Hapus italic *text*
                    
                    console.log('Response from Groq API:', response);
                } catch (groqError: any) {
                    console.error('Error calling Groq API:', groqError);
                    
                    // Tampilkan error detail untuk debugging
                    if (groqError?.message) {
                        console.error('Error message:', groqError.message);
                    }
                    
                    response = "Maaf, saya sedang mengalami kesulitan untuk menjawab pertanyaan Anda. Bisakah Anda mencoba bertanya dengan cara yang berbeda atau tentang topik teknologi yang saya kuasai?";
                }
            }
        } else {
            response = datasetResponse;
            console.log('Response from dataset:', response);
        }

        return NextResponse.json({ response });
    } catch (error: any) {
        console.error('Error processing message:', error);
        return NextResponse.json(
            { error: 'Failed to process message' },
            { status: 500 }
        );
    }
}
