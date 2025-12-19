module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/chat-dataset.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dataset chatbot untuk berbagai topik
__turbopack_context__.s([
    "chatDataset",
    ()=>chatDataset,
    "findResponse",
    ()=>findResponse
]);
const chatDataset = [
    // Salam dan greeting
    {
        patterns: [
            "halo",
            "hai",
            "hello",
            "hi",
            "selamat pagi",
            "selamat siang",
            "selamat sore",
            "selamat malam",
            "good morning",
            "good afternoon",
            "good evening",
            "hey",
            "howdy",
            "greetings",
            "assalamualaikum",
            "apa kabar",
            "how are you",
            "what's up"
        ],
        responses: [
            "Halo! Senang bertemu dengan Anda. Ada yang bisa saya bantu?",
            "Hai! Saya Neural AI Assistant. Bagaimana kabar Anda hari ini?",
            "Halo! Saya siap membantu Anda. Apa yang ingin Anda tanyakan?",
            "Hai! Selamat datang! Ada yang bisa saya bantu hari ini?",
            "Halo! Saya di sini untuk membantu Anda dengan berbagai topik teknologi.",
            "Hi there! Senang bisa ngobrol dengan Anda. Mari mulai diskusi!",
            "Selamat datang! Saya siap membahas apapun yang Anda ingin tahu.",
            "Halo! Hari yang bagus untuk belajar hal baru, bukan? Apa yang mau dibahas?"
        ],
        category: "greeting"
    },
    // Tentang Bot/Neural AI
    {
        patterns: [
            "siapa kamu",
            "apa itu neural",
            "tentang kamu",
            "perkenalan",
            "siapa neural",
            "kamu siapa",
            "identitas",
            "profil bot",
            "about you",
            "who are you",
            "neural ai",
            "tentang neural",
            "introduce yourself",
            "tell me about yourself",
            "kamu adalah siapa",
            "siapa sebenarnya",
            "kamu siapa sebenarnya",
            "kamu adalah siapa sebenarnya",
            "siapa diri kamu",
            "apa identitas kamu",
            "kenalan dong",
            "siapa sih kamu"
        ],
        responses: [
            "Saya adalah Neural AI, asisten virtual yang dirancang untuk membantu Anda dalam berbagai hal. Saya dapat menjawab pertanyaan, memberikan informasi, dan membantu dengan berbagai topik.",
            "Perkenalkan, saya Neural - sebuah AI chatbot yang dikembangkan untuk memberikan bantuan dan informasi. Saya senang bisa membantu Anda!",
            "Halo! Saya Neural AI, asisten digital yang siap membantu 24/7. Saya dapat mendiskusikan berbagai topik dari teknologi, pendidikan, hingga kehidupan sehari-hari.",
            "Saya adalah Neural, AI assistant yang dirancang untuk memberikan respons yang helpful dan informatif. Tujuan saya adalah membantu memudahkan hidup Anda.",
            "Neural AI di sini! Saya adalah chatbot yang dapat membantu Anda dengan pertanyaan, memberikan saran, dan berdiskusi tentang berbagai topik menarik.",
            "Saya Neural, asisten AI yang bersahabat. Dibuat dengan tujuan untuk menjadi partner diskusi yang informatif dan menyenangkan bagi setiap pengguna.",
            "Hi! Saya Neural AI - kombinasi teknologi dan kepribadian yang ramah. Saya di sini untuk membuat pengalaman chat Anda menjadi lebih berkesan."
        ],
        category: "about_bot"
    },
    // Kemampuan Bot
    {
        patterns: [
            "kemampuan",
            "fungsi",
            "fitur",
            "what can you do",
            "ability",
            "skill",
            "keahlian",
            "capabilities",
            "features",
            "kerjaan",
            "kerja apa",
            "ngapain aja",
            "kerjaannya",
            "kerjaannya apa",
            "kerjaan apa",
            "tugas kamu",
            "tugas apa",
            "bisa bantu apa"
        ],
        responses: [
            "Saya dapat membantu Anda dengan:\n• Menjawab pertanyaan umum\n• Memberikan informasi tentang teknologi\n• Membantu dengan pembelajaran dan edukasi\n• Berdiskusi tentang berbagai topik\n• Memberikan saran dan tips\n• Dan masih banyak lagi!",
            "Kemampuan saya meliputi:\n✨ Menjawab pertanyaan dalam bahasa Indonesia dan Inggris\n✨ Memberikan penjelasan tentang teknologi dan programming\n✨ Membantu dengan tugas akademik\n✨ Berdiskusi tentang hobi dan minat\n✨ Memberikan motivasi dan inspirasi",
            "Saya dirancang untuk membantu Anda dalam berbagai hal seperti menjawab pertanyaan, memberikan informasi, membantu pembelajaran, dan menjadi teman diskusi yang menyenangkan!",
            "Sebagai AI assistant, saya dapat membantu dengan informasi teknologi, pendidikan, lifestyle, kesehatan, dan topik umum lainnya. Saya juga bisa menjadi teman chat yang asik!",
            "Fitur utama saya:\n🤖 Respons cepat dan akurat\n🧠 Pengetahuan luas di berbagai bidang\n💬 Komunikasi natural dalam bahasa Indonesia\n🎯 Fokus membantu kebutuhan Anda",
            "Saya specialist dalam:\n- Teknologi dan programming\n- Edukasi dan pembelajaran\n- Lifestyle dan tips sehari-hari\n- Motivasi dan pengembangan diri\n- Diskusi topik menarik"
        ],
        category: "capabilities"
    },
    // Cara kerja Bot
    {
        patterns: [
            "cara kerja",
            "teknologi bot",
            "AI technology",
            "machine learning bot",
            "how do you work"
        ],
        responses: [
            "Saya bekerja menggunakan teknologi AI dan natural language processing untuk memahami pertanyaan Anda dan memberikan respons yang relevan. Saya dilatih dengan berbagai data untuk bisa membantu Anda.",
            "Sebagai AI, saya menggunakan algoritma machine learning untuk memproses bahasa natural dan memberikan jawaban yang sesuai dengan konteks percakapan kita.",
            "Teknologi di balik saya mencakup pemrosesan bahasa alami (NLP) dan neural networks yang memungkinkan saya memahami dan merespons dengan cara yang natural.",
            "Saya adalah hasil dari pengembangan AI modern yang menggabungkan deep learning dan language models untuk menciptakan interaksi yang meaningful dengan pengguna.",
            "Cara kerja saya melibatkan analisis pola bahasa, pemahaman konteks, dan pengambilan informasi dari knowledge base yang luas untuk memberikan respons terbaik.",
            "Neural AI dibangun dengan arsitektur modern yang memungkinkan pemahaman bahasa Indonesia yang baik dan respons yang contextual sesuai kebutuhan Anda."
        ],
        category: "how_it_works"
    },
    // Quantum Computing
    {
        patterns: [
            "quantum computing",
            "quantum",
            "qubit",
            "superposition",
            "entanglement",
            "quantum algorithm",
            "quantum supremacy"
        ],
        responses: [
            "Quantum computing menggunakan quantum mechanics principles untuk processing information. Qubits bisa exist dalam superposition, enabling parallel computations.",
            "Quantum advantages: solving certain problems exponentially faster than classical computers. Applications: cryptography, optimization, drug discovery, financial modeling.",
            "Major players: IBM, Google, Amazon Braket, Microsoft Azure Quantum. Programming languages: Qiskit (IBM), Cirq (Google), Q# (Microsoft).",
            "Quantum algorithms: Shor's (factoring), Grover's (search), variational quantum eigensolver. Each designed untuk specific problem types.",
            "Current limitations: quantum decoherence, error rates, limited qubit counts. We're still in NISQ (Noisy Intermediate-Scale Quantum) era.",
            "Quantum supremacy achieved untuk specific tasks, but practical quantum advantage untuk real-world problems masih developing."
        ],
        category: "quantum"
    },
    // Penutup dan Terima Kasih
    {
        patterns: [
            "terima kasih",
            "thanks",
            "thank you",
            "makasih",
            "appreciate",
            "helpful",
            "great",
            "awesome",
            "good",
            "selesai",
            "bye",
            "goodbye",
            "sampai jumpa"
        ],
        responses: [
            "Sama-sama! Senang bisa membantu. Jangan ragu untuk bertanya lagi kapan saja. Keep learning dan keep growing! 🚀",
            "You're welcome! Semoga informasinya bermanfaat. Remember, setiap expert dulu adalah beginner. Keep pushing forward! 💪",
            "Terima kasih sudah ngobrol! Always remember: continuous learning adalah kunci sukses di tech industry. See you next time! ✨",
            "Glad I could help! Jangan lupa praktek apa yang sudah dipelajari. Theory without practice adalah just wishful thinking. Good luck! 🌟",
            "Sampai jumpa! Keep building, keep learning, keep growing. The tech world needs innovative minds like yours! 🔥"
        ],
        category: "closing"
    }
];
function findResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    // Handle empty input
    if (!input) {
        return "Silakan ketik pertanyaan atau topik yang ingin Anda bahas. Saya siap membantu! 😊";
    }
    // Cari kategori yang paling cocok dengan scoring system
    let bestMatch = {
        score: 0,
        responses: [],
        matchedPattern: ''
    };
    for (const item of chatDataset){
        let score = 0;
        let matchedPattern = '';
        for (const pattern of item.patterns){
            const patternLower = pattern.toLowerCase();
            // Exact match gets highest score
            if (input === patternLower) {
                score = 1000;
                matchedPattern = pattern;
                break;
            }
            // Check if input contains the full pattern
            if (input.includes(patternLower)) {
                // Score based on pattern length and position
                const patternScore = pattern.length * 2;
                if (patternScore > score) {
                    score = patternScore;
                    matchedPattern = pattern;
                }
            }
            // Check if pattern is part of a word in input (not just substring)
            const words = input.split(/\s+/);
            for (const word of words){
                if (word === patternLower) {
                    const wordScore = pattern.length * 1.5;
                    if (wordScore > score) {
                        score = wordScore;
                        matchedPattern = pattern;
                    }
                }
            }
        }
        if (score > bestMatch.score) {
            bestMatch = {
                score,
                responses: item.responses,
                matchedPattern
            };
        }
    }
    // Minimum score threshold to consider it a match
    // This prevents weak matches from triggering dataset responses
    const minimumScore = 3; // Reduced from pattern length threshold
    if (bestMatch.score >= minimumScore) {
        const randomIndex = Math.floor(Math.random() * bestMatch.responses.length);
        return bestMatch.responses[randomIndex];
    }
    // Return null to trigger Groq API (Llama)
    return null;
}
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:stream/web [external] (node:stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream/web", () => require("node:stream/web"));

module.exports = mod;
}),
"[project]/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2d$dataset$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/chat-dataset.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2d$sdk$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/groq-sdk/index.mjs [app-route] (ecmascript) <locals>");
;
;
;
// Inisialisasi Groq dengan Llama
const groq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2d$sdk$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]({
    apiKey: process.env.GROQ_API_KEY || ''
});
async function POST(req) {
    try {
        const { message, chatHistory } = await req.json();
        if (!message || typeof message !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Message is required and must be a string'
            }, {
                status: 400
            });
        }
        console.log('Processing message:', message);
        console.log('Chat history provided:', chatHistory ? 'Yes' : 'No');
        // Simulasi delay untuk pengalaman yang lebih realistis
        await new Promise((resolve)=>setTimeout(resolve, 500 + Math.random() * 1000));
        // Coba dapatkan response dari dataset
        const datasetResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chat$2d$dataset$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findResponse"])(message);
        let response;
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
                    const messages = [
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
                        recentHistory.forEach((msg)=>{
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
                        max_tokens: 2048
                    });
                    let rawResponse = chatCompletion.choices[0]?.message?.content || "Maaf, saya tidak dapat memberikan respons yang tepat saat ini.";
                    // Bersihkan format markdown yang tidak diinginkan
                    response = rawResponse.replace(/\*\*([^*]+)\*\*/g, '$1') // Hapus bold **text**
                    .replace(/\*([^*]+)\*/g, '$1'); // Hapus italic *text*
                    console.log('Response from Groq API:', response);
                } catch (groqError) {
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            response
        });
    } catch (error) {
        console.error('Error processing message:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to process message'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e09b93c6._.js.map