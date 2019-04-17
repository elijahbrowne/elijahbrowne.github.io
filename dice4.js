var d4 = {
    sides: 4,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}

function printNumber(number) {
    var placeholder = document.getElementById('output');
    placeholder.innerHTML = number;
}
  
var button = document.getElementById('d4');
  
  button.onclick = function() {
    var result = d4.roll();
    printNumber(result);
};


  
  