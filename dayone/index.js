
//! YT part three (which was Arithmetic Operators)


//! YT part four (Accept user input)
//?how to accept user input

//? 1.Easy Way = window prompt

// let userName;

// userName = window.prompt("what's your username?");

// console.log(userName);

//? 2.Professional Way = HRML textbox

let userName;

document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${userName}`;
}
