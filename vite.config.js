import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const lcpImagePreload = () => ({
  name: "lcp-image-preload",
  transformIndexHtml(html, ctx) {
    if (!ctx?.bundle) return html;
    const bundle = ctx.bundle;
    const find = (re) => {
      const file = Object.values(bundle).find(
        (b) => b.type === "asset" && re.test(b.fileName)
      );
      return file ? "/" + file.fileName : null;
    };
    const full = find(/hero_1-[^.]+\.jpg$/);
    if (!full) return html;
    return {
      html,
      tags: [
        {
          tag: "link",
          attrs: {
            rel: "preload",
            as: "image",
            href: full,
            fetchpriority: "high",
            type: "image/jpeg",
          },
          injectTo: "head-prepend",
        },
      ],
    };
  },
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    lcpImagePreload()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
