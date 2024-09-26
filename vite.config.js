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
    build: {
        outDir: "public/build", // Pastikan output build berada di folder 'public/build'
        assetsDir: "assets", // Aset akan berada di dalam 'public/build/assets'
    },
});
