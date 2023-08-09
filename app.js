const bells = new Audio('bell.wav');
const startBtn = document.querySelector('.btn-start');
const resetBtn = document.querySelector('.btn-reset');
const session = document.querySelector('.minutes');
let myInterval;
let state = true;

// app timer function
const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)

    if (state) {
        state = false;
        let totalSeconds = sessionAmount * 60;

        const updateSeconds = () => {
            // function code here
            const minuteDiv = document.querySelector('.minutes');
            const secondDiv = document.querySelector('.seconds');

            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60;

            if (secondsLeft < 10) {
                secondDiv.textContent = '0' + secondsLeft;
            } else {
                secondDiv.textContent = secondsLeft;
            }
            minuteDiv.textContent = `${minutesLeft}`;

            if (minutesLeft === 0 && secondsLeft === 0) {
                bells.play();
                setTimeout(function(){alert('time for a break!');},500);
                clearInterval(myInterval);
            }
        }
        myInterval = setInterval(updateSeconds, 1000);
    } else {
        alert('Session has already started.')
    }
}

//start timer when button is pressed
startBtn.addEventListener('click', appTimer);


// alternative for setting off bell and alert simultaneously *(1 sec off)
/* 
bells.addEventListener('ended', showAlert)

function showAlert() {
    alert("time's up!")
}
*/


// reset button to restart timer
 const resetTimer = () => {
    clearInterval(myInterval);
    state = true;

 }
 resetBtn.addEventListener('click', resetTimer)
