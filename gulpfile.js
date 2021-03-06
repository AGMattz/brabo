//Requires
var gulp = require('gulp'),
sass = require('gulp-sass'), //sass processes & compresses
browserSync = require('browser-sync').create(), // browserSync
uglify = require('gulp-uglify'), //min only js
imagemin = require('gulp-imagemin'), //min images
cache = require('gulp-cache'), //caches images
del = require('del'), //deletes maps
sourcemaps = require('gulp-sourcemaps'), //sourcemaps
autoprefixer = require('gulp-autoprefixer'), //adds prefixes
pug = require('gulp-pug'), //Pug!
jade = require('gulp-jade');

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
  return gulp.src('app/images/**/*.+(png|jpg|JPG|gif|svg)')
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

//Jade
gulp.task('jade', function() {
  return gulp.src('app/pug/*.jade')
  .pipe(jade({
    // Your options in here.
		pretty: true
  }))
	.pipe(gulp.dest("./dist/"))
	.pipe(browserSync.reload({
		stream: true
	}));
});
//JADEPHP
// gulp.task('jadephp', function() {
//   return gulp.src('app/pug/php/*.jade')
//   .pipe(jadephp({
//     // Your options in here.
// 		basedir: __dirname + 'app/pug',
// 		pretty: true
//   }))
// 	.pipe(gulp.dest("./dist/"))
// 	.pipe(browserSync.reload({
// 		stream: true
// 	}));
// });


//Puggies
gulp.task('pug', function buildHTML() {
  return gulp.src('app/pug/*.pug')
  .pipe(pug({
    // Your options in here.
		pretty: true
  }))
	.pipe(gulp.dest("./dist/"))
	.pipe(browserSync.reload({
		stream: true
	}));
});

//Watches
gulp.task('watch', ['browserSync', 'sass', 'jade'], function(){
  gulp.watch('app/sass/**/*.sass', ['sass']); //watches all SASS
  gulp.watch('app/pug/**/*.jade', ['jade']); //watches all puggs *-*
  gulp.watch('app/js/**/*.js', browserSync.reload);
  //other watches
});

//DEFAULT
gulp.task('default', ['sass','jade','browserSync', 'watch']); //runs tasks and then watches them
