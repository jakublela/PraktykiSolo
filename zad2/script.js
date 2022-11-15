function pow(x, y){
    result = 1;

    for(var i = 0; i < y; i++){
        result *= x;
    }

    return result;
}

function log(x, n){
    return (n > 1) ? 1 + log(n / 2) : 0;
}

function specialNeeds(x, y){
    x = x % pow(10, log(x, 10));
    y = y % pow(10, log(y, 10));

    return (x + y) * (x + y);

    /*
        zamysłem tego kodu jest możliwość "poprawnego" obliczenia 77 + 33
        usunięcie pierwszego znaku z liczby - po to jest "log(x, 10) bo działa jak log10"
        x + y spowoduje że 7 + 3 = 10, mnożenie ich przez siebie da wynik 100
        to był taki mój pomysł który najpierw w Javie napisałem
    */
}

function calculate(x, y, select){
    switch(select){
        case "sum":
            return x + y;

        case "sub":
            return x - y;
            
        case "mul":
            return x * y;
        
        case "div":
            if(y == 0){
                return "Can't divide by 0";
            } else {
                return x / y;
            }

        case "log":
            return log(y, x);

        case "pow":
            return pow(x, y);

        case "spn":
            return specialNeeds(x, y);
    }
}

function handleCalculatorForm(form){
    let x = parseInt(form.valueX.value);
    let y = parseInt(form.valueY.value);
    let select = document.getElementById("mafs").value;

    console.log(document.getElementById("calcResult").innerHTML = calculate(x, y, select));
}

/* let toDisplay = form.inputbox.value;

    1 = sum
    2 = sub
    3 = mul
    4 = div
    5 = log
    6 = pow
    7 = spn
*/

function palindrome(str){
    word = str.split("");
    revWord = [];

    for(var i = 0; i <= word.length; i++){
        revWord[i] = word[word.length - 1 - i];
    }

    for( i = 0; i < word.length; i++){
        if(word[i] == revWord[i]){
            return true;
        }else{
            return false;
        }
    }
}

function handlePalindromeForm(form){
    let palString = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(palString);
}

function bblSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < (arr.length - i - 1); j++){ 
          if(arr[j] > arr[j + 1]){
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr)
}

function ZndBiggestNum(str){
    arr = str.split(" ");

    if(/^\d+$/.test(arr[i])){
        for(var i = 0; i < arr.length; i++){
            arr[i] = parseInt(arr[i]);
        }
    }

    bblSort(arr);

    for(var i = arr.length - 2; i >= 0; i--){
        if(arr[i] != arr[arr.length - 1]){
            return arr[i];
        }
    }
}

function handleZndBiggestNumForm(form){
    let arr = form.inputbox3.value;
    document.getElementById("ZndBiggestNumResult").innerHTML = ZndBiggestNum(arr);
}

/*Wypełnij funkcję calculate() obsługującą dodawanie, odejmowanie, dzielenie oraz mnożenie.
Obsłuż dzielenie przez 0 w dowolny sposób. Należy edytować form w index.html tak aby użytkownik miał wybór. Można edytować ilość zmiennych, które ta funkcja przyjmuje.

Zadanie 2. (2 pkt)
Wypełnij funkcję palindrome(), która przyjmuje zmienną i sprawdza czy jest ona palindromem. Funkcja ma zwracać true (czyli jest palindromem) lub false (nie jest palindromem). 
Przykłady palindromu: „Kayak”,  „Ala”.
Przykłady czegoś co nie jest palindromem: „Kotek”, „Pies”.

Zadanie 3. (3 pkt)
Napisz funkcję, która przyjmuje tablicę, a w przypadku tablicy liczb zwraca drugi największy element w tej tablicy. W przypadku tablicy stringów (czyli tekstu) zwraca drugi najdłuższy z nich.
[1, 5 ,10 ,15]  >> 10
[1,1, 3, 3, 4 ,4] >> 3 
[ala, robert, stanislaw] >> Robert

Znowu jest to zadanie do wykorzystania paradygmu programowania imperatywnego. Jedyne funkcję które powinniście używać, to for(), push(), typeof(), split(), charCodeAt(0).

Zadanie wrzucamy indywidualnie na własne repo na githubie. Termin 15.11.2022 14:00.*/