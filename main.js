const btnColor = document.querySelector("#btnColor");
const valueColor = document.querySelector("#valueColor");
const body = document.querySelector("body");
const colorNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];


btnColor.addEventListener("click", () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colorNumber[getRandomNumber()];
  }

  valueColor.textContent = hex;
  body.style.backgroundColor = hex;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colorNumber.length);
}
