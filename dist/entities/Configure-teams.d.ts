import { ActiveTeams, InputModes, RoomObject, Team, Teams } from "../types/types.js";
import { FatherClass } from "./father.js";
import { Storyteller } from "./story-teller.js";
export declare class ConfigureTeams extends FatherClass {
    readonly storyTeller: Storyteller;
    teams: Teams;
    winner: ActiveTeams;
    shirtsArray: Team[];
    constructor(publicRoom: RoomObject, storyTeller: Storyteller, mode: InputModes);
    ChooseShirt(): void;
    ChooseShirtTeam(teamID: ActiveTeams): void;
    private ChooseArray;
}
