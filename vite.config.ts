import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// TODO: Change the favicons in the public folder
// https://favicon.io/favicon-converter/
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				// TODO: Change to project name
				name: "react-template",
				// TODO: Change to short project name
				short_name: "react-template",
				start_url: "/",
				display: "standalone",
				background_color: "#000",
				// TODO: Change to applicable language
				lang: "en",
				scope: "/",
				icons: [
					{
						src: "/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any maskable",
					},
					{
						src: "/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
				// TODO: Change to theme color of project
				theme_color: "#0000ff",
			},
		}),
	],
});
