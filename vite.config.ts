import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgrPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
  // test: {
  //   globals: true,
  //   environment: 'happy-dom',
  //   setupFiles: '.vitest/setup',
  //   include: ['**/test.{ts,tsx}']
  // }
})
