const getCatImg = () => {
    catImg = document.createElement("img");
    divImg = document.getElementById("divCat");
    tagCat = document.getElementById("tagCat").value;

    if(tagCat === ""){
        urlCat = "https://cataas.com/cat";
    }else{
        urlCat = "https://cataas.com/cat/" + tagCat;
    }
    fetch(urlCat)
    .then((response) => response.blob())
    .then((blob) => {
        console.log(urlCat);
        catImg.src = URL.createObjectURL(blob);
        divImg.appendChild(catImg);
    })
    .catch((error) => console.log(error));
}


//Zadanie 9. (1pkt)
//Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
//Jako callback (wywołanie w konsoli) niech wypisze zwrócony string w konsoli.

const timerPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Udało się!");
    }, 5000);
})
.then((message) => console.log(message));


//Zadanie 10. (2pkt)
//Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą). 
//W przeciwnym przypadku zwraca iloczyn dwóch liczb. 
//Napisz callback (wywołanie w konsoli), który wypisuje wynik w konsoli.

const multiplyAsync = (x, y) => {
    return new Promise((resolve, reject) => {
        if (typeof(x) === "number" && typeof(y) === "number") {
            resolve(x * y);
        } else {
            reject("Given values aren't numbers: " + x + ", " + y);
        }
    });
};
multiplyAsync(9, 4).then((result) => console.log(result));


//Zadanie 11. dodatkowe (2pkt)
//Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts
//Jako pierwszy callback (wywołanie w konsoli) - sprawdź czy response jest poprawny (status równy 200). 
//Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
//Jako następny callback (wywołanie w konsoli) - użyj destrukturyzacji obiektów, aby wypisać w konsoli zmienną 'title' i 'body' każdego z postów.


fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    console.log(response.status);
    if(response.status == 200){
        return response.json();
    }else{
        throw new Error("Something went wrong w/ response");
    }
})
.then((result) => console.log(result.map(({title, body}) => ({title, body}))))
.catch((error) => console.log(error));