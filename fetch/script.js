const getCatImg = () => {
    catImg = document.createElement("img");
    divImg = document.getElementById("divCat");
    tagCat = document.getElementById("tagCat").value;

    if(tagCat === ""){
        urlCat = "https://cataas.com/cat/";
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