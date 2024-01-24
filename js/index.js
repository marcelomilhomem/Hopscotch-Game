let startScreen = document.getElementById("start-screen");
let ruleScreen = document.getElementById("rules-screen");
let winScreen = document.getElementById("win-screen");
let lossScreen = document.getElementById("loss-screen");

let game;
let gameImgs = [
  "./docs/assets/imgs/lee-jung-jae.png",
  "./docs/assets/imgs/My project (1).png",
  "./docs/assets/imgs/minecraft-full-heart.png",
];

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startScreen.style.display = "none";
    ruleScreen.style.display = "none";
    startGame();
  };

  document.getElementById("rules-button").onclick = () => {
    ruleScreen.style.display = "flex";
    console.log("hello");
  };

  document.getElementById("loss-button").onclick = () => {
    lossScreen.style.display = "none";
    startGame();
  };

  document.getElementById("win-button").onclick = () => {
    winScreen.style.display = "none";
    startGame();
  };
};

function startGame() {
  game = new Game(gameImgs);
  game.start();
}
