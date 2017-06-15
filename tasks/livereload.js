var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('livereload', function() {
	livereload.listen();
	gulp.watch('server/src/**/*.*',function(file){
		livereload.changed(file.path);
	});
});