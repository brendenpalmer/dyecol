'use strict';

import config from '../config';
import browserSync from 'browser-sync';
import spa from 'browser-sync-spa';
import gulp from 'gulp';
import sass from 'gulp-sass';
import templateCache from 'gulp-angular-templatecache';
import autoprefixer from 'gulp-autoprefixer';

let _browserSync = browserSync.create();

gulp.task('serve', ['sass', 'templates:serve'], () => {
  _browserSync.use(spa({
    selector: '[ng-app]'
  }));

  _browserSync.init({
    port: config.browserPort,
    ui: {
      port: config.UIPort
    },
    open: true,
    browser: 'google chrome',
    logLevel: 'debug',
    server: {
      baseDir: './app',
      routes: {
        '/bower_components': './bower_components',
        '/node_modules': './node_modules',
        '/styles': './build/css',
        '/.tmp': './.tmp'
      }
    },
    files: [
      config.src + '/**/*.js',
      config.src + '/**/*.html'
    ]
  });

  gulp.watch('app/**/*.html', ['templates:serve']);
  gulp.watch('app/**/*.js').on('change', browserSync.reload);
  gulp.watch('app/styles/**/*.scss', ['sass']);
});

gulp.task('sass', () => {
  return gulp.src(config.styles.src)
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(gulp.dest('build/css'))
    .pipe(_browserSync.stream());
});

gulp.task('templates:serve', () => {
  gulp.src('app/modules/**/*.html')
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
    .pipe(gulp.dest('.tmp'))
    .pipe(_browserSync.stream());
});
