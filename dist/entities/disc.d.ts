import { Position, RoomObject } from "../types/types.js";
import { FatherClass } from "./father.js";
export declare class Disc extends FatherClass {
    readonly id: number;
    position: Position;
    InvMass: number | undefined;
    constructor(publicRoom: RoomObject, id: number, position: Position);
    ChangeBallPosition(x: number, cmask?: number, y?: number): Promise<void>;
    ChangeBallForce(newInvMass: number): Promise<void>;
    ChangeBallColor(color: number): Promise<void>;
    UpdatePosition(position: Position): Promise<void>;
    ChangeGravity(newygravity: number, newxgravity: number): Promise<void>;
}
