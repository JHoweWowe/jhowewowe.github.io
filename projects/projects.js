
// Obtain buttons to trigger clicking
let buttonOne = document.getElementById("university-title-btn");
let buttonTwo = document.getElementById("featured-title-btn");
let buttonThree = document.getElementById("side-projects-title-btn");

// Obtain containers for event handling
let containerOne = document.getElementById("university-container");
let containerTwo = document.getElementById("featured-container");
let containerThree = document.getElementById("side-projects-container");

// JS Event Handling
buttonOne.onclick = function() {
    containerOne.style.display = "block";
    containerTwo.style.display = "none";
    containerThree.style.display = "none";

    buttonOne.style.background = "#002B53";
    buttonOne.style.color = "#FFFFFF";
    buttonTwo.style.background = "#FFFFFF";
    buttonTwo.style.color = "#002B53";
    buttonThree.style.background = "#FFFFFF";
    buttonThree.style.color = "#002B53";
}
buttonTwo.onclick = function() {
    containerOne.style.display = "none";
    containerTwo.style.display = "block";
    containerThree.style.display = "none";

    buttonOne.style.background = "#FFFFFF";
    buttonOne.style.color = "#002B53";
    buttonTwo.style.background = "#002B53";
    buttonTwo.style.color = "#FFFFFF";
    buttonThree.style.background = "#FFFFFF";
    buttonThree.style.color = "#002B53";
}
buttonThree.onclick = function() {
    containerOne.style.display = "none";
    containerTwo.style.display = "none";
    containerThree.style.display = "block";

    buttonOne.style.background = "#FFFFFF";
    buttonOne.style.color = "#002B53";
    buttonTwo.style.background = "#FFFFFF";
    buttonTwo.style.color = "#002B53";
    buttonThree.style.background = "#002B53";
    buttonThree.style.color = "#FFFFFF";
}