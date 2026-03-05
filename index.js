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
    else if(character === "scoobydoo"){
        image.src = "assets/scoobydoo.webp";
    }
    else if(character === "velma"){
        image.src = "assets/velma.png";
    }
    else if(character === "shaggy"){
        image.src = "assets/shaggy.jpg";
    }
    else{
        image.src = "";
    }

});