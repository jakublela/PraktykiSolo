/*
łączenie 2 tablic
ostatni element w tablicy
filtr -> filter(array, arg)
suma elementów w tablicy numbers
.map() po tablicy numbers i każdy element n^2 + 3

.reverse()
.map()
.filter()
.reduce()
foreach
.concat()
[...args]

let var1 = (arg1, arg2) => arg1 + arg2
*/

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const str = ["Maria", "Adam"];
const str2 = ["Anna", "Jacek", "Kuba"];

const joinArrays = (arr, arr2) => [...arr, ...arr2];
console.log(joinArrays(str, str2));

const lastElement = (arr) => arr.reverse()[0];
console.log(lastElement(num));
lastElement(num);

const filtrArr = (arr) => arr.filter(arr => arr.length < 5);
console.log(filtrArr(str2));

const sumArr = (arr) => arr.reduce((sum, res) => sum + res);
console.log(sumArr(num));

const mapArr = (arr) => arr.map(x => x * x + 3);
console.log(mapArr(num));

/*function nwm(){
    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => previousValue - currentValue,
        initialValue
    );

    console.log(sumWithInitial);
    // expected output: 10

}
// 0 + 1 + 2 + 3 + 4



// expected output: 10
*/