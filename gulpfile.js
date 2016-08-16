//Requires
var gulp = require('gulp'),
sass = require('gulp-sass'), //sass processes & compresses
browserSync = require('browser-sync').create(), // browserSync
uglify = require('gulp-uglify'), //min only js
imagemin = require('gulp-imagemin'), //min images
cache = require('gulp-cache'), //caches images
del = require('del'), //deletes maps
sourcemaps = require('gulp-sourcemaps'), //sourcemaps
autoprefixer = require('gulp-autoprefixer'); //adds prefixes

//Log Errors
function errorlog(err){
	console.error(err.message);
	this.emit('end');
}

//Tasks

//SASS
gulp.task('sass', function(){
  return gulp.src('app/sass/style.sass')
  .pipe(sourcemaps.init())
  .pipe(sass({includePaths: require('node-normalize-scss').includePaths,
	outputStyle: 'compressed'}))
  .on('error', errorlog)
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

//BROWSERSYNC
gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'dist/'
    },
  });
});

//IMAGEMIN
gulp.task('imagemin', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true //for GIF
  })))
  .pipe(gulp.dest('dist/images'));
});

//FONTS
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

//DEL, use to reset DIST
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

//Clear image cache
gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
});

//BUILD
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'images', 'fonts'],
    callback
  )
});

//SLIM
var slim = require("gulp-slim");

gulp.task('slim', function(){
  gulp.src("app/slim/*.slim")
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest("dist/"))
		.pipe(browserSync.reload({
	    stream: true
	  }));
});

//Watches
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/sass/**/*.sass', ['sass']); //watches all SASS
  gulp.watch('app/slim/**/*.slim', ['slim']);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  //other watches
});

//DEFAULT
gulp.task('default', ['sass','slim','browserSync', 'watch']);
