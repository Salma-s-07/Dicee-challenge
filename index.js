var randomNumber1 = (Math.floor(Math.random() * 6 ) + 1);

var randomDiceImage1 = "imgs/" + "dice" + randomNumber1 + ".png" ;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomDiceImage1);


var randomNumber2 = (Math.floor(Math.random() * 6 ) + 1);

var randomDiceImage2 = "imgs/" + "dice" + randomNumber2 + ".png" ;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomDiceImage2);


if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🚩Player 2 wins";
}
else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
function refreshPage() {
    location.reload();
}
