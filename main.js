const clock = document.querySelector(".clock");

function getTime() {
  const date = new Date();
  let amPm = "AM";

  //let hour = String(date.getHours()).padStart(2, "0");
  let hour = date.getHours();
  if (hour > 12) {
    amPm = "PM";
  }
  if (hour > 12) {
    hour %= 12;
  }
  // 삼항연산자  let hour = date.getHour() >= 13 ? date.getHour() : date.getHour() %12
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${amPm} ${hour}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
