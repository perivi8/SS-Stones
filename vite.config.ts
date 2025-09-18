import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep images in their own directory
          if (assetInfo.name && /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(assetInfo.name)) {
            return 'assets/images/[name][extname]';
          }
          // Default asset file name pattern
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  publicDir: 'public',
}));
