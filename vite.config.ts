import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // TanStack plugins must run before the JSX/react plugin.
    tanstackRouter(),
    tanstackStart({
      server: { entry: "src/server" },
      prerender: {
        crawlLinks: false,
      },
      pages: [
        { path: "/", prerender: { enabled: true, crawlLinks: false } },
        { path: "/about", prerender: { enabled: true, crawlLinks: false } },
        { path: "/projects", prerender: { enabled: true, crawlLinks: false } },
        { path: "/resume", prerender: { enabled: true, crawlLinks: false } },
        { path: "/cv", prerender: { enabled: true, crawlLinks: false } },
        { path: "/contact", prerender: { enabled: true, crawlLinks: false } },
      ],
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    // Vite resolves tsconfig @/* path aliases natively.
    tsconfigPaths: true,
  },
});