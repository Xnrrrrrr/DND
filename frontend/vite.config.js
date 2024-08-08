import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log(process.env.VITE_API_BASE_URL);


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
    server: {
        proxy: {
            '/api/v1': {
                target: 'http://localhost:6000',
                changeOrigin: true
            }
        }
    }
});
