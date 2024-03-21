// const randomNumber1 = Math.floor(Math.random() * 6) + 1;

// const diceImage1 = document.getElementById("diceImage1");


// if (randomNumber1 == 1){
//     document.querySelector("diceImage1").setAttribute("./images/dice1.png")
// }else if(randomNumber1 == 2){
//     document.querySelector("diceImage1").setAttribute("./images/dice2.png")
// }else if(randomNumber1 == 3){
//     document.querySelector("diceImage1").setAttribute("./images/dice3.png")
// }else if(randomNumber1 == 4){
//     document.querySelector("diceImage1").setAttribute("./images/dice4.png")
// }else if(randomNumber1 == 5){
//     document.querySelector("diceImage1").setAttribute("./images/dice5.png")
// }else if(randomNumber1 == 6){
//     document.querySelector("diceImage1").setAttribute("./images/dice6.png")
// }
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var imageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , imageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2  = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src" ,randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}