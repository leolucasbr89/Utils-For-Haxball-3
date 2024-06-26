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
    static horizontalPosition(x0, v0, theta, t) {
        const v0x = v0 * Math.cos(theta);
        return x0 + v0x * t;
    }
    static verticalPosition(y0, v0, theta, t, g = 9.8) {
        const v0y = v0 * Math.sin(theta);
        return y0 + v0y * t - 0.5 * g * t * t;
    }
}
exports.MathEntity = MathEntity;
//# sourceMappingURL=math.entity.js.map