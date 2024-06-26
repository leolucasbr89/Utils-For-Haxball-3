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
        return Math.round((differenceSpace / differenceTime) / 10)
    }
    static calculateProportion(knownValue: number, knownValueEquivalent: number, unknownValueEquivalent: number) {
        let unknownValue = (knownValue * unknownValueEquivalent) / knownValueEquivalent;
        return unknownValue
    }
    static horizontalPosition(x0: number, v0: number, theta: number, t: number): number {
        const v0x = v0 * Math.cos(theta);
        return x0 + v0x * t;
    }

    static verticalPosition(y0: number, v0: number, theta: number, t: number, g: number = 9.8): number {
        const v0y = v0 * Math.sin(theta);
        return y0 + v0y * t - 0.5 * g * t * t;
    }
    
}