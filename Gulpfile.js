var gulp        = require('gulp'),
    webpack     = require('webpack-stream'),
     serve       = require('browser-sync'),
    sync        = require('run-sequence');


var paths = {
  entry: './client/app/app.js',
  output: './client',
  app: './client/app/**/*.{js,html,styl}'
};



gulp.task('build', function(){
	return gulp.src(paths.entry)
	.pipe(webpack(require('./webpack.config')))
	.pipe(gulp.dest(paths.output));
});

gulp.task('serve', function() {
  serve({
    open: false,
    port: 5500,
    server: {
      baseDir: 'client'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', serve.reload]);
});

gulp.task('dev', function(done) {
  sync('build', 'serve', 'watch', done)
});
