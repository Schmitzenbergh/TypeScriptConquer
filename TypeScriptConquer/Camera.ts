class Camera {
    private _cameraX: number = 0;
    private _cameraY: number = 0;
    private _cameraW: number = 1280;  //Viewport Width
    private _cameraH: number = 720;   //Viewport Height
    private _cameraSpeed: number = 5;

    constructor(cameraX: number, cameraY: number, cameraW: number, cameraH: number) {
        this._cameraH = cameraH;
        this._cameraW = cameraW;
        this._cameraX = cameraX;
        this._cameraY = cameraY;
    }

    get cameraX(): number {
        return this._cameraX;
    }

    //set cameraX(x: number) {
    //    this._cameraX = x;
    //}

    get cameraY(): number {
        return this._cameraY;
    }

    //set cameraY(y: number) {
    //    this._cameraY = y;
    //}

    get cameraW(): number {
        return this._cameraW;
    }

    get cameraH(): number {
        return this._cameraH;
    }
    
    set cameraSpeed(speed: number) {
        if (speed > 0) {
            this._cameraSpeed = speed;
        }
    }

    moveCameraUp() {
        if ((this._cameraY - this._cameraSpeed) >= 0)
            this._cameraY = this._cameraY - this._cameraSpeed;
    }

    moveCameraDown() {
        this._cameraY = this._cameraY + this._cameraSpeed;
    }

    moveCameraLeft() {
        if ((this._cameraX - this._cameraSpeed) >= 0)
            this._cameraX = this._cameraX - this._cameraSpeed;
    }

    moveCameraRight() {
        this._cameraX = this._cameraX + this._cameraSpeed;
    }
}