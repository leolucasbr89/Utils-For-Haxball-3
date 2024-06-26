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
    static timeAtPosition(s0, v0, a, s) {
        const A = 0.5 * a;
        const B = v0;
        const C = s0 - s;
        const discriminant = B * B - 4 * A * C;
        if (discriminant < 0) {
            return null;
        }
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const t1 = (-B + sqrtDiscriminant) / (2 * A);
        const t2 = (-B - sqrtDiscriminant) / (2 * A);
        const time = Math.max(t1, t2);
        return time;
    }
}
exports.MathEntity = MathEntity;
//# sourceMappingURL=math.entity.js.map