import "./styles.css";
var button = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var result = null;
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value === "+" || value === "-" || value === "/" || value === "*") {
      if (operand1 === 0) {
        operator = value;
        operand1 = parseFloat(display.textContent);
      } else if (operator !== "=" && operand1 !== 0) {
        console.log(operand1, operator);
        operand2 = parseFloat(display.textContent);
        var value1 = eval(operand1 + "" + operator + "" + operand2);
        operand1 = value1;
      }
      display.innerText = null;
    } else if (value === "=") {
      operand2 = parseFloat(display.textContent);
      value = eval(operand1 + "" + operator + "" + operand2);
      operand1 = 0;
      display.innerText = value;
      result = value;
    } else if (value === "Clear") {
      display.innerText = null;
      operand1 = 0;
      operand2 = null;
      operator = null;
    } else if (value === "%") {
      operator = "/";
      operand2 = parseFloat(display.textContent);
      display.innerText = eval(operand1 + "" + operator + "" + 100);
      result = display.textContent;
    } else {
      if (value === "+/-") {
        if (display.textContent[0] !== "-") {
          display.innerText = "-" + display.innerText;
        } else if (display.textContent[0] === "-") {
          display.innerText = display.innerText.substring(1);
        } else {
          display.innerText = "";
        }
      } else {
        if (Number.isInteger(value) && result != null) {
          operand1 = 0;
          operand2 = null;
          operator = null;
          result = null;
          display.innerText = "";
        }
        display.innerText += value;
      }
    }
  });
}
