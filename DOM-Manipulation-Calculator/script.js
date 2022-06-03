// Get all the keys from document
let keys = document.querySelectorAll('button[type="button"]');
let operators = ["+", "-", "*", "/"];
let decimalAdded = false;

// Add onclick event to all the keys and perform operations
for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = function (e) {
    // Get the input and button values
    let input = document.querySelector("#result");
    let inputVal = input.value;
    let btnVal = this.value;

    // Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
    // If clear key is pressed, erase everything
    if (btnVal == "C") {
      input.value = "0";
      decimalAdded = false;
    }

    // If eval key is pressed, calculate and display the result
    else if (btnVal == "=") {
      let equation = inputVal;
      let lastChar = equation[equation.length - 1];

      // Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
      // equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

      // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
      if (operators.indexOf(lastChar) > -1 || lastChar == ".")
        equation = equation.replace(/.$/, "");

      if (equation) input.value = Function("return " + equation)();

      decimalAdded = false;
    }

    // Basic functionality of the calculator is complete. But there are some problems like
    // 1. No two operators should be added consecutively.
    // 2. The equation shouldn't start from an operator except minus
    // 3. not more than 1 decimal should be there in a number

    // We'll fix these issues using some simple checks

    // indexOf works only in IE9+
    else if (operators.indexOf(btnVal) > -1) {
      // Operator is clicked
      // Get the last character from the equation
      let lastChar = inputVal[inputVal.length - 1];

      // Only add operator if input is not empty and there is no operator at the last
      if (inputVal != "" && operators.indexOf(lastChar) == -1)
        input.value += btnVal;
      // Allow minus if the string is empty
      else if (inputVal == "" && btnVal == "-") input.value += btnVal;

      // Replace the last operator (if exists) with the newly pressed operator
      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        // Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
        input.value = inputVal.replace(/.$/, btnVal);
      }

      decimalAdded = false;
    }

    // Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, clear key is pressed.
    else if (btnVal == ".") {
      if (!decimalAdded) {
        input.value += btnVal;
        decimalAdded = true;
      }
    } 
    
    //Delete one element at a time
    else if (btnVal == "backspace") {
      input.value = input.value.substring(
        0,
        input.value.length - 1
      );

      btnVal = input.value;
    }
    // if any other key is pressed, just append it
    else {
      if (input.value == 0) {
        input.value = btnVal;
      } else input.value += btnVal;
    }

    // prevent page jumps
    e.preventDefault();
  };
}


//adding keyboard input functionality
document.onkeydown = function (event) {
  let key_press = event.key;
  let key_code = event.code;
  let input = document.querySelector("#result");
  let inputVal = input.value;
  let lastChar = inputVal[inputVal.length - 1];
  let equation = inputVal;

  // Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively.
  equation = equation.replace(/x/g, "*").replace(/÷/g, "/");

  //Check Alphabets should not enter
  if (
    key_press.match(/[0-9]/) ||
    key_press.match(/[*/+-]/) ||
    key_press == "Enter" ||
    key_press == "Backspace" ||
    key_press == "Delete" ||
    event.shiftKey == true ||
    key_press == "."
  ) {
    if (input.value == 0) {
      if (key_press.match(/[1-9]/)) {
        input.value = key_press;
      }
    } 
    // Target each keypress and update the input screen
    else {
      if (key_press == 1) {
        input.value += key_press;
      }
      if (key_press == 2) {
        input.value += key_press;
      }
      if (key_press == 3 || key_code == 32) {
        input.value += key_press;
      }
      if (key_press == 4) {
        input.value += key_press;
      }
      if (key_press == 5) {
        input.value += key_press;
      }
      if (key_press == 6) {
        input.value += key_press;
      }
      if (key_press == 7) {
        input.value += key_press;
      }
      if (key_press == 8 && event.shiftKey == false) {
        input.value += key_press;
      }
      if (key_press == 9) {
        input.value += key_press;
      }
      if (key_press == 0) {
        input.value += key_press;
      }

      // Capture operators and prevent from add into two consecutuve operators

      if (
        inputVal != "" &&
        operators.indexOf(lastChar) == -1 &&
        key_press == "+"
      ) {
        document.querySelector(".screen").value += "+";
      }
      if (
        inputVal != "" &&
        operators.indexOf(lastChar) == -1 &&
        key_press == "-"
      ) {
        document.querySelector(".screen").value += "-";
      }
      if (
        inputVal != "" &&
        operators.indexOf(lastChar) == -1 &&
        key_press == "*"
      ) {
        document.querySelector(".screen").value += "*";
      }
      if (
        inputVal != "" &&
        operators.indexOf(lastChar) == -1 &&
        key_press == "/"
      ) {
        document.querySelector(".screen").value += "÷";
      }
      if (key_press == "Enter" || key_press == "=") {
        input.value = Function("return " + equation)();
        //reset decimal added flag
        decimalAdded = false;
      }
      if (key_code == "Delete") {
        input.value = "0";
        decimalAdded = false;
      }
      if (key_press == "Backspace") {
        input.value = input.value.substring(
          0,
          input.value.length - 1
        );
      }
      if (key_press == ".") {
        if (!decimalAdded) {
          input.value += key_press;
          decimalAdded = true;
        }
      }
    }
  } else {
    alert("Please enter only numbers!!");
  }
};
