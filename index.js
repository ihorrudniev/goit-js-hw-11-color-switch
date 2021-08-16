const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.body,
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

refs.btnStart.addEventListener("click", changeColorBody);
refs.btnStop.addEventListener("click", onBtnStop);

let intervalId = null;

function changeColorBody() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  refs.btnStart.disabled = true;
}

function onBtnStop() {
  clearInterval(intervalId);
  refs.btnStart.disabled = false;
}
