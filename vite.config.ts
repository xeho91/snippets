import { defineConfig } from "vite";

export default {
	test: {
		include: ["packages/**/*.{test}.{js,ts}"],
	},
};
