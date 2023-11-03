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

function getQuotes() {
  const quotes = document.querySelector(".quotes");

  quotes.innerHTML = "NO PAIN NO GAIN";

  let savedQuotes = localStorage.getItem("quotesList");

  if (!savedQuotes) {
    localStorage.setItem("quotesList", JSON.stringify(["바르게살자"]));
    savedQuotes = localStorage.getItem("quotesList");
  }

  let parsedQuotes = JSON.parse(savedQuotes);

  quotes.innerText =
    parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
}

getQuotes();

function onClickNewQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");
  const newQuotesInput = document.querySelector(".new-quotes-input");

  if (!newQuotesInput.value) return;

  let savedQuotes = localStorage.getItem("quotesList");
  let parsedQuotes = JSON.parse(savedQuotes);
  parsedQuotes.push(newQuotesInput.value);
  localStorage.setItem("quotesList", JSON.stringify(parsedQuotes));

  quotes.innerText = newQuotesInput.value;
  newQuotesInput.value = "";

  quotes.style.display = "block";
  newQuotes.style.display = "none";
}

function onClickQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");

  quotes.style.display = "none";
  newQuotes.style.display = "block";
}
