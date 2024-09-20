import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['./src/index.ts', './src/jsx-runtime.ts'],
  outdir: 'dist',
  bundle: true,
  splitting: false,
  packages: 'external',
  platform: 'node',
  format: 'esm',
  tsconfig: 'tsconfig.build.json',
});
