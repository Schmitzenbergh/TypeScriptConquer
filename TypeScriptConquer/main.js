var canvas;
var ctx;
var renderer;
var keys = [];
var tileArray = randomTileFactory.test(50, 50);
var cameraX = 0;
var cameraY = 0;
var cameraW = 500;
var cameraH = 500;
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    renderer = new tileRenderer(ctx);
    mainLoop();
};
function mainLoop() {
    requestAnimationFrame(mainLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
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
    renderer.renderTiles(tileArray);
}
//--------Start of keyrecording
//Record keydown codes
document.onkeydown = function (event) {
    keys[event.keyCode] = true;
};
//Record keyup codes
document.onkeyup = function (event) {
    keys[event.keyCode] = false;
};
//--------End of keyrecording
//# sourceMappingURL=main.js.map