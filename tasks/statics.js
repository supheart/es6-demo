import gulp from 'gulp';

// 处理html内容
gulp.task('statics', () => {
    return gulp.src('app/images/*.*')
        .pipe(gulp.dest('server/src/public/images'))
}); 