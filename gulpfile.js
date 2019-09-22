var gulp = require('gulp');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');
var cleanCss = require('gulp-clean-css');
var gulpMinify = require('gulp-minify');

var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('pug', (callback) => {
  gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'));
	callback();
});
gulp.task('pug-min', (callback) => {
  gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
    .pipe(plumber())
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest('./public/'));
	callback();
});
gulp.task('stylus',(callback)=>{
  gulp.src(['./css/stylus/*.styl', '!./css/stylus/_*.styl'])
		.pipe(plumber())
		.pipe(stylus())
		.pipe(autoprefixer())
		.pipe(gulp.dest('./public/css/'));
	callback();
});
gulp.task('stylus-min',(callback)=>{
  gulp.src(['./css/stylus/*.styl', '!./css/stylus/_*.styl'])
		.pipe(plumber())
		.pipe(stylus())
		.pipe(autoprefixer())
		.pipe(cleanCss({compatibility: 'ie9,-properties.merging'}))
		.pipe(gulp.dest('./public/css/'));
	callback();
});
gulp.task('img-copy', (callback)=>{
  gulp.src('./img/**/*')
		.pipe(gulp.dest('./public/img/'));
	callback();
});
gulp.task('js', (callback)=>{
  gulp.src('./js/**/*')
		.pipe(gulp.dest('./public/js/'));
	callback();
});
gulp.task('js-min', (callback)=>{
  gulp.src('./js/**/*.js')
		.pipe(gulpMinify())
		.pipe(gulp.dest('./public/js/'));
	callback();
});


gulp.task('browserSync', (callback) => {
  browserSync.reload();
});
gulp.task("server", function(callback){
  browserSync({
    server: {
      baseDir: './public/',
      // directory: true //ディレクトリを表示
    },
    open: "external" //IPアドレスで発行
  });
	callback();
});





gulp.task('watch',(callback) => {
  gulp.watch('./pug/*.pug', gulp.task('pug'));
	gulp.watch('./css/stylus/*.styl', gulp.task('stylus'));
  gulp.watch(['./public/**/*'], gulp.task('browserSync'));
  gulp.watch('./img/*', gulp.task('img-copy'));
  gulp.watch('./js/**/*', gulp.task('js'));
	callback();
});
gulp.task('build', gulp.parallel(
  'pug-min',
  'stylus-min',
  'img-copy',
  'js-min'
));
gulp.task('release', gulp.series(
  'build',
  'server'
));
gulp.task('default', gulp.series(
  'pug',
  'stylus',
  'img-copy',
  'js',
  'watch',
  'server'
));
