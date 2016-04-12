'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint:test', () => {
  return gulp.src(['./test/**/*test.js'])
    .pipe(eslint({
      rules: {
        'indent': [2, 2]
      },
      envs: [
        'mocha',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

var noTestScripts = ['./lib/**/*.js', 'gulpfile.js'];

gulp.task('lint', () => {
  return gulp.src(noTestScripts)
    .pipe(eslint({
      rules: {
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'indent': [2, 2]
      },
      envs: [
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

var allScripts = ['./lib/**/*.js', './test/**/*test.js', 'gulpfile.js'];

gulp.task('lint:watch', () => {
  gulp.watch(allScripts, ['lint:all']);
});

gulp.task('mocha', () => {
  return gulp.src(['./test/**/*test.js'])
    .pipe(mocha({ 'reporter': 'nyan' }));
});

gulp.task('lint:all', ['lint:test', 'lint']);
gulp.task('do-almost-everything', ['lint:test', 'lint', 'mocha']);
gulp.task('default', ['do-almost-everything']);
