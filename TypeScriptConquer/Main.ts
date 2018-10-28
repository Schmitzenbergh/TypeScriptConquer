/*var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var renderer: TileRenderer;

var keys: Array<boolean> = [];

//Random tileMap creation
var tileMap = RandomTileFactory.generateRandomTileMap(100, 100);

//Camera 
var cam: Camera = new Camera(0, 0, 1280, 720);
cam.cameraSpeed = 20;


//Startup
window.onload = () => {


    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    canvas.width = cam.cameraW; //Set the Camera + canvas
    canvas.height = cam.cameraH; //Set the Camera + canvas
    ctx = canvas.getContext("2d");
    renderer = new TileRenderer(ctx);
    mainLoop();
};

//Main animationloop
function mainLoop(){
    requestAnimationFrame(mainLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);

    //Need to capture keys somewhere else, but this works for now
    if (keys[40]) {
        cam.moveCameraDown();
    }
    if (keys[39]) {
        cam.moveCameraRight();
    }
    if (keys[38]) {
        cam.moveCameraUp();
    }
    if (keys[37]) {
        cam.moveCameraLeft();
    }
    renderer.renderTiles(tileMap);
}

//--------Start of keyrecording
//Record keydown codes
document.onkeydown = (event) => {
    keys[event.keyCode] = true;
}

//Record keyup codes
document.onkeyup = (event) => {
    keys[event.keyCode] = false;
}
//--------End of keyrecording
*/
