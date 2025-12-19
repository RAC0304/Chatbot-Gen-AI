// Dataset chatbot untuk berbagai topik
export interface ChatDataset {
    patterns: string[];
    responses: string[];
    category: string;
}

export const chatDataset: ChatDataset[] = [
    // Salam dan greeting
    {
        patterns: ["halo", "hai", "hello", "hi", "selamat pagi", "selamat siang", "selamat sore", "selamat malam", "good morning", "good afternoon", "good evening", "hey", "howdy", "greetings", "assalamualaikum", "apa kabar", "how are you", "what's up"],
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
        patterns: ["siapa kamu", "apa itu neural", "tentang kamu", "perkenalan", "siapa neural", "kamu siapa", "identitas", "profil bot", "about you", "who are you", "neural ai", "tentang neural", "introduce yourself", "tell me about yourself", "kamu adalah siapa", "siapa sebenarnya", "kamu siapa sebenarnya", "kamu adalah siapa sebenarnya", "siapa diri kamu", "apa identitas kamu", "kenalan dong", "siapa sih kamu"],
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
        patterns: ["kemampuan", "fungsi", "fitur", "what can you do", "ability", "skill", "keahlian", "capabilities", "features", "kerjaan", "kerja apa", "ngapain aja", "kerjaannya", "kerjaannya apa", "kerjaan apa", "tugas kamu", "tugas apa", "bisa bantu apa"],
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
        patterns: ["cara kerja", "teknologi bot", "AI technology", "machine learning bot", "how do you work"],
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
        patterns: ["quantum computing", "quantum", "qubit", "superposition", "entanglement", "quantum algorithm", "quantum supremacy"],
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
        patterns: ["terima kasih", "thanks", "thank you", "makasih", "appreciate", "helpful", "great", "awesome", "good", "selesai", "bye", "goodbye", "sampai jumpa"],
        responses: [
            "Sama-sama! Senang bisa membantu. Jangan ragu untuk bertanya lagi kapan saja. Keep learning dan keep growing! 🚀",
            "You're welcome! Semoga informasinya bermanfaat. Remember, setiap expert dulu adalah beginner. Keep pushing forward! 💪",
            "Terima kasih sudah ngobrol! Always remember: continuous learning adalah kunci sukses di tech industry. See you next time! ✨",
            "Glad I could help! Jangan lupa praktek apa yang sudah dipelajari. Theory without practice adalah just wishful thinking. Good luck! 🌟",
            "Sampai jumpa! Keep building, keep learning, keep growing. The tech world needs innovative minds like yours! 🔥"
        ],
        category: "closing"
    },

];

// Enhanced function untuk mencari respons berdasarkan input
export function findResponse(userInput: string): string | null {
    const input = userInput.toLowerCase().trim();

    // Handle empty input
    if (!input) {
        return "Silakan ketik pertanyaan atau topik yang ingin Anda bahas. Saya siap membantu! 😊";
    }

    // Cari kategori yang paling cocok dengan scoring system
    let bestMatch = { score: 0, responses: [] as string[], matchedPattern: '' };

    for (const item of chatDataset) {
        let score = 0;
        let matchedPattern = '';

        for (const pattern of item.patterns) {
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
            for (const word of words) {
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
            bestMatch = { score, responses: item.responses, matchedPattern };
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