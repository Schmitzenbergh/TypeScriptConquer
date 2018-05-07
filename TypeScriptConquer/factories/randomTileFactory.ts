class RandomTileFactory {
    /*
     * Generates a random tilemap according to the given width and hight
     */
    static generateRandomTileMap(height: number, width: number) {
        var returnMap = new Array(height);

        for (var x = 0; x < height; x++) {
            returnMap[x] = new Array(width);
            for (var y = 0; y < width; y++) {
                switch (Math.floor(Math.random() * 2) + 1  ) {
                    case 1:
                        returnMap[x][y] = new walkableTile();
                        break;
                    case 2:
                        returnMap[x][y] = new NonWalkableTile();
                        break;
                }
            }
        }
        return returnMap;
    }
}