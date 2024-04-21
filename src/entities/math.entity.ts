import { Position } from "../types/types";

export class MathEntity {
    static generateIntegerBetweenMinAndMax(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static pointDistance(p1: Position, p2: Position): number {
        let d1 = p1.x - p2.x
        let d2 = p1.y - p2.y
        return Math.sqrt(d1 * d1 + d2 * d2)
    }
    static averageSpeed(firstMoment: number, lastMoment: number, firstPosition: Position, lastPosition: Position,
        differenceTime = lastMoment - firstMoment
    ) {
        const differenceSpace: number = this.pointDistance(firstPosition, lastPosition)
        return (differenceSpace / differenceTime) / 10
    }
}