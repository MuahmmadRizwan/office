
document.addEventListener('DOMContentLoaded', function() {
var numberContainer = document.getElementById('number'); 
function startCounting() {
var currentNumber = 0;
var interval = setInterval(function() {
    if (currentNumber <= 403) {
        numberContainer.innerHTML = `${currentNumber}+`; // Display number with "+"
        currentNumber += 4; 
    } else {
        clearInterval(interval);
    }
}, 25);
}
startCounting();
});
///////2//////
document.addEventListener('DOMContentLoaded', function() {
var numberContainer = document.querySelector('.numbers');

function startCounting() {
var currentNumber = 0;
var interval = setInterval(function() {
    if (currentNumber <= 43) {
        numberContainer.innerHTML = `${currentNumber}+`; // Display number with "+"
        currentNumber += 4; 
    } else {
        clearInterval(interval);
    }
}, 25);
}
startCounting();
});
////////3////////
document.addEventListener('DOMContentLoaded', function() {
var numberContainer = document.querySelector('.numbers-3');

function startCounting() {
var currentNumber = 0;
var interval = setInterval(function() {
    if (currentNumber <= 203) {
        numberContainer.innerHTML = `${currentNumber}+`; // Display number with "+"
        currentNumber += 4; 
    } else {
        clearInterval(interval);
    }
}, 25);
}
startCounting();
});
/////4///////
document.addEventListener('DOMContentLoaded', function() {
var numberContainer = document.querySelector('.numbers-4');

function startCounting() {
var currentNumber = 0;
var interval = setInterval(function() {
    if (currentNumber <= 8) {
        numberContainer.innerHTML = `${currentNumber}+`; // Display number with "+"
        currentNumber += 1; 
    } else {
        clearInterval(interval);
    }
}, 100);
}
startCounting();
});




