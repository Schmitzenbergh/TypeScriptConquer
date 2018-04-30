/*
 * Tilerenderer class for everything related to tile rendering(WIP)
 * TODO: Create Renderer interface
 */ 
class tileRenderer {
    tileArr: Array<iTile>;
    ctx: CanvasRenderingContext2D;

    //Create renderer by passing ctx
    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    /*
     * Render all tiles from a given 2D array of iTile objects
     * Will render bitmap based tiles when src is specified of a tile.
     */ 
    renderTiles(tileArray: Array<Array<iTile>>) {
        for (var x = 0; x < tileArray.length; x++) {
            for (var y = 0; y < tileArray[x].length; y++) {
                var currTile = tileArray[x][y];
                if (currTile.src != "") {
                   
                        var img = new Image();
                        img.src = currTile.src;
                        ctx.drawImage(img, (x * currTile.width) - cameraX, (y * currTile.height) - cameraY, currTile.width, currTile.height);
                        //Dont render images outside camera
                        //Check the camerawith
                } else {
                    ctx.beginPath();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = currTile.color;
                    ctx.rect((x * currTile.width) - cameraX, (y * currTile.height) - cameraY, currTile.width, currTile.height);
                    ctx.stroke();
                }
            }
                
        }
    }
}