import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/ui/*'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: false, // Keep readable for debugging
  outDir: 'dist',
  onSuccess: 'echo "✅ Build completed successfully!"',
}); 