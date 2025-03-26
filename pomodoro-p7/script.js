// Access the elements
const clock = document.getElementById('clock');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

// Variables to hold the timer and interval
let timeLeft = 25 * 60;
let timerInterval = null;
let isRunning = false;

// Function to update the timer display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    clock.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {  // Prevent multiple timers from starting
        isRunning = true;
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

// Function to pause the timer
function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 25 * 60;  // Reset time to 25 minutes
    updateDisplay();  // Update the UI immediately
    isRunning = false;
}

// Event listeners (fixed issue of calling functions immediately)
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize the display
updateDisplay();
