// ### Declare variables ###

var gridHeight;
var gridWidth;
var inputHeight;
var inputWidth;
var selectedColor;
var activeColor;

// ### Add event listeners ###

// HEIGHT INPUT LISTENER

// listener function for the height input
function getHeight(event) {
    gridHeight = event.target.value;
    console.log('Get Height Triggered');
}
// giving the inputHeight the html id inputHeight value
inputHeight = document.querySelector("#inputHeight");
// adding the listner to the id inputHeight and passing the type, function parameters
inputHeight.addEventListener("input", getHeight, false);

// WIDTH INPUT LISTENER
// listener function for the width input
function getWidth(event) {
    gridWidth = event.target.value;
    console.log('Get Width Triggered');
}

// giving the inputWidth the html id inputWidth value
inputWidth = document.querySelector("#inputWidth");

// adding the listner to the id inputWidth and passing the type, function parameters
inputWidth.addEventListener("input", getWidth, false);

// COLOR INPUT LISTENER

// listener function for the color selection
function setColor(event) {
    selectedColor = event.target.value;
    console.log('Get Color Triggered');
}

// giving the selectedColor the html id colorPicker value
activeColor = document.querySelector("#colorPicker");

// adding the listener to the id colorPicker and passing the type, function parameters
activeColor.addEventListener("input", setColor, false);

// When size is submitted by the user, call makeGrid()
