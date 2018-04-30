var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var renderer: tileRenderer;

var keys: Array<boolean> = [];

//Random tileMap creation
var tileMap = randomTileFactory.generateRandomTileMap(50, 50);

//Camera stuff, needs to become an object
var cameraX = 0;
var cameraY = 0;
var cameraW = 500;
var cameraH = 500;

//Startup
window.onload = () => {
    canvas = <HTMLCanvasElement> document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    renderer = new tileRenderer(ctx);
    mainLoop();
};

//Main animationloop
function mainLoop(){
    requestAnimationFrame(mainLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);

    //Need to capture keys somewhere else, but this works for now
    if (keys[40]) {
        cameraY += 5;
    }
    if (keys[39]) {
        cameraX += 5;
    }
    if (keys[38]) {
        cameraY -= 5;
    }
    if (keys[37]) {
        cameraX -= 5;
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

