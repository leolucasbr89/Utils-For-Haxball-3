"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathEntity = void 0;
class MathEntity {
    static generateIntegerBetweenMinAndMax(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static pointDistance(p1, p2) {
        let d1 = p1.x - p2.x;
        let d2 = p1.y - p2.y;
        return Math.sqrt(d1 * d1 + d2 * d2);
    }
    static averageSpeed(firstMoment, lastMoment, firstPosition, lastPosition, differenceTime = lastMoment - firstMoment) {
        const differenceSpace = this.pointDistance(firstPosition, lastPosition);
        return Math.round((differenceSpace / differenceTime) / 10);
    }
    static calculateProportion(knownValue, knownValueEquivalent, unknownValueEquivalent) {
        let unknownValue = (knownValue * unknownValueEquivalent) / knownValueEquivalent;
        return unknownValue;
    }
    static calculateFinalVelocity(u, a, s) {
        const vSquared = u * u + 2 * a * s;
        return Math.sqrt(vSquared);
    }
    static positionAtTime(s0, v0, a, t) {
        return s0 + v0 * t + 0.5 * a * t * t;
    }
}
exports.MathEntity = MathEntity;
//# sourceMappingURL=math.entity.js.map