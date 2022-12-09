function addBigger() {
    document.querySelector("h1").classList.add("huge");
}

function toggleBigger() {
    document.querySelector("h1").classList.toggle("huge");
}

function removeBigger() {
    document.querySelector("h1").classList.remove("huge");
}

function gMorning() {
    document.getElementById("time").innerHTML = "Good Morning!"
}

function gAfternoon() {
    document.getElementById("time").innerHTML = "Good Afternoon!"
}

function gNight() {
    document.getElementById("time").innerHTML = "Good Night!"
}

function resetTime() {
    document.getElementById("time").innerHTML = "What time is it?"
}





document.querySelector("h1").color.red;