# Fitur Generate Image

## Setup

### 1. Install Dependencies
Semua dependencies sudah tersedia, tidak perlu install package tambahan.

### 2. Dapatkan Hugging Face API Key
1. Kunjungi [Hugging Face](https://huggingface.co/)
2. Buat akun atau login
3. Pergi ke Settings > Access Tokens
4. Buat token baru dengan role "Read"
5. Copy token tersebut

### 3. Konfigurasi Environment Variables
Buat file `.env.local` di root project dan tambahkan:

```env
GROQ_API_KEY=your_groq_api_key_here
HUGGINGFACE_API_KEY=your_huggingface_api_key_here
```

### 4. Jalankan Development Server
```bash
npm run dev
```

## Cara Menggunakan

### Generate Image
1. Ketik deskripsi gambar yang ingin Anda buat di input chat
   - Contoh: "a beautiful sunset over mountains"
   - Contoh: "a cute cat playing with yarn"
   - Contoh: "futuristic city with flying cars"

2. Klik tombol **Image** (ikon gambar berwarna ungu-pink) di sebelah tombol Send

3. Tunggu beberapa saat (sekitar 10-30 detik) hingga gambar selesai dibuat

4. Gambar akan muncul di chat area

### Tips untuk Prompt yang Baik
- Gunakan deskripsi yang detail dan spesifik
- Gunakan bahasa Inggris untuk hasil terbaik
- Sebutkan style jika diinginkan (realistic, cartoon, anime, etc.)
- Contoh prompt bagus:
  - "a realistic portrait of a young woman with blue eyes"
  - "anime style cat girl with pink hair"
  - "cyberpunk city at night, neon lights, rainy street"
  - "fantasy landscape with medieval castle and dragons"

## Model yang Digunakan

**CompVis/stable-diffusion-v1-4**
- Model generasi gambar dari teks yang powerful
- Dihosting di Hugging Face Inference API
- Mendukung berbagai style dan tema
- Resolusi output: 512x512 pixels

## Troubleshooting

### "Model is currently loading"
- Model pertama kali loading membutuhkan waktu
- Tunggu 30-60 detik dan coba lagi

### "Hugging Face API key not configured"
- Pastikan `.env.local` sudah dibuat
- Pastikan `HUGGINGFACE_API_KEY` sudah diisi dengan benar
- Restart development server setelah menambahkan env

### Gambar tidak muncul
- Cek console browser untuk error details
- Pastikan koneksi internet stabil
- Coba dengan prompt yang lebih sederhana

## API Endpoint

**POST /api/generate-image**

Request body:
```json
{
  "prompt": "your image description here"
}
```

Response:
```json
{
  "imageUrl": "data:image/png;base64,iVBOR...",
  "prompt": "your image description here"
}
```

## Batasan

- Free tier Hugging Face API memiliki rate limit
- Waktu generasi: 10-30 detik per gambar
- Resolusi: 512x512 pixels
- Content policy: Mengikuti guidelines Hugging Face
