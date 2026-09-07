// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeExternalLinks from 'rehype-external-links';

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
    }],
    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [
            [rehypePrismPlus, { showLineNumbers: true }],
            [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
        ]
    }
});
