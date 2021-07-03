import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    sass({ insert: true }),
    typescript(),
  ],
  external: ['react', 'react-dom']
}
