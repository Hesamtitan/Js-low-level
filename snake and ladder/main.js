let activePlayer;
let playerPostion;
activePlayer = 0;
playerPostion = [0, 0];
for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  document.getElementById("board").appendChild(cell);
}
let board = document.getElementsByClassName("cell");
board[0].innerHTML = "&#10112";
board[0].innerHTML = "&#10113";

document.getElementById("roll").addEventListener("click", function () {
  let dice = Math.floor(Math.random() * 6 + 1);

  let diceView = document.getElementById("dice");

  diceView.style.display = "block";

  diceView.src = "dice-jpg/dice-" + dice + ".jpg";

  //   if (activePlayer == 0) {
  //     playerPostion[0] += dice;
  //   } else playerPostion[1] += dice;
  // })
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  board[playerPostion[activePlayer]].innerHTML = "";
  playerPostion[activePlayer] += dice;
  board[playerPostion[activePlayer]].innerHTML = "&#10112";

});
