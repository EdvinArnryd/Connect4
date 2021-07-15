
$(document).ready(function () {
  const connect4 = new Connect4('#connect4')

  var p1 = sessionStorage.getItem("p1");
  var p2 = sessionStorage.getItem("p2");

  connect4.onPlayerMove = function () {
    if (connect4.player === 'player1') {
      $('#player').text(p1);
    } else {
      $('#player').text(p2)
    }
  }

  document.getElementById("firstPlayer").innerHTML = p1;
});