import gulp from 'gulp';
import del from 'del';                      // 删除包内容
import args from './util/args';             // 命令行参数解析

gulp.task('clean', () => {
    return del(['server/src/public/js', 'server/src/public/css', 'server/src/views']);
}); 