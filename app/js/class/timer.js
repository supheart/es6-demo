class Timer{
    constructor(){

    }
    countDown(end, update, handle) {
        const now = new Date().getTime();
        const self = this;
        if(now - end > 0) {
            handle.call(self);
        }else {
            let lastTime = end - now;
            const pxDay = 24*60*60*1000;
            const pxHour = 60*60*1000;
            const pxMinute = 60*1000;
            const pxSecond = 1000;
            let days = Math.floor(lastTime/pxDay);
            let hours = Math.floor((lastTime-pxDay*days)/pxHour);
            let minutes = Math.floor((lastTime-pxDay*days-pxHour*hours)/pxMinute);
            let seconds = Math.floor((lastTime-pxDay*days-pxHour*hours-pxMinute*minutes)/pxSecond);
            let result = [];
            if(days > 0) {
                result.push(`<em>${days}</em>天`)
            }
            if(result.length || hours > 0) {
                result.push(`<em>${hours}</em>时`)
            }
            if(result.length || minutes > 0) {
                result.push(`<em>${minutes}</em>分`)
            }
            if(result.length || seconds > 0) {
                result.push(`<em>${seconds}</em>秒`)
            }
            self.lastTime = result.join('');
            update.call(self, result.join(''));
            setTimeout(function() {
                self.countDown(end, update, handle);
            }, 1000);
        }
    }
};

export default Timer;