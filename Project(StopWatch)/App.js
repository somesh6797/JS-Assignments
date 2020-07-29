const togglerBTN = document.querySelector(".startBTN");
const reset = document.querySelector(".resetBTN");
const timeText = document.querySelector(".timeText");
const hourText = document.querySelector(".hourText");
const minText = document.querySelector(".minText");
const secondText = document.querySelector(".secondText");
const MsText = document.querySelector(".MsText");

// let toggle = false;
// var timeID = undefined;
timeID = undefined;
let text = "start";
let msCounter = 0;
let secondCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;

//Handler function  which starts and pauses Time

const toggleTime = () => {
  if (text == "start") {
    text = "pause";
    timeID = setInterval(() => {
      msCounter += 1;
      if (msCounter >= 10) {
        msCounter = 0;
        secondCounter += 1;
        if (secondCounter > 59) {
          minuteCounter += 1;
          secondCounter = 0;
          if (minuteCounter > 59) {
            hourCounter += 1;
            minuteCounter = 0;
          }
        }
      }

      hourText.innerText = hourCounter;
      minText.innerText = minuteCounter;
      secondText.innerText = secondCounter;
      MsText.innerText = msCounter;
    }, 90);

    //to Match the time i've changed the unit to 90 ms
  } else if (text == "pause") {
    clearInterval(timeID);
    text = "start";
  }
  togglerBTN.innerText = text;
};

//Handeler function which resets time

resetTime = () => {
  if (!(timeID == undefined)) {
    clearInterval(timeID);
    // console.log("hii");
  }

  msCounter = 0;
  secondCounter = 0;
  minuteCounter = 0;
  hourCounter = 0;
  hourText.innerText = 0;
  minText.innerText = 0;
  secondText.innerText = 0;
  MsText.innerText = 0;
  togglerBTN.innerText = "start";
  text = "start";
};

//Event Listeners
togglerBTN.addEventListener("click", e => {
  toggleTime();
});
reset.addEventListener("click", e => {
  resetTime();
});
