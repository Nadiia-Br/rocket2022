const chat = ['Andrii', 'Chey', 'Diana', 'Iron', 'HP', 'Veronika', 'Zuvie'];

// for (const  name of chat){
//     if  (name.length>=5){
//     continue;}
//     console.log(name);
// }



// let i=0;
// while (i < chat.length){
//     console.log(chat[i]);
//     i++;
// }



// let i = 0;
//
// do{
//     console.log('DO !!!!!')
//     i++
// } while (i <= 10)



// let a = 0;
// let b = 0;
//
// let x = a++;
// console.log(a, 'A');
// console.log(x, 'X');
//
// let y = ++b;
// console.log(b, 'B');
// console.log(y, 'Y');



const cat ={
    color: 'Black',
    name: 'Chips',
    age: 2,
    eat: 'Bread'
}

// for (const  chatKey in cat){
//     console.log(chatKey)
// }

let keys = Object.keys(cat);
let values = Object.values(cat);
let entries = Object.entries(cat);
console.log(keys);
console.log(values);
console.log(entries);
