const display = document.querySelector('.display'); 
let operator = null;
let longTerm = null;



function clear() {
    display.innerText = "0";
    longTerm = null;
    operator = null;
}
function backspace() {
    if (display.innerText != "0") {
        display.innerText = Math.max(display.innerText.slice(0, -1), 0);

    }// else if (display.innerText == null) {
     //   clear();
    //}
}
function divide() {
    longTerm = solve();
    operator = "/";
    display.innerText ="0";
}
function multiply() {
    longTerm = solve();
    operator = "x";
    display.innerText ="0";
}
function subtract() {
    longTerm = solve();
    operator = "-";
    display.innerText ="0";
}
function add() {
    longTerm = solve();
    operator = "+";
    display.innerText ="0";
}
function solve() {
    let answer = parseInt(display.innerText);
    if (operator === "/") {
        answer = longTerm / parseInt(display.innerText);
    } else if ( operator === "x") {
        answer = longTerm * parseInt(display.innerText);
    } else if ( operator === "-") {
        answer = longTerm - parseInt(display.innerText);
    } else if ( operator === "+") {
        answer = longTerm + parseInt(display.innerText);
    }
    return answer;
}
function equals() {
    display.innerText = solve();
    operator = null;
    // if (operator === "/") {
    //     const answer = longTerm / parseInt(display.innerText);
    //     display.innerText = answer;
    // } else if ( operator === "x") {
    //     const answer = longTerm * parseInt(display.innerText);
    //     display.innerText = answer;
    // } else if ( operator === "-") {
    //     const answer = longTerm - parseInt(display.innerText);
    //     display.innerText = answer;
    // } else if ( operator === "+") {
    //     const answer = longTerm + parseInt(display.innerText);
    //     display.innerText = answer;
    // }
}

document.querySelector('.calc-buttons').addEventListener('click', function(event) {
    if (event.target.innerText == "C") {
        clear();
    } else if (event.target.innerText === "<--") {
        backspace();
    } else if (event.target.innerText === "/") {
        divide();
    } else if (event.target.innerText === "x") {
        multiply();
    }  else if (event.target.innerText === "-") {
        subtract();
    } else if (event.target.innerText === "+") {
        add();
    } else if (event.target.innerText === "=") {
        equals();
    }else if (display.innerText == "0") {
        display.innerText = event.target.innerText;
    } else {
        display.innerText += parseInt(event.target.innerText);
    }

    // if (display.innerText == "0") {
     //    display.innerText = event.target.innerText;
     //} else { 
     //    display.innerText += event.target.innerText;
     //}
    // alert(`You clicked on button ${event.target.innerText} `);
});