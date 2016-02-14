'use strict';

import config from '../config';
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';

gulp.task('styles', () => {
  return gulp.src(config.styles.src)
    .pipe(sass())
    .pipe(autoprefixer('last 5 versions', '> 1%', 'ie 8'))
    .pipe(cssnano())
    .pipe(gulp.dest(config.styles.tmp));
});

gulp.task('styles:copy', () => {
  return gulp.src(config.styles.tmp + '/*.css')
    .pipe(gulp.dest(config.styles.dest));
});
