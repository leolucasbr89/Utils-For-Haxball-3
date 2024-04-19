/// <reference types="haxball-headless-browser" />
import { FatherClass } from "./father.js";
export declare class Disc extends FatherClass {
    readonly id: number;
    constructor(publicRoom: RoomObject, id: number);
    ChangeBallPosition(x: number, cmask?: number, y?: number): Promise<void>;
    ChangeBallForce(newInvMass: number): Promise<void>;
    ChangeBallColor(color: number): Promise<void>;
}
