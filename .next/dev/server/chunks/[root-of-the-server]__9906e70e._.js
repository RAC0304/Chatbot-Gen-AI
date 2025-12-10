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
"[project]/app/api/generate-image/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@huggingface/inference/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$InferenceClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@huggingface/inference/dist/esm/InferenceClient.js [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const { prompt } = await req.json();
        if (!prompt || typeof prompt !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Prompt is required and must be a string'
            }, {
                status: 400
            });
        }
        console.log('Generating image for prompt:', prompt);
        // Cek apakah Hugging Face API key tersedia
        if (!process.env.HUGGINGFACE_API_KEY) {
            console.error('HUGGINGFACE_API_KEY is not configured');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Hugging Face API key not configured. Please add HUGGINGFACE_API_KEY to .env.local'
            }, {
                status: 500
            });
        }
        console.log('Calling Hugging Face API with official SDK...');
        // Inisialisasi Hugging Face Inference client
        const hf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$huggingface$2f$inference$2f$dist$2f$esm$2f$InferenceClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HfInference"](process.env.HUGGINGFACE_API_KEY);
        // Generate image menggunakan Stable Diffusion XL
        const result = await hf.textToImage({
            model: 'stabilityai/stable-diffusion-xl-base-1.0',
            inputs: prompt,
            parameters: {
                negative_prompt: 'blurry, bad quality, low resolution'
            }
        });
        console.log('Converting image to base64...');
        // HfInference mengembalikan Blob, konversi ke base64
        const arrayBuffer = await result.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Image = buffer.toString('base64');
        // Return image sebagai data URL
        const imageUrl = `data:image/png;base64,${base64Image}`;
        console.log('Image generated successfully, base64 length:', base64Image.length);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            imageUrl,
            prompt
        });
    } catch (error) {
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: errorMessage
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9906e70e._.js.map