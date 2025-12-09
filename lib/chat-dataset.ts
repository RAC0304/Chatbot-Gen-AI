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
        patterns: ["siapa kamu", "apa itu neural", "tentang kamu", "perkenalan", "siapa neural", "kamu siapa", "identitas", "profil bot", "about you", "who are you", "neural ai", "tentang neural", "introduce yourself", "tell me about yourself"],
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
        patterns: ["kemampuan", "bisa apa", "fungsi", "fitur", "what can you do", "ability", "skill", "keahlian", "apa yang bisa kamu lakukan", "capabilities", "features"],
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
        patterns: ["cara kerja", "bagaimana kamu bekerja", "teknologi bot", "AI technology", "machine learning bot", "how do you work", "cara kerja AI"],
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

    // Versi dan pengembangan
    {
        patterns: ["versi", "update", "pengembang", "developer", "creator", "pembuat", "version", "neural ai version", "siapa yang buat", "who made you"],
        responses: [
            "Saya adalah Neural AI versi terbaru yang dikembangkan dengan fokus pada pengalaman pengguna yang optimal dan respons yang akurat dalam bahasa Indonesia.",
            "Neural AI dikembangkan dengan teknologi modern dan terus diupdate untuk memberikan pengalaman chat yang lebih baik. Terima kasih telah menggunakan layanan kami!",
            "Saya dikembangkan oleh tim yang berdedikasi untuk menciptakan AI assistant yang helpful dan user-friendly. Kami selalu berusaha meningkatkan kualitas layanan.",
            "Versi saat ini dari Neural AI telah dioptimalkan untuk memberikan respons yang lebih natural dan membantu dalam bahasa Indonesia dan Inggris.",
            "Tim pengembang kami bekerja keras untuk memastikan Neural AI dapat memberikan bantuan terbaik bagi setiap pengguna. Feedback Anda sangat berharga untuk pengembangan selanjutnya!",
            "Neural AI adalah project yang dikembangkan dengan love dan passion untuk teknologi. Kami committed untuk terus improve dan memberikan value terbaik."
        ],
        category: "development"
    },

    // AI dan Machine Learning
    {
        patterns: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "neural network", "algoritma", "supervised learning", "unsupervised learning", "reinforcement learning", "computer vision", "natural language processing", "nlp", "chatbot", "automation", "robotics", "tensorflow", "pytorch", "scikit-learn"],
        responses: [
            "AI atau Artificial Intelligence adalah teknologi yang memungkinkan mesin untuk meniru kecerdasan manusia. Machine Learning adalah subset dari AI yang memungkinkan komputer belajar dari data tanpa diprogram secara eksplisit.",
            "Machine Learning dibagi menjadi 3 kategori utama: Supervised Learning (dengan label), Unsupervised Learning (tanpa label), dan Reinforcement Learning (belajar dari reward/punishment).",
            "Neural Network adalah model komputasi yang terinspirasi oleh cara kerja otak manusia. Deep Learning menggunakan neural network dengan banyak layer untuk memecahkan masalah kompleks.",
            "AI berkembang pesat dalam berbagai bidang seperti computer vision, natural language processing, robotics, dan autonomous systems. Teknologi ini mengubah cara kita bekerja dan hidup.",
            "Computer Vision memungkinkan komputer memahami gambar dan video, sedangkan NLP membantu komputer memahami bahasa manusia. Kedua bidang ini sangat penting dalam AI modern.",
            "Framework populer untuk ML: TensorFlow (Google), PyTorch (Meta), Scikit-learn (Python), dan Keras. Setiap framework memiliki kelebihan untuk use case yang berbeda.",
            "Untuk memulai ML: pelajari Python, statistik dasar, linear algebra, lalu praktek dengan dataset sederhana. Kaggle adalah platform bagus untuk belajar dan kompetisi.",
            "AI Ethics sangat penting: bias dalam data, privacy, transparency, dan dampak sosial harus dipertimbangkan dalam pengembangan AI."
        ],
        category: "ai"
    },

    // Programming
    {
        patterns: ["programming", "coding", "bahasa pemrograman", "python", "javascript", "react", "nodejs", "java", "c++", "golang", "rust", "php", "ruby", "swift", "kotlin", "typescript", "framework", "library", "api", "database", "sql", "mongodb", "git", "github", "version control"],
        responses: [
            "Programming adalah seni dan ilmu menulis instruksi untuk komputer. Bahasa populer seperti Python, JavaScript, Java, C++, dan Go masing-masing memiliki kelebihan untuk use case tertentu.",
            "Python sangat populer untuk data science, AI, web development (Django/Flask), dan automation. Syntaxnya mudah dipahami, cocok untuk pemula.",
            "JavaScript dominan untuk web development, baik frontend (React, Vue, Angular) maupun backend (Node.js). TypeScript menambahkan static typing untuk JavaScript.",
            "React adalah library JavaScript untuk membangun UI. Dengan konsep component-based dan virtual DOM, React membuat development web menjadi lebih efisien dan maintainable.",
            "Database penting untuk menyimpan data. SQL databases (MySQL, PostgreSQL) untuk data terstruktur, NoSQL (MongoDB, Redis) untuk data fleksibel.",
            "Git adalah version control system wajib untuk programmer. GitHub, GitLab untuk kolaborasi dan portfolio. Pelajari basic commands: add, commit, push, pull, merge.",
            "API (Application Programming Interface) memungkinkan komunikasi antar aplikasi. RESTful API dan GraphQL adalah paradigma populer untuk web services.",
            "Tips belajar programming: mulai dengan satu bahasa, buat project nyata, baca dokumentasi, praktek coding challenges, dan bergabung dengan komunitas developer.",
            "Mobile development: Swift/Objective-C untuk iOS, Kotlin/Java untuk Android, atau cross-platform dengan React Native/Flutter untuk kedua platform.",
            "Modern web development stack: Frontend (HTML/CSS/JS + framework), Backend (Node.js/Python/Java), Database, Cloud deployment (AWS/Vercel/Netlify)."
        ],
        category: "programming"
    },

    // Teknologi Web
    {
        patterns: ["web development", "html", "css", "frontend", "backend", "full stack"],
        responses: [
            "Web development dibagi menjadi frontend (yang dilihat user) dan backend (server logic). HTML untuk struktur, CSS untuk styling, dan JavaScript untuk interaktivitas.",
            "Frontend development fokus pada user experience dan interface. Tools modern seperti React, Vue, dan Angular membuat development lebih efisien.",
            "Backend development menangani database, server logic, dan API. Teknologi populer termasuk Node.js, Python Django, Ruby on Rails, dan PHP.",
            "Full-stack developer menguasai baik frontend maupun backend, memungkinkan mereka membangun aplikasi web secara komprehensif."
        ],
        category: "web"
    },

    // Karir dan Pendidikan
    {
        patterns: ["karir", "career", "belajar", "tips", "skill", "kemampuan", "pendidikan"],
        responses: [
            "Untuk membangun karir di tech, fokuslah pada continuous learning. Mulai dengan menguasai fundamental, lalu spesialisasi di area yang diminati.",
            "Skill penting untuk developer: problem solving, komunikasi, adaptabilitas, dan kemampuan belajar cepat. Technical skill bisa dipelajari, tapi soft skill sama pentingnya.",
            "Tips belajar programming: praktek konsisten, bangun project nyata, bergabung dengan komunitas, dan jangan takut bertanya atau membuat kesalahan.",
            "Pendidikan formal penting, tapi self-learning dan portfolio project sering lebih berpengaruh dalam karir tech. Fokus pada hasil dan dampak yang bisa Anda buat."
        ],
        category: "career"
    },

    // Cyber Security
    {
        patterns: ["security", "cyber security", "cybersecurity", "hacking", "ethical hacking", "penetration testing", "vulnerability", "encryption", "password", "firewall", "malware", "virus", "phishing", "ssl", "https", "authentication", "authorization"],
        responses: [
            "Cyber Security adalah praktik melindungi sistem, jaringan, dan data dari serangan digital. Meliputi network security, application security, dan data protection.",
            "Ethical hacking atau penetration testing adalah praktik menguji keamanan sistem dengan cara yang sama seperti yang digunakan hacker jahat, tapi untuk tujuan defensive.",
            "Tips keamanan dasar: gunakan password kuat dan unik, aktifkan 2FA, update software secara rutin, hati-hati dengan phishing, backup data penting.",
            "Encryption mengubah data menjadi format yang tidak bisa dibaca tanpa kunci. HTTPS, SSL/TLS melindungi komunikasi web. End-to-end encryption melindungi privasi pesan.",
            "Common vulnerabilities: SQL injection, XSS, CSRF, buffer overflow, weak authentication. OWASP Top 10 adalah referensi kerentanan web yang paling umum.",
            "Career path security: Security Analyst, Penetration Tester, Security Engineer, CISO. Sertifikasi populer: CEH, CISSP, CompTIA Security+, OSCP."
        ],
        category: "security"
    },

    // Blockchain dan Cryptocurrency
    {
        patterns: ["blockchain", "cryptocurrency", "bitcoin", "ethereum", "smart contract", "defi", "nft", "web3", "decentralized", "mining", "wallet", "dapps", "solidity"],
        responses: [
            "Blockchain adalah teknologi distributed ledger yang mencatat transaksi di multiple computers. Sekali data dimasukkan, sangat sulit diubah, memberikan transparency dan security.",
            "Bitcoin adalah cryptocurrency pertama menggunakan blockchain. Ethereum memperkenalkan smart contracts, memungkinkan aplikasi decentralized (DApps).",
            "Smart contracts adalah program yang otomatis execute ketika kondisi tertentu terpenuhi. Ditulis dalam bahasa seperti Solidity untuk Ethereum blockchain.",
            "DeFi (Decentralized Finance) menggunakan blockchain untuk recreate traditional financial systems tanpa intermediary. Contoh: lending, borrowing, trading.",
            "NFT (Non-Fungible Token) adalah unique digital assets di blockchain. Bisa represent art, music, virtual items, atau proof of ownership.",
            "Web3 adalah visi internet decentralized dimana users memiliki kontrol atas data mereka. Blockchain, cryptocurrency, dan DApps adalah komponen utama."
        ],
        category: "blockchain"
    },

    // Game Development
    {
        patterns: ["game development", "game dev", "unity", "unreal engine", "godot", "game design", "indie game", "mobile game", "2d game", "3d game", "animation", "graphics", "gameplay"],
        responses: [
            "Game development menggabungkan programming, art, design, dan storytelling. Engine populer: Unity (cross-platform), Unreal Engine (AAA games), Godot (open source).",
            "Unity menggunakan C# untuk scripting, support 2D/3D games untuk berbagai platform. Unreal Engine menggunakan C++ atau Blueprint visual scripting.",
            "Game development process: Concept → Design Document → Prototyping → Art Production → Programming → Testing → Launch → Post-launch support.",
            "Indie game development bisa dimulai solo atau tim kecil. Focus pada unique gameplay mechanics, good art style, dan engaging player experience.",
            "Mobile game development considerations: touch controls, battery life, various screen sizes, platform guidelines (iOS App Store, Google Play).",
            "Game programming topics: physics simulation, AI behavior, networking for multiplayer, optimization for performance, user interface design."
        ],
        category: "gamedev"
    },

    // DevOps dan Cloud Computing
    {
        patterns: ["devops", "cloud computing", "aws", "azure", "google cloud", "docker", "kubernetes", "ci/cd", "deployment", "infrastructure", "monitoring", "automation", "serverless", "microservices"],
        responses: [
            "DevOps adalah culture dan practices yang menggabungkan software development dan IT operations untuk mempercepat delivery dan improve reliability.",
            "Cloud computing providers: AWS (market leader), Microsoft Azure, Google Cloud Platform. Services: compute (EC2), storage (S3), databases, networking.",
            "Docker containers package applications dengan dependencies. Kubernetes orchestrates containers at scale. Keduanya essential untuk modern deployment.",
            "CI/CD (Continuous Integration/Continuous Deployment) automates code integration, testing, dan deployment. Tools: Jenkins, GitLab CI, GitHub Actions.",
            "Microservices architecture breaks applications into small, independent services. Benefits: scalability, technology diversity, fault isolation.",
            "Serverless computing (Lambda, Azure Functions) allows running code without managing servers. Pay per execution, automatic scaling.",
            "Infrastructure as Code (IaC) manages infrastructure through code. Tools: Terraform, CloudFormation, Ansible for consistent and repeatable deployments."
        ],
        category: "devops"
    },

    // UI/UX Design
    {
        patterns: ["ui", "ux", "design", "user interface", "user experience", "figma", "prototype", "wireframe", "usability", "accessibility", "design thinking", "typography", "color theory", "responsive design"],
        responses: [
            "UI (User Interface) adalah tampilan visual aplikasi, UX (User Experience) adalah keseluruhan pengalaman user saat menggunakan produk.",
            "Design thinking process: Empathize → Define → Ideate → Prototype → Test. Metode human-centered untuk solving complex problems.",
            "Tools populer: Figma (collaborative design), Adobe XD, Sketch (Mac only), InVision untuk prototyping dan user testing.",
            "Prinsip good UI design: Consistency, Hierarchy, Clarity, Feedback, Accessibility. Design should be intuitive dan easy to use.",
            "Responsive design ensures interface works well across different devices dan screen sizes. Mobile-first approach increasingly important.",
            "Accessibility (a11y) makes products usable by people with disabilities. Consider color contrast, keyboard navigation, screen reader compatibility.",
            "Typography dan color theory penting untuk readability dan brand identity. Choose fonts dan colors yang support user goals dan brand message."
        ],
        category: "design"
    },

    // IoT dan Embedded Systems
    {
        patterns: ["iot", "internet of things", "embedded", "arduino", "raspberry pi", "sensor", "smart home", "wearable", "automation", "edge computing"],
        responses: [
            "IoT (Internet of Things) menghubungkan physical objects ke internet untuk collect dan exchange data. Applications: smart homes, wearables, industrial automation.",
            "Arduino dan Raspberry Pi adalah platforms populer untuk IoT prototyping. Arduino untuk microcontroller projects, Raspberry Pi untuk mini computer applications.",
            "IoT architecture: Devices/Sensors → Connectivity (WiFi/Bluetooth/5G) → Data Processing → User Interface. Security adalah challenge besar di IoT.",
            "Edge computing processes data near the source (devices) rather than cloud. Reduces latency, bandwidth usage, dan improves privacy untuk IoT applications.",
            "Smart home applications: automated lighting, temperature control, security systems, energy management. Protocols: WiFi, Zigbee, Z-Wave.",
            "Industrial IoT (IIoT) untuk manufacturing: predictive maintenance, quality control, supply chain optimization, real-time monitoring."
        ],
        category: "iot"
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

    // Startup dan Entrepreneurship
    {
        patterns: ["startup", "entrepreneurship", "business", "funding", "venture capital", "mvp", "product market fit", "pivot", "scale", "unicorn", "ipo"],
        responses: [
            "Startup adalah perusahaan yang designed untuk grow rapidly dan solve scalable problems. Key phases: Idea → MVP → Product-Market Fit → Scale.",
            "MVP (Minimum Viable Product) adalah version sederhana dari product untuk test core hypothesis dengan minimum resources.",
            "Product-Market Fit adalah when your product satisfies market demand. Signals: strong user retention, organic growth, positive user feedback.",
            "Funding stages: Pre-seed → Seed → Series A/B/C → IPO. Each stage has different investor expectations dan valuation methods.",
            "Venture Capital provides funding untuk high-growth startups dalam exchange untuk equity. Angels, VCs, dan corporate investors have different criteria.",
            "Common startup mistakes: building without market research, scaling too early, ignoring customer feedback, running out of cash.",
            "Tech startup advantages: low initial costs, global reach, scalability. Focus on solving real problems dengan technology solutions."
        ],
        category: "startup"
    },

    // Teknologi Umum (Updated)
    {
        patterns: ["teknologi", "tech", "inovasi", "digital", "trend", "future technology", "emerging tech", "disruptive technology"],
        responses: [
            "Teknologi berkembang sangat cepat. Trend terbaru: AI/ML, quantum computing, IoT, blockchain, AR/VR, 5G, edge computing, biotechnology.",
            "Transformasi digital bukan hanya tentang teknologi, tapi juga perubahan mindset, business processes, dan organizational culture.",
            "Emerging technologies: brain-computer interfaces, autonomous vehicles, renewable energy tech, space technology, nanotechnology.",
            "Tech adoption curve: Innovators → Early Adopters → Early Majority → Late Majority → Laggards. Understanding ini penting untuk product strategy.",
            "Digital transformation drivers: customer expectations, competitive pressure, cost efficiency, new business models, regulatory requirements.",
            "Future tech predictions: ubiquitous AI, quantum internet, sustainable tech solutions, human augmentation, space colonization technologies."
        ],
        category: "technology"
    },

    // Data Science (Enhanced)
    {
        patterns: ["data science", "data analysis", "big data", "analytics", "visualization", "statistics", "pandas", "numpy", "matplotlib", "tableau", "power bi", "sql", "r programming", "data mining", "etl", "data warehouse"],
        responses: [
            "Data Science menggabungkan statistik, programming, dan domain knowledge untuk mengekstrak insights dari data. Process: Collection → Cleaning → Analysis → Visualization → Interpretation.",
            "Python ecosystem untuk data science: Pandas (data manipulation), NumPy (numerical computing), Matplotlib/Seaborn (visualization), Scikit-learn (machine learning).",
            "Big Data 5 V's: Volume, Velocity, Variety, Veracity, Value. Tools: Hadoop (distributed storage), Spark (processing), Kafka (streaming), Elasticsearch (search/analytics).",
            "Data visualization principles: choose right chart type, clear labels, appropriate colors, tell a story. Tools: Tableau, Power BI, Python libraries, D3.js.",
            "Analytics types: Descriptive (what happened), Diagnostic (why), Predictive (what will happen), Prescriptive (what should we do).",
            "SQL adalah must-have skill untuk data science. Advanced topics: window functions, CTEs, query optimization, working dengan large datasets.",
            "Data pipeline (ETL): Extract data dari sources → Transform untuk analysis → Load ke warehouse. Modern approach: ELT dengan cloud data warehouses.",
            "Statistics fundamentals: descriptive statistics, probability distributions, hypothesis testing, correlation vs causation, sampling methods."
        ],
        category: "data"
    },

    // Motivasi dan Inspirasi (Enhanced)
    {
        patterns: ["motivasi", "inspirasi", "semangat", "tips sukses", "mindset", "growth mindset", "overcome failure", "persistence", "discipline", "self improvement"],
        responses: [
            "Sukses bukan tentang seberapa cepat Anda sampai, tapi seberapa konsisten Anda melangkah. Setiap expert dulu adalah beginner yang tidak pernah menyerah.",
            "Growth mindset adalah kunci: percaya bahwa kemampuan bisa dikembangkan melalui effort dan learning. Kegagalan adalah feedback, bukan verdict.",
            "Focus on progress, not perfection. 1% improvement setiap hari compounds menjadi 37x improvement dalam setahun. Small actions, big results.",
            "Investasi terbaik adalah investasi pada diri sendiri: skills, knowledge, network, health. ROI dari self-development tidak ada batasnya.",
            "Discipline beats motivation. Motivation gets you started, discipline keeps you going. Build systems dan habits, bukan hanya rely pada feelings.",
            "Embrace discomfort: growth happens outside comfort zone. Challenge yourself dengan projects yang sedikit di atas current skill level.",
            "Learn from failures: analyze what went wrong, extract lessons, apply improvements. Failure adalah tuition fee untuk success university.",
            "Compound effect dalam learning: consistent small efforts over time create remarkable results. Focus pada long-term vision, enjoy the process."
        ],
        category: "motivation"
    },

    // Productivity dan Learning
    {
        patterns: ["productivity", "time management", "learning", "study tips", "focus", "habits", "pomodoro", "efficiency", "procrastination", "deep work", "learning techniques"],
        responses: [
            "Productivity tips: time blocking, prioritize important tasks (Eisenhower matrix), eliminate distractions, batch similar tasks, take regular breaks.",
            "Pomodoro Technique: 25 minutes focused work + 5 minutes break. After 4 pomodoros, take longer break. Helps maintain concentration dan avoid burnout.",
            "Deep work adalah ability to focus pada cognitively demanding tasks. Create distraction-free environment, set clear goals, practice regularly.",
            "Learning techniques: spaced repetition, active recall, Feynman technique (explain simply), practice testing, interleaving different topics.",
            "Build good habits: start small, be consistent, track progress, celebrate wins. Habit stacking: attach new habit to existing routine.",
            "Overcome procrastination: break large tasks into smaller steps, use 2-minute rule, eliminate perfectionism, focus on starting not finishing.",
            "Time management: audit current time usage, identify time wasters, batch similar activities, learn to say no, delegate when possible.",
            "Continuous learning mindset: stay curious, read regularly, take online courses, attend conferences, join communities, teach others."
        ],
        category: "productivity"
    },

    // Bantuan dan Info (Enhanced)
    {
        patterns: ["bantuan", "help", "apa yang bisa", "fitur", "kemampuan", "what can you do", "topics", "expertise"],
        responses: [
            "Saya bisa membantu dengan: AI/ML, Programming (Python, JS, dll), Web Development, Data Science, Cybersecurity, Blockchain, Game Dev, UI/UX Design, DevOps, IoT, Startup advice, Career tips, Productivity, dan Motivasi.",
            "Area expertise saya: teknologi trends, learning paths, career guidance, technical concepts explanation, project ideas, best practices, dan industry insights.",
            "Saya siap membantu dengan: code troubleshooting concepts, technology comparisons, learning resources recommendations, interview preparation, project planning.",
            "Topics yang bisa dibahas: emerging technologies, programming languages, frameworks, tools, methodologies, career transitions, skill development strategies.",
            "Saya dapat memberikan: technical explanations, study guides, project suggestions, career advice, productivity tips, motivation boosts, dan industry perspectives."
        ],
        category: "help"
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

    // Default responses
    {
        patterns: [""],
        responses: [
            "Maaf, saya tidak yakin bagaimana menjawab itu. Saya bisa membantu dengan topik: AI/ML, Programming, Web Dev, Data Science, Cybersecurity, Blockchain, Game Dev, UI/UX, DevOps, IoT, Startup, Career tips, atau Productivity. Apa yang ingin Anda tanyakan?",
            "Hmm, sepertinya pertanyaan Anda di luar area expertise saya. Coba tanyakan tentang teknologi, programming, data science, karir tech, atau tips productivity?",
            "Saya lebih ahli dalam topik teknologi dan programming. Mungkin bisa bertanya tentang: Python, JavaScript, AI, Web Development, Cloud Computing, atau Career guidance?",
            "Pertanyaan yang menarik! Bisa diperjelas atau diganti dengan topik yang saya kuasai? Seperti: coding, data science, startup advice, learning tips, atau tech trends?",
            "Saya siap membantu dengan berbagai topik tech! Coba tanyakan tentang: programming languages, frameworks, career transitions, productivity hacks, atau emerging technologies."
        ],
        category: "default"
    }
];

// Enhanced function untuk mencari respons berdasarkan input
export function findResponse(userInput: string): string {
    const input = userInput.toLowerCase().trim();

    // Handle empty input
    if (!input) {
        return "Silakan ketik pertanyaan atau topik yang ingin Anda bahas. Saya siap membantu! 😊";
    }

    // Cari kategori yang paling cocok dengan scoring system
    let bestMatch = { score: 0, responses: [] as string[] };

    for (const item of chatDataset) {
        let score = 0;

        for (const pattern of item.patterns) {
            if (pattern && input.includes(pattern.toLowerCase())) {
                // Give higher score for longer/more specific patterns
                score += pattern.length;
            }
        }

        if (score > bestMatch.score) {
            bestMatch = { score, responses: item.responses };
        }
    }

    // If we found a good match, return random response
    if (bestMatch.score > 0) {
        const randomIndex = Math.floor(Math.random() * bestMatch.responses.length);
        return bestMatch.responses[randomIndex];
    }

    // Fallback to default responses
    const defaultItem = chatDataset.find(item => item.category === "default");
    if (defaultItem) {
        const randomIndex = Math.floor(Math.random() * defaultItem.responses.length);
        return defaultItem.responses[randomIndex];
    }

    return "Maaf, saya tidak memahami pertanyaan Anda. Bisakah Anda mencoba dengan kata-kata yang berbeda atau bertanya tentang topik teknologi yang saya kuasai?";
}