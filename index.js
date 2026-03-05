const select = document.getElementById("characterSelect");
const image = document.getElementById("characterImage");

select.addEventListener("change", function () {

    const character = select.value;

    if(character === "garfield"){
        image.src = "assets/garfield.jpeg";
    }
    else if(character === "odie"){
        image.src = "assets/odie.jpeg";
    }
    else if(character === "nermal"){
        image.src = "assets/nermal.webp";
    }
    else if(character === "jon"){
        image.src = "assets/jon.webp";
    }
    else if(character === "pookyCharacter"){
        image.src = "assets/PookyCharacter.webp";
    }
    else{
        image.src = "";
    }

});