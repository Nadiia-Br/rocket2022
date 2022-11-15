// //1. Дано масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// //     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри

// let arr1 = [1, 2, 3, 4, 5];
//
// let delEl1 = arr1.pop();
// let delEl2 = arr1.pop();
//
// console.log(arr1);
// arr1.push('a','b','c');
// arr1.push(delEl2, delEl1);
// console.log(arr1);





// // 2. Данo масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// //     Підказка. Працюйте по принципу задачі вище.

// let arr2 = [1, 2, 3, 4, 5];
//
// let delEl1 = arr2.pop();
// let delEl2 = arr2.pop();
// let delEl3 = arr2.pop();
// let delEl4 = arr2.pop();
//
//
// console.log(arr2);
// arr2.push('a','b', delEl4,delEl3,delEl2,'c',delEl1,'e');
// console.log(arr2);


// 3. пустий масив заповнити 50парними/непарними числами,

// let arr3 = [];
//
// for (let i = 0; arr3.length < 50; i = i + 2) {
//   console.log(i);
//   arr3.push(i)
// }
//
// console.log(arr3);



// // 4. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr4 = [7, 'smth', 4, true, 123, 0, 'js', 'node', 'lviv', 2222, NaN];
// let newArr = [];
//
// for (const arr4Element of arr4) {
//     if (typeof arr4Element === 'number'){
//         newArr.push(arr4Element);
//     }
// }
// console.log(newArr);





// 5. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let prices = [7000, 100, 15, 84, 168, 120, 345, 188];
// let priceSum = 0;
//
// for (const price of prices) {
//   priceSum = priceSum + price;
// }
//
// console.log(priceSum);
//
// console.log(priceSum / prices.length);





//  6. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr6 = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
//
// for (let i = 0; i < arr6.length; i++) {
//     if(arr6[i + 1] % 2 === 0){
//         console.log(arr6[i]);
//     }
// }