/*
 * A Simple walkable tile with graphics (WIP)
 */
class walkableTile implements iTile {
    width: number = 64;
    height: number = 64;
    color: string = "green";
    src: string = "gfx/Grass.png";
    blocked: boolean = false;

    constructor() {
    }

    onEnter() {

    }

    onLeave() {

    }
}