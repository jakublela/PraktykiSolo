const people1 = ["John Doe", "Jane Lopez"];
const people2 = ["John Smith", "Kyle Rogers"];
const numbers = [1, 2, 5, 10, 20];

function lastElement(arr){
    return arr[arr.length-1];

}

function addArrays(arr1, arr2){
    for(var i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

function filtry(arr1, filter){
    var result = [];
    var a = arr1.join(" ");

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] == filter){
            result.push(arr1[i]);
        }
    }

    return result;
}

function arrSum(arr){
    sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

function XDD(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i] + 3;
    }

    return arr;
}

console.log(lastElement(numbers));
console.log(addArrays(people1, people2)); 
console.log(filtry(people2, "Kyle Rogers"));
console.log(arrSum(numbers));
console.log(XDD(numbers));