/*
 * A Simple non-walkable tile (WIP)
 */ 
class nonWalkableTile implements iTile {
    width: number = 64;
    height: number = 64;
    color: string = "red";
    src: string = "gfx/Rock.png";
    blocked: boolean = false;

    constructor() {

    }

    onEnter() {

    }

    onLeave() {

    }
}