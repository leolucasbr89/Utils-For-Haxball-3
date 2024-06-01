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
        spawnDistance: number;
        bg: {
            type: string;
            height: number;
            width: number;
            color: string;
        };
        canBeStored: boolean;
        vertexes: ({
            x: number;
            y: number;
            trait: string;
            color: string;
            _data?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            color: string;
            _data: {
                mirror: {};
            };
            pos?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            pos: number[];
            color: string;
            _data?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            color: string;
            _data?: undefined;
            pos?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            pos: number[];
            color: string;
            _data?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            cGroup: string[];
            color: string;
            vis: boolean;
            trait?: undefined;
            _data?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            cGroup: string[];
            curve: number;
            color: string;
            _data: {
                mirror: {};
            };
            trait?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            vis?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            curve: number;
            color: string;
            _data?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            bias: number;
            color?: undefined;
            _data?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            bias: number;
            color: string;
            _data: {
                mirror: {};
            };
            pos?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            pos: number[];
            bias: number;
            color?: undefined;
            _data?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            bias: number;
            color?: undefined;
            _data?: undefined;
            pos?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            trait: string;
            vis: boolean;
            color: string;
            _data?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            trait: string;
            color: string;
            curve: number;
            _data?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            color: string;
            vis: boolean;
            curve: number;
            _data?: undefined;
            pos?: undefined;
            cGroup?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            color: string;
            _data: {
                mirror: {};
            };
            pos?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            bCoef: number;
            cMask: string[];
            trait: string;
            curve: number;
            color: string;
            _data?: undefined;
            pos?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            cGroup: string[];
            curve: number;
            color: string;
            trait?: undefined;
            _data?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            vis?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            cGroup: string[];
            trait?: undefined;
            color?: undefined;
            _data?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            vis?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            cGroup: string[];
            color: string;
            trait?: undefined;
            _data?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            vis?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            cMask: string[];
            cGroup: string[];
            color: string;
            vis: boolean;
            _data: {
                mirror: {};
            };
            trait?: undefined;
            pos?: undefined;
            bCoef?: undefined;
            curve?: undefined;
            bias?: undefined;
        } | {
            x: number;
            y: number;
            trait: string;
            color: string;
            _data: {
                mirror: {};
            };
            curve: number;
            pos?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            vis?: undefined;
            bias?: undefined;
        })[];
        segments: ({
            v0: number;
            v1: number;
            color: string;
            trait: string;
            x: number;
            bCoef?: undefined;
            cMask?: undefined;
            y?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            y: number;
            x?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x: number;
            y?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            cMask: string[];
            cGroup: string[];
            x: number;
            trait?: undefined;
            bCoef?: undefined;
            y?: undefined;
            curve?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            cMask: string[];
            cGroup: string[];
            x: number;
            _data: {
                mirror: {};
                arc: {
                    a: number[];
                    b: number[];
                    curve: number;
                    radius: number;
                    center: number[];
                    from: number;
                    to: number;
                };
            };
            trait?: undefined;
            bCoef?: undefined;
            y?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            cMask: string[];
            cGroup: string[];
            x: number;
            trait?: undefined;
            bCoef?: undefined;
            y?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            trait: string;
            y: number;
            x?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            trait: string;
            bias: number;
            x: number;
            bCoef?: undefined;
            cMask?: undefined;
            y?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            _data?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            trait: string;
            bias: number;
            y: number;
            _data: {
                mirror: {};
                arc: {
                    a: number[];
                    b: number[];
                    radius: null;
                    center: null[];
                    from: null;
                    to: null;
                    curve?: undefined;
                };
            };
            x?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            vis: boolean;
            color: string;
            cMask: string[];
            cGroup: string[];
            x: number;
            trait?: undefined;
            bCoef?: undefined;
            y?: undefined;
            curve?: undefined;
            _data?: undefined;
            bias?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            trait: string;
            x: number;
            bCoef?: undefined;
            cMask?: undefined;
            y?: undefined;
            cGroup?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            trait: string;
            x?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            y?: undefined;
            cGroup?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            bCoef: number;
            trait: string;
            bias: number;
            y: number;
            color?: undefined;
            x?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            _data?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            bCoef: number;
            trait: string;
            bias: number;
            x: number;
            color?: undefined;
            cMask?: undefined;
            y?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            _data?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            trait: string;
            bias: number;
            y: number;
            color?: undefined;
            x?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            _data?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            trait: string;
            bias: number;
            x: number;
            color?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            y?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            _data?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            trait: string;
            y: number;
            x: number;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            cMask: string[];
            cGroup: string[];
            trait: string;
            x?: undefined;
            bCoef?: undefined;
            y?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            _data: {
                mirror: {};
                arc: {
                    a: number[];
                    b: number[];
                    curve: number;
                    radius: number;
                    center: number[];
                    from: number;
                    to: number;
                };
            };
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            bCoef: number;
            cMask: string[];
            trait: string;
            x?: undefined;
            y?: undefined;
            cGroup?: undefined;
            curve?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            curve: number;
            color: string;
            cMask: string[];
            cGroup: string[];
            trait?: undefined;
            x?: undefined;
            bCoef?: undefined;
            y?: undefined;
            _data?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            cMask: string[];
            cGroup: string[];
            x: number;
            _data: {
                mirror: {};
                arc: {
                    a: number[];
                    b: number[];
                    radius: null;
                    center: null[];
                    from: null;
                    to: null;
                    curve?: undefined;
                };
            };
            trait?: undefined;
            bCoef?: undefined;
            y?: undefined;
            curve?: undefined;
            bias?: undefined;
            vis?: undefined;
        } | {
            v0: number;
            v1: number;
            color: string;
            trait: string;
            y: number;
            curve: number;
            _data: {
                mirror: {};
                arc: {
                    a: number[];
                    b: number[];
                    curve: number;
                    radius?: undefined;
                    center?: undefined;
                    from?: undefined;
                    to?: undefined;
                };
            };
            x?: undefined;
            bCoef?: undefined;
            cMask?: undefined;
            cGroup?: undefined;
            bias?: undefined;
            vis?: undefined;
        })[];
        goals: {
            p0: number[];
            p1: number[];
            team: string;
        }[];
        discs: ({
            radius: number;
            invMass: number;
            pos: number[];
            color: string;
            bCoef: number;
            cGroup: string[];
            trait?: undefined;
        } | {
            radius: number;
            pos: number[];
            trait: string;
            invMass?: undefined;
            color?: undefined;
            bCoef?: undefined;
            cGroup?: undefined;
        } | {
            pos: number[];
            color: string;
            trait: string;
            radius?: undefined;
            invMass?: undefined;
            bCoef?: undefined;
            cGroup?: undefined;
        })[];
        planes: {
            normal: number[];
            dist: number;
            cMask: string[];
            color: string;
            _data: {
                extremes: {
                    normal: number[];
                    dist: number;
                    canvas_rect: number[];
                    a: number[];
                    b: number[];
                };
            };
        }[];
        traits: {
            rede: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
                color: string;
            };
            rede2: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
                color: string;
            };
            parede: {
                vis: boolean;
                bCoef: number;
                cMask: string[];
                bias: number;
            };
            traveRed: {
                radius: number;
                invMass: number;
                bCoef: number;
                color: string;
            };
            traveBlue: {
                radius: number;
                invMass: number;
                bCoef: number;
                color: string;
            };
            bandeiraRed: {
                radius: number;
                color: string;
                cMask: string[];
            };
            bandeiraBlue: {
                radius: number;
                color: string;
                cMask: string[];
            };
            linha: {
                cMask: string[];
                color: string;
            };
            hb: {
                cMask: string[];
                color: string;
            };
        };
        ballPhysics: string;
        playerPhysics: {
            bCoef: number;
            acceleration: number;
            kickingAcceleration: number;
            kickStrength: number;
        };
        joints: never[];
        redSpawnPoints: never[];
        blueSpawnPoints: never[];
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
export declare const shirts: {
    BrazilianShirts: import("..").Team[];
    SpanishShirts: import("..").Team[];
    AllUniforms: import("..").Team[];
};
