import 'babel-polyfill';
import Timer from './class/timer';

window.onload = () => {
    
    var tt= new Timer();
    tt.countDown(1497785780000, (result) => {
        console.log(result);
    }, () => {
        console.log('timer end;');
    })
}