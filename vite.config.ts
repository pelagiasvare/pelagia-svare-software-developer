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
      pages: [
        { path: "/", prerender: { enabled: true } },
        { path: "/about", prerender: { enabled: true } },
        { path: "/projects", prerender: { enabled: true } },
        { path: "/contact", prerender: { enabled: true } },
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