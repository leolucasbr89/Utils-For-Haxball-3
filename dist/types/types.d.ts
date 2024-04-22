export type idioms = "en" | "pt" | "es";
export type Position = {
    x: number;
    y: number;
};
export type Team = {
    shirt: {
        angle: number;
        textColor: number;
        colors: ReadonlyArray<number>;
    };
    name: string;
    cheerphrases: string[];
    color: number;
    regiao?: string;
};
