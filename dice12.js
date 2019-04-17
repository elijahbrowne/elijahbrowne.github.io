var d12 = {
    sides: 12,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}

function printNumber(number) {
    var placeholder = document.getElementById('output');
    placeholder.innerHTML = number;
}
  
var button = document.getElementById('d12');
  
  button.onclick = function() {
    var result = d12.roll();
    printNumber(result);
};
