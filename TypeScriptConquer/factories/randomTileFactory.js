var randomTileFactory = /** @class */ (function () {
    function randomTileFactory() {
    }
    randomTileFactory.test = function (height, width) {
        var returnMap = new Array(height);
        for (var x = 0; x < height; x++) {
            returnMap[x] = new Array(width);
            for (var y = 0; y < width; y++) {
                switch (Math.floor(Math.random() * 2) + 1) {
                    case 1:
                        returnMap[x][y] = new walkableTile();
                        break;
                    case 2:
                        returnMap[x][y] = new nonWalkableTile();
                        break;
                }
            }
        }
        return returnMap;
    };
    return randomTileFactory;
}());
//# sourceMappingURL=randomTileFactory.js.map