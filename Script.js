//
let inputE = document.querySelector(".num");
let farenheitE = document.querySelector(".farenheit");
let celsiusE = document.querySelector(".celsius");
let buttonE = document.querySelector(".btn");
let resultE = document.querySelector("p");
let temp;

const convert = () => {
  if (farenheitE.checked) {
    temp = parseFloat(inputE.value);
    temp = (temp * 9) / 5 + 32;
    resultE.classList.remove("hide");
    resultE.innerText = "Result: " + temp.toFixed(1) + "°F";
  } else if (celsiusE.checked) {
    temp = parseFloat(inputE.value);
    temp = (temp - 32) * (5 / 9);
    resultE.classList.remove("hide");
    resultE.innerText = "Result: " + temp.toFixed(1) + "°C";
  } else {
    resultE.classList.remove("hide");
    resultE.innerText = "Please select a unit";
  }
};

buttonE.addEventListener("click", convert);
