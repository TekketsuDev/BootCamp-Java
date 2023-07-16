const theme1 = document.getElementById("theme1");
const theme2 = document.getElementById("theme2");
const theme3 = document.getElementById("theme3");
const theme4 = document.getElementById("theme4");

const buttons = document.querySelectorAll("button");
const calculator = {
  displayValue: "0",
  firstOperand: null,
  haveSecondOperand: false,
  operator: null,
};

const themeToggles = document.querySelectorAll("label");
const decimalPercision = 10;

function toggleTheme(switchTheme) {
  document.documentElement.setAttribute("data-theme", switchTheme);

  themeToggles.forEach((theme) => theme.classList.remove("active"));

  if (switchTheme === "theme1") {
    themeToggles[0].classList.add("active");
  } else if (switchTheme === "theme2") {
    themeToggles[1].classList.add("active");
  } else if (switchTheme === "theme3") {
    themeToggles[2].classList.add("active");
  } else if (switchTheme === "theme4") {
    themeToggles[3].classList.add("active");
  }
}
toggleTheme('theme1');


theme1.addEventListener("click", () => {
  toggleTheme("theme1");
});

theme2.addEventListener("click", () => {
  toggleTheme("theme2");
});

theme3.addEventListener("click", () => {
  toggleTheme("theme3");
});

theme4.addEventListener("click", () => {
  toggleTheme("theme4");
});


function inputDigit(digit) {
  const { displayValue, haveSecondOperand } = calculator;

  if (haveSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.haveSecondOperand = false;
  } else {
    if (calculator.displayValue.length <= 10) {
      calculator.displayValue =
        displayValue === "0" ? digit : displayValue + digit;
    }
  }
}

function inputDecimal(dot) {
  if (calculator.haveSecondOperand === true) {
    calculator.displayValue = "0.";
    calculator.haveSecondOperand = false;
    return;
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function updateDisplay() {
  const display = document.getElementById("display");

  display.textContent =
    Number(calculator.displayValue) <= 99999999999
      ? Number(calculator.displayValue).toLocaleString("en-US", {
          maximumFractionDigits: decimalPercision,
        })
      : Number(calculator.displayValue).toExponential(4);
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator !== "=" && calculator.haveSecondOperand) {
    calculator.operator = nextOperator;
    return;
    
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = `${parseFloat(result.toFixed(decimalPercision))}`;
    calculator.firstOperand = result;
  }

  calculator.haveSecondOperand = true;
  calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "x") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}

function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.haveSecondOperand = false;
  calculator.operator = null;
}

function handleInput(input) {
  switch (input) {
    case "+":
    case "-":
    case "x":
    case "/":
    case "=":
      handleOperator(input);
      break;
    case "DEL":
      calculator.displayValue = calculator.displayValue.slice(0, -1);
      break;
    case ".":
      inputDecimal(input);
      break;
    case "RESET":
      resetCalculator();
      break;
    default:
      if (Number.isInteger(parseFloat(input))) {
        inputDigit(input);
      }
  }
  updateDisplay();
}


buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const { textContent } = e.target;
    console.log(textContent);

    handleInput(textContent);
  });
});

