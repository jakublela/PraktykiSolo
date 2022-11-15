function fib(n){
    if(n < 2){
        console.log(n);
        return n;
    } else {
        console.log(fib(n - 1) + fib(n - 2));
        return fib(n - 1) + fib(n - 2);
    }
}

function formHandler(form){
    low = parseInt(form.x.value);
    high = parseInt(form.y.value);
    console.log(printArr(low, high));
}

function printArr(low, high){
    if(low < high){
        console.log(low);
        low++;
        return printArr(low, high);
    } else {
        return low;
    }
}