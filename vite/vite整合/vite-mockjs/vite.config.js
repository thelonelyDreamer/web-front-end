import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	vue()，
	viteMockServe({
        supportTs: false    //如果使用 js发开，则需要配置 supportTs 为 false
    })
  ]
})
