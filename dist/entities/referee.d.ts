/// <reference types="haxball-headless-browser" />
import { FatherClass } from "./father.js";
import { idioms } from "../index.js";
export declare class Referee extends FatherClass {
    referename: string;
    constructor(publicRoom: RoomObject, idiom: idioms);
    SetName(idiom: idioms): void;
    SendMessage(message: string, id?: number): Promise<void>;
    PauseGame(askedforabreak: PlayerObject | undefined, idiom: idioms): Promise<void>;
    SendMessageWhenStopGame(): Promise<void>;
    private ChoosePauseMessage;
}
