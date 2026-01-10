import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor-react': ['react', 'react-dom'],
                    'vendor-ui': ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
                    'vendor-anim': ['@lottiefiles/dotlottie-react', '@lottiefiles/react-lottie-player'],
                    'vendor-db': ['@supabase/supabase-js']
                }
            }
        },
        chunkSizeWarningLimit: 500
    }
})
