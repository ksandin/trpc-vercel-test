import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve("src/app"),
  plugins: [react()],
  envDir: __dirname,
})
