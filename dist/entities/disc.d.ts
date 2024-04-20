/// <reference types="haxball-headless-browser" />
import { Position } from "../types/types.js";
import { FatherClass } from "./father.js";
export declare class Disc extends FatherClass {
    readonly id: number;
    readonly position: Position;
    constructor(publicRoom: RoomObject, id: number, position: Position);
    ChangeBallPosition(x: number, cmask?: number, y?: number): Promise<void>;
    ChangeBallForce(newInvMass: number): Promise<void>;
    ChangeBallColor(color: number): Promise<void>;
}
