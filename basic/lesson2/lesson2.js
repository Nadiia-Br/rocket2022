// const age = 18;

// if (age >= 18){
//     console.log('YES')
// } else {
//     console.log('NO')
// }


// (age > 18  || name === 'admin') ? console.log('YES') : console.log ('NO');
//
// const isOld = age > 18 ? 'YES' : 'No';
// console.log(isOld);


// let x = 'HELLO WORLD';
// let y=x;
//
// console.log(y);
// console.log(x);
//
// y='TEST';
// console.log(y);
// console.log(x);


// let obj = {
//     a:2
// }
//
// let obj2 = {
//     a:2
// }
//
// console.log(obj===obj2);   //false


// const arrayExa = [1, 4, false, {}, 'HELLO', 22, []];
// console.log(arrayExa);
//
// console.log(arrayExa[5]);
//
// arrayExa.push(7);
// arrayExa.unshift('start');
// arrayExa.pop();
// let infShift = arrayExa.shift();
// console.log(infShift, 'shift');
//
// console.log(arrayExa);

// const x = 'name';
// console.log(x[1]);


const chat = ['Andrii', 'Chey', 'Diana', 'Iron', 'HP', 'Veronika', 'Zuvie'];

// for (let i = 0; i < chat.length; i = i + 1) {
//     console.log('________________________');
//     console.log(i, 'INDEX');
//
//
//     if (chat[i].length >= 5) {
//         console.log(chat[i]);
//     }
// }

console.time('OPTI');
const chatLen = chat.length;
for (let i = 0; i < chatLen; i = i + 1) {
    console.log('________________________');
    console.log(i, 'INDEX');

    const namik = chat[i];
    if (namik.length >= 5) {
        console.log(namik);
    }
}
console.timeEnd('OPTI');




//zvorotniy cikl
// for (let i = chat.length-1; i >= 0; i = i-1) {
//     console.log('________________________');
//     console.log(i, 'INDEX');
//
//
//     if (chat[i].length >= 5) {
//         console.log(chat[i]);
//     }
// }