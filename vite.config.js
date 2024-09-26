import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.jsx"], // Pastikan app.jsx digunakan
            refresh: true,
        }),
        react(),
    ],
    base: "https://lareact.vercel.app/", // Set base URL untuk production
    server: {
        https: true, // Pastikan HTTPS digunakan di lokal juga
    },
});
