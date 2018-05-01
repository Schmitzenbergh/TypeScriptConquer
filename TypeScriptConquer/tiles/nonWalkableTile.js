var nonWalkableTile = (function () {
    function nonWalkableTile() {
        this.width = 64;
        this.height = 64;
        this.color = "red";
        this.src = "gfx/Rock.png";
        this.blocked = false;
    }
    nonWalkableTile.prototype.onEnter = function () {
    };
    nonWalkableTile.prototype.onLeave = function () {
    };
    return nonWalkableTile;
}());
