const browserSync = require('browser-sync').create();

browserSync.init({
	server: {
		baseDir: './src',
		routes: {
			'/dist': '../dist',
			'/src': '../src',
		},
	},
	port: 8000,
});
