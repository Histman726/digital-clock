const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

//funcion flecha que va actualizando la hora
const updateClock = () => {
  let hours = new Date().getHours(),
    minutes = new Date().getMinutes(),
    seconds = new Date().getSeconds(),
    ampm = "AM";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "PM";
  }
  hourElement.innerText = hours < 10 ? "0" + hours : hours;
  minuteElement.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondElement.innerText = seconds < 10 ? "0" + seconds : seconds;
  setTimeout(() => updateClock(), 1000);
};

updateClock();
