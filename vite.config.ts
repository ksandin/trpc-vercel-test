import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "src/app"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
  },
  plugins: [react()],
  envDir: __dirname,
})
