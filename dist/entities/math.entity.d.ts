import { Position } from "../types/types";
export declare class MathEntity {
    static generateIntegerBetweenMinAndMax(min: number, max: number): number;
    static pointDistance(p1: Position, p2: Position): number;
    static averageSpeed(firstMoment: number, lastMoment: number, firstPosition: Position, lastPosition: Position, differenceTime?: number): number;
    static calculateProportion(knownValue: number, knownValueEquivalent: number, unknownValueEquivalent: number): number;
    static horizontalPosition(x0: number, v0: number, theta: number, t: number): number;
    static verticalPosition(y0: number, v0: number, theta: number, t: number, g?: number): number;
}
