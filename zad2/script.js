function pow(x, y){
    
}

function log(x, y){
    return 
}

function handleCalculatorForm(form){
    let x = document.getElementById("xNum").value;
    let y = document.getElementById("yNum").value;
    let select = document.getElementById("select").value;

    let log = 0;

    for(n = 1; n <= y; n++){
        log = ((Math.pow(-1, n + 1)) / n) * Math.pow(x - 1, n)
    }

    switch(select){
        case 0:
            document.getElementById("result").innerHTML = x + y;
            break;

        case 1:
            document.getElementById("result").innerHTML = x - y;
            break;
            
        case 2:
            document.getElementById("result").innerHTML = x * y;
            break;
        
        case 3:
            document.getElementById("result").innerHTML = x / y;
            break;

        case 4:
            document.getElementById("result").innerHTML = log;
            break;
    }


    let toDisplay = form.inputbox.value;
    document.getElementById("calcResult").innerHTML = calculate(toDisplay, "+-/*");
}
/*
    0 = sum
    1 = sub
    2 = mul
    3 = div
    4 = log
    5 = pow
    6 = spn
*/

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function calculate(var1, var2){
    return 0;
}

function palindrome(var1){
    return true;
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