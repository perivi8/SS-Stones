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
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Extract the directory and extension from the asset
          const filePath = assetInfo.name?.split('/');
          let extType = filePath?.[filePath.length - 1]?.split('.').pop()?.toLowerCase() || '';
          
          // Organize assets in subdirectories based on type
          if (/png|jpe?g|svg|gif|webp|avif/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|ttf|otf|eot/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          // Default assets directory
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Enable minification and sourcemaps in production
    minify: 'esbuild',
    sourcemap: mode === 'development',
    // Ensure static assets are copied to the output directory
    assetsInlineLimit: 4096, // 4kb
  },
  // Configure static asset handling
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
  // Public directory for static assets
  publicDir: 'public',
}));
