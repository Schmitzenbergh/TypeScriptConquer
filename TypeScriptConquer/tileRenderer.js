var tileRenderer = /** @class */ (function () {
    function tileRenderer(ctx) {
        this.ctx = ctx;
    }
    tileRenderer.prototype.renderTiles = function (tileArray) {
        for (var x = 0; x < tileArray.length; x++) {
            for (var y = 0; y < tileArray[x].length; y++) {
                var currTile = tileArray[x][y];
                if (currTile.src != "") {
                    if (x * currTile.width > cameraX - cameraW) {
                        var img = new Image();
                        img.src = currTile.src;
                        ctx.drawImage(img, (x * currTile.width) - cameraX, (y * currTile.height) - cameraY, currTile.width, currTile.height);
                        //Dont render images outside camera
                    }
                }
                else {
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = currTile.color;
                    ctx.rect((x * currTile.width) - cameraX, (y * currTile.height) - cameraY, currTile.width, currTile.height);
                    ctx.stroke();
                }
            }
        }
    };
    return tileRenderer;
}());
//# sourceMappingURL=tileRenderer.js.map