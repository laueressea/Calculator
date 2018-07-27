var numberButtons = document.getElementsByClassName("num");
console.log(numberButtons);
var calcuDisplay = document.getElementsByClassName("calcu-display")[0];
var symbolButtons = document.getElementsByClassName("symbol");
console.log(symbolButtons);
var lastClicked = "null";
var divisionByZero = "/0";

//Números. Imprimir números en pantalla
for (var i = 0; i < numberButtons.length; i++){
  numberButtons[i].addEventListener("click", function() {
      lastClicked = "number";
      calcuDisplay.value += this.innerHTML;
      });
}

//Símbolos. Evitar que se ingresen dos símbolos seguidos. Permitir que se ingrese el "-" al principio
for (var i = 0; i < symbolButtons.length; i++){
  symbolButtons[i].addEventListener("click", function() {
    console.log(this.innerHTML);
    if (this.innerHTML == "-" && lastClicked == "null"){
      calcuDisplay.value += this.innerHTML;
      lastClicked = "symbol";
    } else if (lastClicked != "number") {
      calcuDisplay.value = "Error";
      lastClicked = "null";
      setTimeout(function(){ calcuDisplay.value = ""; }, 1000);
    } else {
      calcuDisplay.value += this.innerHTML;
      lastClicked = "symbol";
    }
    }
  );
}
//CA. Despejar la pantalla. Resetear lastClicked
document.getElementById('clear-all').addEventListener("click", function(){
  calcuDisplay.value = "";
  lastClicked = "null";
})
//Resolución. No permitir división por cero
document.getElementById('resolve').addEventListener("click", function(){
  if (calcuDisplay.value.indexOf(divisionByZero) !== -1){
    calcuDisplay.value = "Error";
    lastClicked = "null";
    setTimeout(function(){ calcuDisplay.value = ""; }, 1000);
  } else {
    calcuDisplay.value = eval(calcuDisplay.value);
  }
})

