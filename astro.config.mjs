// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "Source-Serif-4",
        cssVariable: "--font-regular",
        fallbacks: ["sans-serif"],
        options: {
        variants: [{
            src: ['./src/assets/fonts/source-serif-4-v14-latin-regular.woff2'],
            weight: '400',
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
