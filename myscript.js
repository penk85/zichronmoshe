houses = document.getElementById("houses");
let character = document.getElementById("character");
houses.addEventListener("click", function(){
  let house = event.target.id;
  console.log(house);
  let firstColor = "red";
  let secondColor = "white";
  switch(house) {
    case "gryffindor":
      firstColor = "#740001";
      secondColor = "#d3a625";
      character.innerHTML = "Bravery, helping others, and chivalry";
      break;
    case "ravenclaw":
      firstColor = "#0E1A40";
      secondColor = "#946B2D";
      character.innerHTML = "Hard work, patience, loyalty, and fair play.";
      break;
    case "hufflepuff":
      firstColor = "#FFDB00";
      secondColor = "#60605C";
      character.innerHTML = "Intelligence, knowledge, planning ahead, and wit.";
      break;
    case "slytherin":
      firstColor = "#1A472A";
      secondColor = "#AAAAAA";
      character.innerHTML = "Ambition, cunningness, heritage, and resourcefulness.";
      break;
    default:
      firstColor = "white";
      secondColor = "white";
      character.innerHTML = "";
  }
  document.body.style.backgroundImage =  "linear-gradient(to bottom, " + firstColor + ", " + firstColor + " 50%, " + secondColor + " 50%, " + secondColor + ")";
});