//! YT part 21
//? NUMBER GUESSING GAME

const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);




let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("please enter a valid number")
    } else if (guess > maxNum || guess < minNum) {
        window.alert("please enter a valid number")
    } else {
        attempts++;
        if (guess > answer) {
            window.alert("TOO HIGH ! TRY AGAIN")
        } else if (guess < answer) {
            window.alert("TOO LOW! TRY AGAIN")
        } else {
            window.alert(`CORRECT! THE ANSWER WAS ${answer}. IT TOOK YOU ${attempts} ATEMPTS`);
            running = false;

        }
    }
}

