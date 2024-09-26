import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.jsx'], // Pastikan app.jsx digunakan
//             refresh: true,
//         }),
//         react(),
//     ],
//     build: {
//         outDir: 'public/build',
//     },
// });

export default defineConfig({
    plugins: [
        laravel(['resources/js/app.jsx']),
        react(),
    ],
});