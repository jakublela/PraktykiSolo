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

const num = [1, 2, 3, 4, 5];
const num2 = [65, 21, 19, 98, 43]
const str = ["Maria", "Anna"];
const str2 = ["Adam", "Marek", "Bartek", "Tomek"];

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

//Dodatkowe
const filtrArr2 = (arr) => arr.filter(word => word.length < 6 && word.endsWith("ek"));
console.log(filtrArr2(str2));

const evenNum = (arr) => arr.filter(num => num % 2 == 0);
console.log(evenNum(num));

const smollestElem = (arr) => {
    let [i, ...elements] = arr;
    if(elements.length == 0) {
        return i;
    } else {
        if (i < elements[0]) elements[0] = i;
        return smollestElem(elements);
    }
}
console.log(smollestElem(num2));