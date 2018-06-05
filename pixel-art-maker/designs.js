// ### Declare variables ###

var gridHeight;
var gridWidth;
var inputHeight;
var inputWidth;

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

// When size is submitted by the user, call makeGrid()
