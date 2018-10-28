class App {
    game: Game;


    constructor(game: Game) {
        this.game = game;
    }

    public setup(): void{

        //All things needed to setup before the game runs goes above this line
        this.gameLoop();
    }

    private gameLoop(): void {

        requestAnimationFrame(this.gameLoop.bind(this));
        this.game.render();
    }
}

window.onload = () => {
    console.log("Started");
    let app = new App(new Game());

    console.log("Setup");
    app.setup();
}