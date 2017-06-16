import gulp from 'gulp';
import gulpif from 'gulp-if';               // 语句中做if判断
import livereload from 'gulp-livereload';   // 浏览器自动刷新的热更新
import {log, colors} from 'gulp-util';      // 命令行输出
import args from './util/args';             // 命令行参数解析

gulp.task('browser', (cb) => {
    if(!args.watch) return cb();

    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.html', ['pages']);
    gulp.watch('app/**/*.css', ['css']);
});