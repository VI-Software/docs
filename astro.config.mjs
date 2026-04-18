// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/vi-software/[...slug]': '/[...slug]',
	},
	integrations: [
		starlight({
			title: 'VI Software Docs',
			logo: {
				src: './src/assets/logo.png',
				alt: 'VI Software',
			},
			social: [
				{ icon: 'gitlab', label: 'Website', href: 'https://visoftware.dev' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vi-software' },
			],
			sidebar: [
				{
					label: 'Infrastructure',
					autogenerate: { directory: 'infra' },
				},
				{
					label: 'VIS Launcher',
					autogenerate: { directory: 'vis-launcher' },
				},
				{
					label: 'VIS Skins',
					autogenerate: { directory: 'vis-skins' },
				},
				{
					label: 'VIS Yggdrasil Auth',
					autogenerate: { directory: 'vis-yggdrasil-auth' },
				},
				{
					label: 'Guidelines',
					autogenerate: { directory: 'guidelines' },
				},				
			],
		}),
	],
});
