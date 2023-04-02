import path from 'path';
import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: 'localhost',
		port: 3000,
	},
	plugins: [svgr(),reactRefresh()],
	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			includePaths: ['@stylesheet/base', '@stylesheet/module'],
	// 		},
	// 	},
	// },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@pages': path.resolve(__dirname, 'src/app/pages'),
			'@stylesheet': path.resolve(__dirname, 'src/stylesheet'),
			'@assets': path.resolve(__dirname, 'src/assets')
		},
	},
});
