// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.local(),
    name: "Jost",
    cssVariable: "--font-jost-bold",
    fallbacks: ["sans-serif"],
    options: {
      variants: [{
        src: ['./src/assets/fonts/jost-v20-latin-600.woff2'],
        weight: '600',
        style: 'normal'
      }]
    }
  }]
});
