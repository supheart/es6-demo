import gulp from 'gulp';
import gulpif from 'gulp-if';               // 语句中做if判断
import concat from 'gulp-concat';           // 处理文件拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';   // gulp结合webpack的包
import named from 'vinyl-named';            // 文件重命名和标记
import livereload from 'gulp-livereload';   // 浏览器自动刷新的热更新
import plumber from 'gulp-plumber';         // 处理文件信息流
import rename from 'gulp-rename';           // 处理文件重命名
import uglify from 'gulp-uglify';           // js和css压缩
import {log, colors} from 'gulp-util';      // 命令行输出
import args from './util/args';             // 命令行参数解析

// 命令行安装包
// cnpm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gul p-util yargs --save-dev

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        // 将原文件转化为流文件，便于webpack操作 
        .pipe(plumber({
            errorHandler: () => {}
        }))
        // 重命名文件
        .pipe(named())
        // 使用webpack操作，使用babel解析原文件的es6语法为es5
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel'
                }]
            }
        }), null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }));
        })
        // 将文件保存到express的js执行目录
        .pipe(gulp.dest('server/src/public/js'))
        // 将文件重新拷贝一份作为压缩
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        // 压缩js代码
        .pipe(uglify({
            compress: {properties: false},
            output: {'quote_keys': true}
        }))
        // 保存压缩代码
        .pipe(gulp.dest('server/src/public/js'))
        // 最后执行热更新操作，判断命令中是否有watch条件，有就热更新
        .pipe(gulpif(args.watch, livereload()));
});