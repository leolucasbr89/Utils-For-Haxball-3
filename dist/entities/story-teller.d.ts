/// <reference types="haxball-headless-browser" />
import { FatherClass } from "./father.js";
import { idioms } from "../types/types.js";
export declare class Storyteller extends FatherClass {
    private GoalMessages;
    private OwnGoalMessages;
    private GoldenGoalMessages;
    private indice;
    idiom: idioms;
    constructor(publicRoom: RoomObject, idiom: idioms);
    private ChooseIdiom;
    SendMessage(message: string, id?: number): Promise<void>;
    SendMessageGoal(owngoal: boolean): Promise<void>;
    SendGoldenGoalMessage(): Promise<void>;
    private ChooseName;
}
