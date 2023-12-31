let activePlayer;
let playerPostion;
let snakeAndLadders;
let isPlaying = true;

for (let i = 0; i < 100; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  document.getElementById("board").appendChild(cell);
}
let board = document.getElementsByClassName("cell");

function resetGame() {
  activePlayer = 0;
  playerPostion = [0, 0];
  snakeAndLadders = new Array(100);
  isPlaying = true;

  for (let i = 0; i < 100; i++) {
    board[i].innerHTML = "";
    board[0].innerHTML = "&#x2659";
  }

  for (let i = 0; i < 20; i++) {
    let position = Math.floor(Math.random() * 100);

    let dest = Math.floor(Math.random() * 100);
    if (position != dest) {
      snakeAndLadders[position] = dest;
    }
  }
}

resetGame();

board[0].innerHTML = "&#x2659";

document.getElementById("roll").addEventListener("click", function () {
  if (isPlaying) {
    let dice = Math.floor(Math.random() * 6 + 1);

    let diceView = document.getElementById("dice");

    diceView.style.display = "block";

    diceView.src = "dice-jpg/dice-" + dice + ".jpg";

    board[playerPostion[activePlayer]].innerHTML = "";

    playerPostion[activePlayer] += dice;

    document.getElementById("message").innerText = "";

    if (snakeAndLadders[playerPostion[activePlayer]] != undefined) {
      document.getElementById("message").innerText = "";

      if (
        snakeAndLadders[playerPostion[activePlayer]] >
        playerPostion[activePlayer]
      ) {
        document.getElementById("message").innerText = "ladder";
      } else document.getElementById("message").innerText = "snake";

      playerPostion[activePlayer] =
        snakeAndLadders[playerPostion[activePlayer]];
    }

    if (playerPostion[activePlayer] >= 99) {
      document.getElementById("message").innerText = activePlayer + 1 + "win";
      isPlaying = false;
      return;
    }

    board[playerPostion[activePlayer]].innerHTML = "&#x2659";

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.getElementById("active-player").innerText =
      "Active Player =" + (activePlayer + 1);
  }
});
document.getElementById("reset").addEventListener("click", resetGame);
