var gulp = require('gulp');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');

var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('pug', () => {
  gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});
gulp.task('stylus',()=>{
  gulp.src(['./css/stylus/*.styl', '!./css/stylus/_*.styl'])
  .pipe(plumber())
  .pipe(stylus())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./css/'))
})


gulp.task('browserSync', () => {
  browserSync.reload();
});
gulp.task("server", function(){
  browserSync({
    server: {
      baseDir: './',
      // directory: true //ディレクトリを表示
    },
    open: "external"　//IPアドレスで発行
  });
});





gulp.task('watch',() => {
  gulp.watch('./pug/*.pug', ['pug']);
  gulp.watch('./css/stylus/*.styl', ['stylus']);
  gulp.watch(['./*.*','./css/*.*','./js/*.*'], ['browserSync']);
});
gulp.task('default',[
  'watch',
  'server'
]);
