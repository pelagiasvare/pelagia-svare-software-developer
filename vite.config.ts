import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // @tanstack/react-start wires up the TanStack Router plugin internally,
    // so we must not add tanstackRouter() here as well (it would double-register
    // the router HMR / code-split transformers and cause duplicate declarations).
    tanstackStart({
      server: { entry: "src/server" },
      prerender: { crawlLinks: false },
      pages: [
        { path: "/", prerender: { enabled: true } },
        { path: "/about", prerender: { enabled: true } },
        { path: "/projects", prerender: { enabled: true } },
        { path: "/contact", prerender: { enabled: true } },
        { path: "/resume", prerender: { enabled: true } },
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
