import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.browser,
      format: 'iife',
      name: 'TsModuleStarter',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.ts', '.tsx'],
    }),
    babel({
      extensions: ['.ts', '.tsx'],
      include: ['src/**/*'],
    }),
  ],
}
