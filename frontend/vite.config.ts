import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [solid()],
    server: { port: 3000 }, // changing this breaks tailwind???
});