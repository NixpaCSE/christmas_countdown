// Set the target date for Christmas 2024
const targetDate = new Date("Dec 25, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("message").innerHTML = "Merry Christmas!";
        document.getElementById("countdown").style.display = "none";
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update HTML elements with calculated values
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Function to create snowflakes
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "&#10052;"; // Snowflake character

    // Randomize starting position
    snowflake.style.left = Math.random() * 100 + "vw"; // Random horizontal position

    // Randomize the fall duration (between 5 and 15 seconds)
    const fallDuration = Math.random() * 10 + 5;
    snowflake.style.animationDuration = fallDuration + "s"; // Set random fall speed

    document.body.appendChild(snowflake); // Append snowflake to body

    // Remove snowflake after it has fallen
    setTimeout(() => {
        snowflake.remove();
    }, (fallDuration + 1) * 1000); // Duration matches fall time plus a buffer
}

// Create multiple snowflakes at intervals
setInterval(createSnowflake, 300); // Creates a snowflake every 300ms