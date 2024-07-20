export declare const hexadecimalColors: {
    red: number;
    yellow: number;
    green: number;
    blue: number;
    purple: number;
    orange: number;
    pink: number;
    cyan: number;
    brown: number;
    lightblue: number;
    lightgreen: number;
    gray: number;
    violet: number;
    gold: number;
    silver: number;
    turquoise: number;
    olive: number;
    coral: number;
    salmon: number;
    royalblue: number;
    redHax: number;
    blueHax: number;
    maroon: number;
};
export declare const maps: {
    x3futsal: {
        name: string;
        width: number;
        height: number;
        spawnDistance: number;
        bg: {
            type: string;
            width: number;
            height: number;
            kickOffRadius: number;
            cornerRadius: number;
        };
        vertexes: ({
            x: number;
            y: number;
            trait: string;
            bCoef?: undefined;
            color?: undefined;
            vis?: undefined;
            curve?: undefined;
            cMask?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            color: string;
            vis: boolean;
            curve: number;
            cMask?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            trait: string;
            curve: number;
            color: string;
            pos: number[];
            bCoef?: undefined;
            vis?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            color: string;
            pos: number[];
            vis?: undefined;
            curve?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            color: string;
            vis?: undefined;
            curve?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            color?: undefined;
            vis?: undefined;
            curve?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            pos: number[];
            color?: undefined;
            vis?: undefined;
            curve?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            curve: number;
            color?: undefined;
            vis?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            trait: string;
            color?: undefined;
            vis?: undefined;
            curve?: undefined;
            pos?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            vis: boolean;
            color: string;
            curve?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            color: string;
            vis: boolean;
            curve: number;
            bCoef?: undefined;
            cMask?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            curve: number;
            vis: boolean;
            pos: number[];
            color?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            curve: number;
            vis: boolean;
            color?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            color?: undefined;
            vis?: undefined;
            curve?: undefined;
            cMask?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            color: string;
            curve: number;
            vis?: undefined;
            cMask?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            curve: number;
            color?: undefined;
            vis?: undefined;
            cMask?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        })[];
        segments: ({
            v0: number;
            v1: number;
            curve: number;
            color: string;
            cMask: string[];
            trait: string;
            pos: number[];
            y: number;
            x?: undefined;
            vis?: undefined;
            bCoef?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            cMask: string[];
            trait: string;
            x: number;
            curve?: undefined;
            pos?: undefined;
            y?: undefined;
            vis?: undefined;
            bCoef?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            trait: string;
            curve?: undefined;
            color?: undefined;
            cMask?: undefined;
            pos?: undefined;
            y?: undefined;
            x?: undefined;
            vis?: undefined;
            bCoef?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cGroup: string[];
            trait: string;
            cMask?: undefined;
            pos?: undefined;
            y?: undefined;
            x?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x: number;
            curve?: undefined;
            pos?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            y: number;
            curve?: undefined;
            pos?: undefined;
            x?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x: number;
            y: number;
            curve?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            y: number;
            pos?: undefined;
            x?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            trait: string;
            curve?: undefined;
            pos?: undefined;
            y?: undefined;
            x?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x: number;
            pos?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            x: number;
            cMask?: undefined;
            pos?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            cMask?: undefined;
            pos?: undefined;
            y?: undefined;
            x?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            x: number;
            y: number;
            cMask?: undefined;
            pos?: undefined;
            cGroup?: undefined;
        })[];
        goals: {
            p0: number[];
            p1: number[];
            team: string;
        }[];
        discs: ({
            radius: number;
            pos: number[];
            color: string;
            trait: string;
            y: number;
            x?: undefined;
            invMass?: undefined;
            bCoef?: undefined;
        } | {
            radius: number;
            pos: number[];
            color: string;
            trait: string;
            y: number;
            x: number;
            invMass?: undefined;
            bCoef?: undefined;
        } | {
            radius: number;
            invMass: number;
            pos: number[];
            color: string;
            bCoef: number;
            trait: string;
            y?: undefined;
            x?: undefined;
        })[];
        planes: ({
            normal: number[];
            dist: number;
            bCoef: number;
            trait: string;
            vis: boolean;
            curve: number;
        } | {
            normal: number[];
            dist: number;
            bCoef: number;
            trait: string;
            vis?: undefined;
            curve?: undefined;
        } | {
            normal: number[];
            dist: number;
            bCoef: number;
            trait?: undefined;
            vis?: undefined;
            curve?: undefined;
        })[];
        traits: {
            ballArea: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            goalPost: {
                radius: number;
                invMass: number;
                bCoef: number;
            };
            goalNet: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            line: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            kickOffBarrier: {
                vis: boolean;
                bCoef: number;
                cGroup: string[];
                cMask: string[];
            };
        };
        playerPhysics: {
            bCoef: number;
            acceleration: number;
            kickingAcceleration: number;
            kickStrength: number;
        };
        ballPhysics: {
            radius: number;
            bCoef: number;
            invMass: number;
            damping: number;
            color: string;
        };
    };
    x4futsal: {
        name: string;
        width: number;
        height: number;
        bg: {
            type: string;
            width: number;
            height: number;
            kickOffRadius: number;
        };
        vertexes: ({
            x: number;
            y: number;
            cMask: string[];
            bCoef?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            cGroup?: undefined;
        })[];
        segments: ({
            v0: number;
            v1: number;
            bCoef: number;
            cMask: string[];
            color: string;
            vis?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            curveF?: undefined;
        } | {
            v0: number;
            v1: number;
            bCoef: number;
            vis: boolean;
            cMask: string[];
            cGroup: string[];
            color?: undefined;
            curve?: undefined;
            curveF?: undefined;
        } | {
            v0: number;
            v1: number;
            bCoef: number;
            curve: number;
            curveF: number;
            cMask: string[];
            cGroup: string[];
            color: string;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            color: string;
            vis?: undefined;
            curve?: undefined;
            curveF?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            cMask: string[];
            color: string;
            bCoef?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            curveF?: undefined;
        })[];
        planes: ({
            normal: number[];
            dist: number;
            cMask: string[];
            bCoef?: undefined;
        } | {
            normal: number[];
            dist: number;
            bCoef: number;
            cMask?: undefined;
        })[];
        goals: {
            p0: number[];
            p1: number[];
            team: string;
        }[];
        discs: ({
            radius: number;
            bCoef: number;
            invMass: number;
            color: string;
            cGroup: string[];
            pos?: undefined;
        } | {
            pos: number[];
            radius: number;
            invMass: number;
            color: string;
            bCoef?: undefined;
            cGroup?: undefined;
        })[];
        playerPhysics: {
            bCoef: number;
            acceleration: number;
            kickingAcceleration: number;
        };
        ballPhysics: string;
        spawnDistance: number;
    };
    x7futsal: {
        name: string;
        width: number;
        height: number;
        spawnDistance: number;
        bg: {
            type: string;
            width: number;
            height: number;
            kickOffRadius: number;
            cornerRadius: number;
        };
        vertexes: ({
            x: number;
            y: number;
            trait: string;
            color?: undefined;
            vis?: undefined;
            curve?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            color: string;
            vis: boolean;
            curve: number;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            curve: number;
            color: string;
            vis?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            color: string;
            vis?: undefined;
            curve?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            color?: undefined;
            vis?: undefined;
            curve?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            curve: number;
            color?: undefined;
            vis?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            trait: string;
            color?: undefined;
            vis?: undefined;
            curve?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            vis: boolean;
            color: string;
            curve?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            curve: number;
            vis: boolean;
            color?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            color: string;
            curve: number;
            vis?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            color: string;
            vis: boolean;
            curve?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            vis: boolean;
            color?: undefined;
            curve?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            trait: string;
            color: string;
            curve: number;
            vis?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            color?: undefined;
            vis?: undefined;
            curve?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            curve: number;
            color?: undefined;
            vis?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            trait: string;
            vis: boolean;
            color?: undefined;
            curve?: undefined;
        })[];
        segments: ({
            v0: number;
            v1: number;
            curve: number;
            color: string;
            trait: string;
            vis?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            trait: string;
            curve?: undefined;
            vis?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            trait: string;
            curve?: undefined;
            color?: undefined;
            vis?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            curve?: undefined;
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x: number;
            curve?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            y: number;
            x?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            trait: string;
            curve?: undefined;
            x?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x: number;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            trait: string;
            curve?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            cGroup: string[];
            trait: string;
            bCoef?: undefined;
            cMask?: undefined;
            x?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            trait: string;
            x?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            trait: string;
            x: number;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            bCoef: number;
            cMask: string[];
            cGroup: string[];
            trait: string;
            x: number;
            curve?: undefined;
            color?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            x: number;
            cMask?: undefined;
            y?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            x: number;
            y: number;
            cMask?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            cMask?: undefined;
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
        })[];
        goals: {
            p0: number[];
            p1: number[];
            team: string;
        }[];
        discs: ({
            radius: number;
            pos: number[];
            color: string;
            trait: string;
            invMass?: undefined;
            bCoef?: undefined;
        } | {
            radius: number;
            invMass: number;
            pos: number[];
            color: string;
            bCoef: number;
            trait: string;
        })[];
        planes: ({
            normal: number[];
            dist: number;
            trait: string;
            vis: boolean;
            curve: number;
            bCoef?: undefined;
        } | {
            normal: number[];
            dist: number;
            trait: string;
            vis?: undefined;
            curve?: undefined;
            bCoef?: undefined;
        } | {
            normal: number[];
            dist: number;
            bCoef: number;
            trait?: undefined;
            vis?: undefined;
            curve?: undefined;
        })[];
        traits: {
            ballArea: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            goalPost: {
                radius: number;
                invMass: number;
                bCoef: number;
            };
            goalNet: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            line: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            kickOffBarrier: {
                vis: boolean;
                bCoef: number;
                cGroup: string[];
                cMask: string[];
            };
        };
        playerPhysics: {
            bCoef: number;
            acceleration: number;
            kickingAcceleration: number;
            kickStrength: number;
        };
        ballPhysics: {
            radius: number;
            bCoef: number;
            invMass: number;
            damping: number;
            color: string;
        };
    };
    x1andx2futsal: {
        name: string;
        width: number;
        height: number;
        spawnDistance: number;
        bg: {
            type: string;
            width: number;
            height: number;
            kickOffRadius: number;
            cornerRadius: number;
        };
        vertexes: ({
            x: number;
            y: number;
            trait: string;
            cMask: string[];
            bCoef: number;
            curve?: undefined;
            color?: undefined;
            pos?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            cMask?: undefined;
            bCoef?: undefined;
            curve?: undefined;
            color?: undefined;
            pos?: undefined;
        } | {
            bCoef: number;
            trait: string;
            x: number;
            y: number;
            cMask?: undefined;
            curve?: undefined;
            color?: undefined;
            pos?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            trait: string;
            curve: number;
            color: string;
            pos: number[];
            bCoef?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            color: string;
            curve: number;
            cMask?: undefined;
            pos?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            curve: number;
            cMask?: undefined;
            color?: undefined;
            pos?: undefined;
        })[];
        segments: ({
            v0: number;
            v1: number;
            trait: string;
            curve?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            color?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            x?: undefined;
            y?: undefined;
            pos?: undefined;
        } | {
            v0: number;
            v1: number;
            trait: string;
            curve: number;
            cGroup: string[];
            vis?: undefined;
            color?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            x?: undefined;
            y?: undefined;
            pos?: undefined;
        } | {
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            v0: number;
            v1: number;
            cMask: string[];
            x: number;
            curve?: undefined;
            cGroup?: undefined;
            y?: undefined;
            pos?: undefined;
        } | {
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            v0: number;
            v1: number;
            y: number;
            curve?: undefined;
            cGroup?: undefined;
            cMask?: undefined;
            x?: undefined;
            pos?: undefined;
        } | {
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            v0: number;
            v1: number;
            cGroup?: undefined;
            cMask?: undefined;
            x?: undefined;
            y?: undefined;
            pos?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            cMask: string[];
            trait: string;
            pos: number[];
            y: number;
            cGroup?: undefined;
            vis?: undefined;
            bCoef?: undefined;
            x?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            cMask: string[];
            trait: string;
            x: number;
            curve?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            bCoef?: undefined;
            y?: undefined;
            pos?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            x: number;
            cGroup?: undefined;
            cMask?: undefined;
            y?: undefined;
            pos?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            x: number;
            y: number;
            cGroup?: undefined;
            cMask?: undefined;
            pos?: undefined;
        })[];
        goals: {
            p0: number[];
            p1: number[];
            team: string;
        }[];
        discs: ({
            radius: number;
            pos: number[];
            color: string;
            trait: string;
            y: number;
            x?: undefined;
            invMass?: undefined;
            bCoef?: undefined;
        } | {
            radius: number;
            pos: number[];
            color: string;
            trait: string;
            y: number;
            x: number;
            invMass?: undefined;
            bCoef?: undefined;
        } | {
            radius: number;
            invMass: number;
            pos: number[];
            color: string;
            bCoef: number;
            trait: string;
            y?: undefined;
            x?: undefined;
        })[];
        planes: ({
            normal: number[];
            dist: number;
            trait: string;
            bCoef?: undefined;
            cMask?: undefined;
        } | {
            normal: number[];
            dist: number;
            bCoef: number;
            cMask: string[];
            trait?: undefined;
        })[];
        traits: {
            ballArea: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            goalPost: {
                radius: number;
                invMass: number;
                bCoef: number;
            };
            goalNet: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            kickOffBarrier: {
                vis: boolean;
                bCoef: number;
                cGroup: string[];
                cMask: string[];
            };
            line: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            arco: {
                radius: number;
                cMask: string[];
                color: string;
            };
        };
        playerPhysics: {
            acceleration: number;
            kickingAcceleration: number;
            kickStrength: number;
            bCoef: number;
        };
        ballPhysics: {
            radius: number;
            color: string;
            bCoef: number;
            invMass: number;
            damping: number;
        };
    };
    x5futsal: {
        name: string;
        width: number;
        height: number;
        spawnDistance: number;
        bg: {
            type: string;
            width: number;
            height: number;
            kickOffRadius: number;
            cornerRadius: number;
        };
        vertexes: ({
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            curve: number;
            color?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            curve: number;
            color: string;
        } | {
            x: number;
            y: number;
            trait: string;
            bCoef?: undefined;
            cMask?: undefined;
            curve?: undefined;
            color?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            cMask?: undefined;
            curve?: undefined;
            color?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            trait: string;
            curve: number;
            cMask?: undefined;
            color?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            curve: number;
            bCoef?: undefined;
            cMask?: undefined;
            color?: undefined;
        })[];
        segments: ({
            v0: number;
            v1: number;
            curve: number;
            trait: string;
            x?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            color?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            trait: string;
            curve?: undefined;
            x?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            color?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            trait: string;
            x: number;
            curve?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            color?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            cGroup: string[];
            trait: string;
            x?: undefined;
            vis?: undefined;
            color?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            y: number;
            x?: undefined;
            cGroup?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x: number;
            cGroup?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            y: number;
            curve?: undefined;
            x?: undefined;
            cGroup?: undefined;
            cMask?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            x?: undefined;
            cGroup?: undefined;
            cMask?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            x: number;
            cGroup?: undefined;
            cMask?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x?: undefined;
            cGroup?: undefined;
            y?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            vis: boolean;
            color: string;
            bCoef: number;
            trait: string;
            x: number;
            y: number;
            cGroup?: undefined;
            cMask?: undefined;
        })[];
        goals: {
            p0: number[];
            p1: number[];
            team: string;
        }[];
        discs: ({
            radius: number;
            pos: number[];
            color: string;
            trait: string;
            invMass?: undefined;
            bCoef?: undefined;
        } | {
            radius: number;
            invMass: number;
            pos: number[];
            color: string;
            bCoef: number;
            trait: string;
        })[];
        planes: ({
            normal: number[];
            dist: number;
            trait: string;
            bCoef?: undefined;
            cMask?: undefined;
        } | {
            normal: number[];
            dist: number;
            bCoef: number;
            cMask: string[];
            trait?: undefined;
        })[];
        traits: {
            ballArea: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            goalPost: {
                radius: number;
                invMass: number;
                bCoef: number;
            };
            goalNet: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            kickOffBarrier: {
                vis: boolean;
                bCoef: number;
                cGroup: string[];
                cMask: string[];
            };
            line: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
            };
            arco: {
                radius: number;
                cMask: string[];
                color: string;
            };
        };
        playerPhysics: {
            bCoef: number;
            acceleration: number;
            kickingAcceleration: number;
            kickStrength: number;
        };
        ballPhysics: {
            radius: number;
            bCoef: number;
            invMass: number;
            damping: number;
            color: string;
        };
    };
};
export declare const messages: {
    en: {
        goldenGoalMessages: string[];
        ownGoalMessages: string[];
        goalMessages: string[];
    };
    es: {
        mensajesGolDorado: string[];
        mensajesAutogol: string[];
        mensajesGol: string[];
    };
    pt: {
        mensagensGolDourado: string[];
        mensagensAutogol: string[];
        mensagensGol: string[];
    };
};
export declare enum WritingStyles {
    normal = "normal",
    bold = "bold",
    italic = "italic",
    small = "small",
    smallBold = "small-bold",
    smallItalic = "small-italic"
}
export declare const shirts: {
    BrazilianShirts: import("..").Team[];
    SpanishShirts: import("..").Team[];
    CountriesShirts: import("..").Team[];
    Teams: import("..").Team[];
    AllUniforms: import("..").Team[];
};
export declare const ProhibitedWordsInPortuguese: string[];
