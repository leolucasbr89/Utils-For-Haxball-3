import { Position, RoomObject } from "../types/types.js";
import { FatherClass } from "./father.js";


export class Disc extends FatherClass {
    position: Position
    constructor(publicRoom: RoomObject,readonly id: number, position: Position) {
        super(publicRoom)
        this.position = position
        
    }
    //this metod is util for real soccer
    async ChangeBallPosition(x: number, cmask?: number, y?: number) {
        this.position.x = x
        if (y) {
            this.position.y = y
        }
        await this.publicRoom.setDiscProperties(this.id, {x: x, y:y, cMask: cmask})
    }
    async ChangeBallForce(newInvMass: number) {
        await this.publicRoom.setDiscProperties(this.id, {invMass: newInvMass})
    }
    async ChangeBallColor(color: number) {
        await this.publicRoom.setDiscProperties(this.id, {color: color})
    }
    async UpdatePosition(position: Position) {
        this.position = position
    }
}