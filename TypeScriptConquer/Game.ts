class Game {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private tileRenderer: TileRenderer;

    //Random tileMap creation
    private tileMap: Array<Array<iTile>> = RandomTileFactory.generateRandomTileMap(100, 100);

    //Camera 
    private cam: Camera = new Camera(0, 0, 1280, 720);
    

    //private keys: Array<boolean> = [];


    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('cnvs');
        this.canvas.width = this.cam.cameraW; //Set the Camera + canvas
        this.canvas.height = this.cam.cameraH; //Set the Camera + canvas
        this.ctx = this.canvas.getContext("2d");
        this.tileRenderer = new TileRenderer(this.ctx);

        this.cam.cameraSpeed = 20;
    }

    public render(): void {
        //Need to capture keys somewhere else, but this works for now
        if (keys[40]) {
            this.cam.moveCameraDown();
            console.log("Down");
        }
        if (keys[39]) {
            this.cam.moveCameraRight();
        }
        if (keys[38]) {
            this.cam.moveCameraUp();
        }
        if (keys[37]) {
            this.cam.moveCameraLeft();
        }

        this.tileRenderer.renderTiles(this.tileMap, this.cam.cameraX, this.cam.cameraY);
    }

    
}

var keys: Array<boolean> = [];

//--------Start of keyrecording
//Record keydown codes
document.onkeydown = (event) => {
    this.keys[event.keyCode] = true;
}

//Record keyup codes
document.onkeyup = (event) => {
    this.keys[event.keyCode] = false;
}
//--------End of keyrecording
