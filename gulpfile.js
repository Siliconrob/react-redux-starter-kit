'use strict'

var gulp = require('gulp')
var gulpUtil = require('gulp-util')
var browserify = require('browserify')
var watchify = require('watchify')
var less = require('gulp-less')
var source = require('vinyl-source-stream')
var standard = require('gulp-standard')
var sequence = require('run-sequence')
var concat = require('gulp-concat')

var paths = {
  APP: './src',
  BUILD: './build'
}

var vendors = [
  'moment',
  'lodash',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  'redux-thunk'
]

var makeBundler = function (file, args) {
  return browserify(paths.APP + '/' + file, args)
    .transform('babelify')
    .external(vendors)
}

gulp.task('build:vendors', () => {
  process.env.NODE_ENV = 'production'

  var bundle = browserify()
  vendors.forEach(lib => { bundle.require(lib) })

  bundle
    .bundle()
    .pipe(source('vendors.js'))
    .pipe(gulp.dest(paths.BUILD))
})

gulp.task('build:app', () => {
  var bundler = makeBundler('index.js')
  return bundler
    .bundle()
    .on('error', function (error) {
      console.log(error.toString())
      this.emit('end')
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.BUILD))
})

gulp.task('watch', () => {
  var args = Object.assign(watchify.args, { debug: true })
  var bundler = watchify(makeBundler('index.js', args))

  bundler.on('update', function () {
    make(bundler)
    gulpUtil.log("Bundle '" + gulpUtil.colors.cyan('ready') + "' after " + gulpUtil.colors.magenta('0.10 s'))
  })

  function make (bundler) {
    return bundler
      .bundle()
      .on('error', function (error) {
        console.log(error.toString())
        this.emit('end')
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(paths.BUILD))
  };

  gulp.watch(paths.APP + '/**/*.less', ['less'])
  return make(bundler)
})

gulp.task('less', () => {
  return gulp.src(paths.APP + '/**/*.less')
    .pipe(less({}))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(paths.BUILD))
})

gulp.task('standard', () => {
  return gulp.src(paths.APP + '/**/*.js')
    .pipe(standard())
    .pipe(standard.reporter('default', {breakOnError: true, quiet: true}))
})

gulp.task('default', [], function (done) {
  sequence('build:vendors', 'standard', 'less', 'build:app', function () {
    done()
  })
})
