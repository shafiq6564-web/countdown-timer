// pehly date set krni ha aur aur millisecond 
const targettime = new Date("2025-12-31T23:59:59").getTime();

// ab hum html element kO JS ME SELECT KRIEN GYE
const elDays = document.getElementById("days");
const elHours = document.getElementById("hours");
const elMinutes = document.getElementById("minutes");
const elSeconds = document.getElementById("seconds");
const msg = document.getElementById("message");

// ab hum ek function chlyty hain jo number ko string me convert krta ha aur single digit me zero add krta ha
function pad(n) {
    return n.toString().padStart(2, "0");
}

// ab hum function banty hain joky time update karega
function updateCountdown() {
    const now = Date.now();
    const diff = targettime - now;

    if (diff <= 0) {
        elDays.textContent = "0";
        elHours.textContent = "00";
        elMinutes.textContent = "00";
        elSeconds.textContent = "00";
        msg.style.display = "block";
        clearInterval(intervalId);
        return;
    }

    // ab hum math ka logic use kry gy
    const totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);

    elDays.textContent = days;
    elHours.textContent = pad(hours);
    elMinutes.textContent = pad(minutes);
    elSeconds.textContent = pad(seconds);
}

// pehli dafa call
updateCountdown();

// Repeat every second
const intervalId = setInterval(updateCountdown, 1000);
