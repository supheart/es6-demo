import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';       // gulp的任务队列 

gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));