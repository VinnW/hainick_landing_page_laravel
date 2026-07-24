import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react"; // Assuming you are using React based on previous logs

export default defineConfig({
    envDir: "../",
    plugins: [
        laravel({
            input: ["resources/js/src/index.jsx"],
            refresh: true,
        }),
        react(),
    ],
});
