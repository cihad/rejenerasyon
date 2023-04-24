import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rejenerasyon.com.tr',
  base: '/rejenerasyon',
  experimental: {
    assets: true
  }
})
