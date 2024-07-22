import { Position } from "../types/types";
export declare class MathEntity {
    static generateIntegerBetweenMinAndMax(min: number, max: number): number;
    static pointDistance(p1: Position, p2: Position): number;
    static averageSpeed(firstMoment: number, lastMoment: number, firstPosition: Position, lastPosition: Position, differenceTime?: number): number;
    static calculateProportion(knownValue: number, knownValueEquivalent: number, unknownValueEquivalent: number): number;
    static calculateAngle(x1: number, y1: number, x2: number, y2: number): number;
}
