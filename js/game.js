class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 700;
    this.player = null;
    this.control = null;
    this.intervalId = null;
    this.paths = null;
  }

  start() {
    this.player = new OhIlNam(this);
    this.control = new Controls(this);
    this.paths = new Paths(this);
    this.paths.arrayPath();
    this.paths.random();
    this.control.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw();
    //this.player.x this.player.y;
    //getCurrentPlayerPos
    //perguntar ao path se meu player pisou no vidro e retornar se pisou no vidro que parte
    //
  }

  drawGameBoard() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw();
    this.paths.draw();
    /*     this.drawScores(); */
  }

  drawScores() {
    /*     let score = Math.floor(this.frames / 60);
    this.ctx.font = "32px serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Score: ${score}`, 100, 30); */
  }
}
