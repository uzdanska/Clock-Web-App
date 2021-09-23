setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()
function ShowTime(){
    var currentDate = new Date()
    var secondsRatio = currentDate.getSeconds(); /*0 - 59*/
    var minutesRatio = currentDate.getMinutes(); /*0 - 59*/
    var hoursRatio = currentDate.getHours(); 
    var session = "AM";
    if(hoursRatio == 0){hoursRatio =12;}
    else if(hoursRatio > 12){ hoursRatio = "0" + (hoursRatio-12); session="PM"}
    else if(hoursRatio < 10){hoursRatio = "0" + hoursRatio;}
    minutesRatio = (minutesRatio < 10) ? "0" + minutesRatio : minutesRatio;
    secondsRatio = (secondsRatio < 10) ? "0" + secondsRatio : secondsRatio;
    var time = hoursRatio + ":" + minutesRatio + ":" + secondsRatio +" " + session;
    document.getElementById("digitalClock").innerText = time;
    document.getElementById("digitalClock").textContent = time;
    setTimeout(ShowTime, 1000);
}

ShowTime();
