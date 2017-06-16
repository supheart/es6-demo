import gulp from 'gulp';
import gulpif from 'gulp-if';               // 语句中做if判断
import liveserver from 'gulp-live-server';  // gulp启动服务器
import {log} from 'gulp-util';      // 命令行输出
import args from './util/args';             // 命令行参数解析

// 服务器脚本内容
gulp.task('serve', (cb) => {
    // 如果不需要监听服务器，直接略过
    if(!args.watch) return cb();

    // 如果需要监听，则启动服务器
    var server = liveserver.new(['--harmony', 'server/src/app.js']);
    server.start();

    // 监听js, html静态文件的改变通知服务器
    gulp.watch(['server/src/public/**/*.js', 'server/src/views/**/*.html'], function(file){
        server.notify.apply(server, [file]);
    });

    // 监听服务端文件的改变通知服务器,这是需要重启服务
    gulp.watch(['server/src/router/**/*.js', 'server/src/app.js'], function(){
        server.start.bind(server)();
    });
}); 