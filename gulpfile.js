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
    .pipe(gulp.dest('./public/'));
});
gulp.task('stylus',()=>{
  gulp.src(['./css/stylus/*.styl', '!./css/stylus/_*.styl'])
  .pipe(plumber())
  .pipe(stylus())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./public/css/'))
})
gulp.task('img-copy', ()=>{
  gulp.src('./img/**/*')
  .pipe(gulp.dest('./public/img/'))
})
gulp.task('js', ()=>{
  gulp.src('./js/**/*')
  .pipe(gulp.dest('./public/js/'))
})


gulp.task('browserSync', () => {
  browserSync.reload();
});
gulp.task("server", function(){
  browserSync({
    server: {
      baseDir: './public/',
      // directory: true //ディレクトリを表示
    },
    open: "external"　//IPアドレスで発行
  });
});





gulp.task('watch',() => {
  gulp.watch('./pug/*.pug', ['pug']);
  gulp.watch('./css/stylus/*.styl', ['stylus']);
  gulp.watch(['./public/**/*'], ['browserSync']);
  gulp.watch('./img/*',['img-copy']);
  gulp.watch('./js/**/*',['js'])
});
gulp.task('build', [
  'pug-min',
  'stylus-min',
  'img-copy',
  'js-min'
])
gulp.task('default',[
  'pug',
  'stylus',
  'img-copy',
  'js',
  'watch',
  'server'
]);
