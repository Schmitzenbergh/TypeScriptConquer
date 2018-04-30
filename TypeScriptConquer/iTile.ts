/*
 * Main tile interface
 */
interface iTile {

    width: number;
    height: number;
    color: string;
    blocked: boolean;
    src: string;

    onEnter(): void;
    onLeave(): void;
}