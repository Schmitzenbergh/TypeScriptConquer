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
    renderTiles(tileArray: Array<Array<iTile>>, cameraX: number, cameraY: number) {
        for (let x = Math.floor(cameraX / 64); x < tileArray.length; x++) {
            for (let y = Math.floor(cameraY / 64); y < tileArray[x].length; y++) {
                let currTile = tileArray[x][y];
                if (x * currTile.height < cameraX + 1280 && y * currTile.width < cameraY + 720) {
                    if (currTile.src != "") {
                    //Do not render tiles outside the canvas/camera
                    
                        let img = new Image();
                        img.src = currTile.src;
                        this.ctx.drawImage(img, (x * currTile.width) - cameraX, (y * currTile.height) - cameraY, currTile.width, currTile.height);
                        //Dont render images outside camera
                        //Check the camerawith
                    } else {
                        this.ctx.beginPath();
                        this.ctx.lineWidth = 2;
                        this.ctx.strokeStyle = currTile.color;
                        this.ctx.rect((x * currTile.width) - cameraX, (y * currTile.height) - cameraY, currTile.width, currTile.height);
                        this.ctx.stroke();
                    }
                }

            }
                
        }
    }
}