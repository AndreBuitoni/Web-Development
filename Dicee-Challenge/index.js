let randomNumber1 = Math.floor(Math.random()*6+1)
let randomNumber2 = Math.floor(Math.random()*6+1)

document.getElementById("dice1").setAttribute("src", "images/dice"+randomNumber1+".png")
document.getElementById("dice2").setAttribute("src", "images/dice"+randomNumber2+".png")

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player One Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player Two Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}