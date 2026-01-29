import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = [
    { icon: "♠", color: "black", shadow: "2px 2px 10px rgba(0,0,0,0.5)" },
    { icon: "♣", color: "black", shadow: "2px 2px 10px rgba(0,0,0,0.5)" },
    { icon: "♥", color: "red", shadow: "2px 2px 10px rgba(255,0,0,0.5)" },
    { icon: "♦", color: "red", shadow: "2px 2px 10px rgba(255,0,0,0.5)" }
];


const numberDisplay = document.querySelector("#numberValue");
const suitDisplays = document.querySelectorAll(".suitIcon");
const button = document.querySelector("#drawButton");

const changeCard = () => {

    const cardElement = document.querySelector(".myRectangle");

    // To explain added this card animation, I'm calling the .shuffling property in the .css //
    cardElement.classList.add("shuffling"); 

    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    
    numberDisplay.innerHTML = randomValue;
    numberDisplay.style.color = randomSuit.color;
    numberDisplay.style.textShadow = randomSuit.shadow; 
    
    suitDisplays.forEach(display => {
        display.innerHTML = randomSuit.icon;
        display.style.color = randomSuit.color;
        display.style.textShadow = randomSuit.shadow;
    });


    setTimeout(() => {
        cardElement.classList.remove("shuffling");
    }, 400); 
};

button.addEventListener("click", changeCard);
}

