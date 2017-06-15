import yargs from 'yargs';

const args = yargs.option('production', {
        boolean: true, 
        defaule: false,
        describe: 'min all scripts'
    }).option('watch', {
        boolean: true, 
        defaule: false,
        describe: 'watch all scripts'
    }).option('verbose', {
        boolean: true, 
        defaule: false,
        describe: 'log'
    }).option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    }).option('port', {
        string: true, 
        defaule: 8080,
        describe: 'server port'
    }).argv;

export default args;