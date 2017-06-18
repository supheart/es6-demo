import gulp from 'gulp';
import gulpif from 'gulp-if';               // 语句中做if判断
import gulpsass from 'gulp-sass';
import livereload from 'gulp-livereload';   // 浏览器自动刷新的热更新
import {log, colors} from 'gulp-util';      // 命令行输出
import args from './util/args';             // 命令行参数解析

// 压缩css内容
gulp.task('css', () => {
    // return gulp.src('app/**/*.css')
    //     .pipe(gulp.dest('server/src/public'))
    //     .pipe(gulpif(args.watch, livereload()));

    return gulp.src('app/sass/*.scss')
        .pipe(gulpsass().on('error', gulpsass.logError))
        .pipe(gulp.dest('server/src/public/css'))
        .pipe(gulpif(args.watch, livereload()));
}); 