/*
 * Tilerenderer class for everything related to tile rendering(WIP)
 * TODO: Create Renderer interface
 */ 
class TileRenderer {
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
        for (var x = Math.floor(cam.cameraX / 64); x < tileArray.length; x++) {
            for (var y = Math.floor(cam.cameraY / 64); y < tileArray[x].length; y++) {
                var currTile = tileArray[x][y];
                if (x * currTile.height < cam.cameraX + cam.cameraW && y * currTile.width < cam.cameraY + cam.cameraH) {
                    if (currTile.src != "") {
                    //Do not render tiles outside the canvas/camera
                    
                        var img = new Image();
                        img.src = currTile.src;
                        ctx.drawImage(img, (x * currTile.width) - cam.cameraX, (y * currTile.height) - cam.cameraY, currTile.width, currTile.height);
                        //Dont render images outside camera
                        //Check the camerawith
                    } else {
                        ctx.beginPath();
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = currTile.color;
                        ctx.rect((x * currTile.width) - cam.cameraX, (y * currTile.height) - cam.cameraY, currTile.width, currTile.height);
                        ctx.stroke();
                    }
                }

            }
                
        }
    }
}