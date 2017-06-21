class Calculate {
    // 计算注数， active 当前选中号码， playName 当前玩法标识
    computeCount(active, playName) {
        let count = 0;
        const exist = this.playList.has(playName);
        const arr = new Array(active).fill('0');
        if(exist && playName.at(0) === 'r') {
            count = Cuaculate.combine(arr, playName.split('')[1]);
        }
        return count;
    }


    // 奖金范围预测， active 当前选中号码， playName 当前玩法标识
    computeBonus(active, playName) {
        const plays = playName.split('');
        const self = this;
        let arr = new Array(play[1]*1).fill(0);
        let min, max;
        if(play[0]==='r'){
            let minActive = 5 - ( 11 - active);
            if(minActive > 0) {
                if(minActive - play[1] >= 0) {
                    arr = new Array(minActive).fill(0);
                    min = Calculate(arr, play[1].length);
                } else {
                    if(play[1] - 5 > 0 && active - play[1] >= 0){
                        arr = new Array(active - 5).fill(0);
                        min = Calculate.combine(arr, play[1] - 5).length;
                    } else {
                        min = active - play[1] > -1 ? 1 : 0;
                    }
                }
            } else {
                min = active - play[1] > -1 ? 1 : 0;
            }

            let maxActive = Math.min(active, 5);
            if(play[1] - 5 > 0) {
                if(active - paly[1] >= 0) {
                    arr = new Array(active - 5).fill(0);
                    max = Calculate.combine(arr, play[1] - 5).length;
                } else {
                    max = 0;
                }
            } else if (play[1] - 5 < 0) {
                arr = new Array(Math.min(active, 5)).fill(0);
                max = Calculate.combine(arr, play[1]).length;
            } else {
                max = 1;
            }
        }
        return [min, max].map(item => item * self.playList.get(playName).bonus);
    }

    // 组合运算， arr 参与组合运算的数组， size 组合运算的基数
    static combine(arr, size) {
        let allResult = [];
        (function f(arr, size, result) {
            let arrLen
            if(size > arr.length) {
                return;
            } else if (size === arr.length) {
                allResult.push([].concat(result, arr));
            } else {
                for(let i = 0; i< arr.length; i++) {
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if(size === 1) {
                        allResult.push(newResult);
                    } else {
                        let newArr = [].concat(arr);
                        newArr.splice(0, i+1);
                        f(newArr, siz - 1, newResult);
                    }
                }
            }
        })(arr, size, []);
    }
}

export default Calculate;