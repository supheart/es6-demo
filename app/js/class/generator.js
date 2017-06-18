{
    let tell = function* (){
        yield 'a';
        yield 'a1';
        yield 'a2';
        yield 'a3';
        return 'c';
    };

    let k = tell();
    console.log(tell());
    console.log(tell().next());
    console.log(tell().next())
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    let obj = {};
    obj[Symbol.iterator] = function* (){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    };

    for(var value of obj) {
        console.log('value', value);
    }
}

{
    let state = function* (){
        while(true) {
            yield 1;
            yield 2;
            yield 3;
        }
    };

    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

{
    // let state = async function (){
    //     while(true) {
    //         await 'A';
    //         await 'B';
    //         await 'C';
    //     }
    // };

    // let status = state();
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
}

{
    console.log('  ');
    console.log('  ');
    console.log('  ');
    let draw = function(count){
        console.log(`剩余${count}`);
    }

    let residue = function* (count){
        while (count > 0){
            count --;
            yield draw(count);
        }
    };

    let start = residue(10);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    console.log(document);
    // document.body.appendChild(btn);
    document.body.appendChild(btn);
    document.querySelector('#start').addEventListener('click', () => {
        start.next();
    }, false);
}

{
    let ajax = function* (){
        yield new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve({code: 0});
            }, 800);
        });
    };
    
    let pull = function() {
        let generator = ajax();
        let step = generator.next();
        step.value.then((d) => {
            if(d.code != 0) {
                setTimeout(function() {
                    console.info('wait');
                    pull();
                }, 1000);
            }else {
                console.info(d);
            }
        });
    }

    pull();
}

// {
//     console.log('');
//     let test = function*(){
//         yield 'ccc';
//     };
//     let tt = test();
//     console.log(tt.next());
//     tt = test();
//     console.log(tt.next());
//     console.log(tt.next());
// }