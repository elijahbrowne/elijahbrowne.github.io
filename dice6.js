var d6 = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}

function printNumber(number) {
    var placeholder = document.getElementById('output');
    placeholder.innerHTML = number;
}
  
var button = document.getElementById('d6');
  
  button.onclick = function() {
    var result = d6.roll();
    printNumber(result);
};
