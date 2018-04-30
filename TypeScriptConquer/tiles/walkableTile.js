var walkableTile = /** @class */ (function () {
    function walkableTile() {
        this.width = 64;
        this.height = 64;
        this.color = "green";
        this.src = "gfx/Grass.png";
        this.blocked = false;
    }
    walkableTile.prototype.onEnter = function () {
    };
    walkableTile.prototype.onLeave = function () {
    };
    return walkableTile;
}());
//# sourceMappingURL=walkableTile.js.map