'use strict';

import gulp from 'gulp';
import usemin from 'gulp-usemin';
import uglify from 'gulp-uglify';
import minifyHtml from 'gulp-minify-html';
import minifyCss from 'gulp-minify-css';
import rev from 'gulp-rev';
import gulpSequence from 'gulp-sequence';
import del from 'del';
import templateCache from 'gulp-angular-templatecache';
import concat from 'gulp-concat';
import ngAnnotate from 'gulp-ng-annotate';

gulp.task('clean:dist', (done) => {
  del(['build'], done);
});

gulp.task('clean:tmp', (done) => {
  del(['.tmp'], done);
});

gulp.task('usemin', () => {
  return gulp.src('app/index.html')
    .pipe(usemin({
      css: [rev(), minifyCss()],
      vendorcss: [rev(), minifyCss()],
      html: [minifyHtml({
        empty: true
      })],
      js: [ngAnnotate(), uglify(), rev()],
      vendorjs: [uglify(), rev()],
      inlinejs: [uglify()],
      inlinecss: [minifyCss(), 'concat']
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('templates', () => {
  return gulp.src('app/modules/**/*.html')
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(templateCache({
      standalone: true,
      transformUrl: function(url) {
        if (url.indexOf('modules') !== 0) {
          return 'modules/' + url;
        } else {
          return url;
        }
      }
    }))
    .pipe(concat('templates.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.tmp'));
});

gulp.task('images', () => {
  gulp.src('app/images/**/*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('text', () => {
  gulp.src('app/**/*.txt')
    .pipe(gulp.dest('build'));
});

gulp.task('build', gulpSequence('clean:tmp', 'clean:dist', 'styles', 'templates', 'usemin', 'images', 'text'));
