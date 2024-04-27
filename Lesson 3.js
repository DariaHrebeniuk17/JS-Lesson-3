

/*const a = 5;

if (true) {
const b = 10;
console.log("Block", b);
}

console.log("Global", b);*/

//while//

/*let a = 0;

while (a < 5) {
    a++;
    console.log("a", a);
}*/


/*let a = 3;

while (a) {
    console.log("a", a);
    a--;
}*/

/*let a = 0;

do {
    console.log(a);
    a++;
} while (a < 5);*/

/*let a = 0;

for (; a < 3;) {
    a++;
    console.log(a);
}*/

/*let summ = 0;

while(true) {
    let value = +prompt("Введіть число");
    if(!value) break;
    summ += value;
}
console.log("Summ", summ);*/

/*for (let i = 0; i < 10; i++) {
    if(i%2 === 0) continue;
    console.log(i);
}*/

//Масиви//

/*let arr = ["Apple", "Orange", "Plum"];

arr[2] = "Lemon";

arr[3] = "Cherry";

 console.log(arr);

 arr.push("Pear");
 console.log(arr);

 arr.pop();
 console.log(arr);

 arr.shift();
 console.log(arr);

 arr.unshift("Pear");
 console.log(arr);*/

 /*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
 }*/

 /*for (let item of arr) {
    console.log(item);
 }*/


 /*for (let key in arr) {
    console.log(arr[key]);
 }*/


 /*let matrix = [
 [ 1, 2, 3],
 [ 4, 5, 6],
 [ 7, 8, 9],
 ];

 console.log(matrix[1] [2]);*/

/*let a = 5;
let b = a;


a = 10;

console.log(a);
console.log(b);*/

/*let arr = [1, 2, 3];

let arr2 = arr;

arr.push(4);
console.log(arr2);*/

//let arr = ["a", "b", "c", "f", "d"]//

/*arr.splice(2, 2);

console.log(arr);*/

//console.log(arr.slice(1, 3));//

/*let a = [1, 2, 3];

console.log(arr.concat(a, "test"));*/

/*console.log(arr.indexOf("c", 1));

console.log(arr.lastIndexOf("c"));

console.log(arr.includes("c", 1));*/


/*const fruits = [

    {id: 0, name:'Apple'},
    {id: 1, name:'Tomat'},
    {id: 2, name:'Cherry'},
    {id: 3, name:'Orange'},
];*/


/*console.log(fruits.find(item => item.id === 1));*/

//console.log(fruits.filter(item => item.id > 2));//


/*let results = fruits.map(item => item.name.length);

console.log(results);*/

/*let names = "Olia, Yulia, Petya";

let arr = names.split(", ");



let newString = arr.join(", ")

console.log(newString);*/


/*let arr = [1, 2, 3, 4, 5];

let red = arr.reduce((summ, item) => summ + item);

console.log(red);*/


/*let arr = [33, 50, 76];

let summ = arr.reduce((sum,  item) => sum + item) / arr.length;

console.log(summ);*/