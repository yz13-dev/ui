import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ["./src/styles/styles.css"],
    splitting: false,
    sourcemap: true,
    minify: true,
    dts: false,
    skipNodeModulesBundle: true,
    external: ["node_modules"],
    outDir: "dist/styles",
  },
  {
  entry: ['src/ui/*'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  minify: false, // Keep readable for debugging
  outDir: 'dist/ui',
  onSuccess: 'echo "✅ Build completed successfully!"',
}
]); 