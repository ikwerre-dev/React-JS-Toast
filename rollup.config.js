
// 5. rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react']
    })
  ]
};
