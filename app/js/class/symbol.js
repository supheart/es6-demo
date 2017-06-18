{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1);
    console.log(a2);
    console.log(a1 === a2);

    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');

    
    console.log(a3);
    console.log(a4);
    console.log(a3 === a4);
}

{
    let a1 = Symbol.for('abc');
    let a2 = Symbol.for('abc');
    let obj = {
        [a1]: '123',
        [a2]: '234',
        'abc': '345',
        'bcd': '456',
        'abc': '456',
        [Symbol.for('abc')]: '567'
    };
    console.log(obj);

    for(let [key, value] of Object.entries(obj)){
        console.log('let of', key, value);
    };

    Object.getOwnPropertySymbols(obj).forEach((item, v) => {
        console.log('symbol value: ', obj[item], item, v);
    });

    Reflect.ownKeys(obj).forEach((item, i, v) => {
        console.log('symbol value: ', obj[item], item, i, v);
    });
}