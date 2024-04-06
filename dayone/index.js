//! YT part 7 to 9 skiped  
//! YT part TEN

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
    if (myCheckbox.checked) {
        subResult.textContent = `You are subscribed!`;
        if (visaBtn.checked) {
            paymentResult.textContent = `You are paying with visa`;
        } else if (masterCardBtn.checked) {
            paymentResult.textContent = `You are paying with master card`;
        } else if (payPalBtn.checked) {
            paymentResult.textContent = `You are paying with paypal`;
        } 
    } else {
        subResult.textContent = `You are NOT subscribed!`;
    }


}

