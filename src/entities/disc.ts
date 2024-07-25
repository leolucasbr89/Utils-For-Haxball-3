import { Position, RoomObject } from "../types/types.js";
import { FatherClass } from "./father.js";


export class Disc extends FatherClass {
    position: Position
    InvMass: number|undefined
    constructor(publicRoom: RoomObject,readonly id: number, position: Position) {
        super(publicRoom)
        this.position = position
        this.InvMass = this.publicRoom.getDiscProperties(id).invMass
        
    }
    //this metod is util for real soccer
    async ChangeBallPosition(x: number,  y: number) {
        await this.publicRoom.setDiscProperties(this.id, {x: x, y:y,  xspeed: 0, yspeed: 0, ygravity: 0, xgravity: 0})
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
    async ChangeGravity(newygravity: number, newxgravity: number) {
        await this.publicRoom.setDiscProperties(this.id, {ygravity: newygravity, xgravity: newxgravity})
    }
    async ChanceCMask(cmask: number) {
        await this.publicRoom.setDiscProperties(this.id, {cMask: cmask})
    }
    async ChangeRadius(radius: number) {
        await this.publicRoom.setDiscProperties(this.id, {radius: radius})
    }
}