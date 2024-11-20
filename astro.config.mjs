import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
    integrations: [react()],
    base: isProd ? "/privacy-policy" : "/",
});
