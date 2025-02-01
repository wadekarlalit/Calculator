// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  var equation = document.getElementById("result").value;
  var resolvedValue = eval(equation);
  document.getElementById("result").value = resolvedValue;
}

// This function delete last digit(number)
function backspace() {
  let equation = document.getElementById("result").value;
  console.log(equation);
  let deletedValue = (document.getElementById("result").value =
    equation.substring(0, equation.length - 1));
  console.log(deletedValue);
}

// This function is toggel switch move right and left
let toggleSwitch = document.getElementsByClassName("toggleSwitch")[0];
let toggleLeft = document.getElementsByClassName("toggle")[0];
// let light = document.getElementsByClassName("calculator-light");
// let bord = document.getElementsByClassName("numbers");

toggleLeft.addEventListener("click", () => {
  if (toggleLeft.style.left == "56px") {
    toggleLeft.style.left = "0";
    document.getElementById("result").classList.add("display-dark");
    document.getElementById("result").classList.remove("display-light");
    document.getElementById("cal").classList.add("calculator-dark");
    document.getElementById("cal").classList.remove("calculator-light");
    toggleSwitch.style.background = "yellow";
    
  } else {
    toggleLeft.style.left = "56px";
    toggleSwitch.style.background = "green";
    document.getElementById("result").classList.add("display-light");
    document.getElementById("result").classList.remove("display-dark");
    document.getElementById("cal").classList.add("calculator-light");
    document.getElementById("cal").classList.remove("calculator-dark");
  }
});


// document.getElementById("numBorder-dark").classList.remove("numBorder-light");
// document.getElementById("numBorder-dark").classList.add("numBorder-dark");
// document.getElementById("numBorder-dark").classList.add("numBorder-light");
// document.getElementById("numBorder-dark").classList.remove("numBorder-dark");

///////////////////////////////////
// function mouthSize(animal) {
//   return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
// }

// let a = mouthSize("alligato")
// console.log(a)

///////////////////////////////////////////////////////////
// mouthSize=animal=>animal.match(/alligator/) ? 'small' : 'wide';
// let b = mouthSize("alligator")
// console.log(b)

/////////////////////////////
// const mouthSize = animal => animal.toLowerCase() == "alligator" ? "small" : "wide";
// let c = mouthSize("Alligator")
// console.log(c)

// const flowerName = flower => flower.toLowerCase() == "rose" ? "red" : "Not"
// let d = flowerName("ROS")
// console.log(d)