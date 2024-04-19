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
export declare enum WritingStyles {
    normal = "normal",
    bold = "bold",
    italic = "italic",
    small = "small",
    smallBold = "small-bold",
    smallItalic = "small-italic"
}
