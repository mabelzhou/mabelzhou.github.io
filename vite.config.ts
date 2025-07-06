import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    fs: {
      // ✅ Safe: restrict file serving to the src directory only
      allow: [path.resolve(__dirname, 'src')],
    },
  },
})
