// {
//     let ajax = function(cb){
//         console.log('start exec');
//         setTimeout(function() {
//             cb && cb.call();
//         }, 2000);
//     };

//     ajax(function(){
//         console.log('time cb');
//     });
// }

// {
//     let ajax = function(){
//         console.log('start promise exec');

//         return new Promise(function(resolve, reject){
//             setTimeout(function() {
//                 resolve();
//             }, 2000);
//         });
//     }

//     ajax().then(() => {
//         console.log('time promise cb');
//     });
// }

// {
//     let ajax = function(){
//         console.log('start promise exec');

//         return new Promise(function(resolve, reject){
//             setTimeout(function() {
//                 resolve();
//             }, 2000);
//         });
//     }

//     ajax().then(() => {
//         console.log('time promise cb');
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve();
//             }, 2000);
//         }).then(() => {
//             console.log('time promise cb2')
//         });
//     });
// }

// {
//     let ajax = (num) => {
//         console.log('promise err demo');
//         return new Promise((resolve, reject) => {
//             if(num > 5) {
//                 resolve();
//             }else {
//                 throw new Error('这是一个promise抛出的错误');
//             }
//         });
//     };

//     ajax(6).then(() => {
//         console.log('log', 6);
//     }).catch((err) => {
//         console.log('catch', err);
//     });

//     ajax(3).then(() => {
//         console.log('log', 3);
//     }).catch((err) => {
//         console.log('catch', err);
//     });
// }

{
    // 所有图片加载完再添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(err);
            };
        });
    }

    function showImgs(imgs) {
        imgs.forEach((img) => {
           document.body.appendChild(img); 
        });
    }

    Promise.all([
        loadImg('http://admin.junengcloud.com/assets/images/pronav-logo.png'),
        loadImg('http://admin.junengcloud.com/assets/images/admin-logo.png'),
        loadImg('http://album.ibalife.com/brand/00-5769ab92184086b1.png')
    ]).then(showImgs);
}

{
    // 添加首张加载图片到页面上
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(err);
            };
        });
    }

    function showImg(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('http://admin.junengcloud.com/assets/images/admin-logo.png'),
        loadImg('http://album.ibalife.com/brand/00-5769ab92184086b1.png'),
        loadImg('http://admin.junengcloud.com/assets/images/pronav-logo.png')
    ]).then(showImg);
}