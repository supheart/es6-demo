import gulp from 'gulp';
import gulpif from 'gulp-if';               // 语句中做if判断
import livereload from 'gulp-livereload';   // 浏览器自动刷新的热更新
import args from './util/args';             // 命令行参数解析

// 处理html内容
gulp.task('pages', () => {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('server/src'))
        .pipe(gulpif(args.watch, livereload()));
}); 