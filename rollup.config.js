import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
	input: 'src/components/index.js',
	output: [
		{
			file: 'build/index.js',
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'build/index.esm.js',
			format: 'esm',
			sourcemap: true,
		},
	],
	external: ['react', 'react-dom'],
	plugins: [
		peerDepsExternal(),
		resolve({ extensions }),
		commonjs(),
		babel({
			extensions,
			exclude: 'node_modules/**',
			babelHelpers: 'runtime',
			plugins: ['@babel/plugin-transform-runtime'],
		}),
		postcss(),
	],
};
