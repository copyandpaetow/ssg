import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	resolve: {
		alias: {
			"jsx-factory": path.resolve(__dirname, "./jsx"),
		},
	},
});
