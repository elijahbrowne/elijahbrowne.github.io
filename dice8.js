var d8 = {
    sides: 8,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}

function printNumber(number) {
    var placeholder = document.getElementById('output');
    placeholder.innerHTML = number;
}
  
var button = document.getElementById('d8');
  
  button.onclick = function() {
    var result = d8.roll();
    printNumber(result);
};
