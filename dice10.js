var d10 = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}

function printNumber(number) {
    var placeholder = document.getElementById('output');
    placeholder.innerHTML = number;
}
  
var button = document.getElementById('d10');
  
  button.onclick = function() {
    var result = d10.roll();
    printNumber(result);
};
