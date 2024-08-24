"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigureTeams = void 0;
const vars_js_1 = require("../utils/vars.js");
const father_js_1 = require("./father.js");
const math_entity_js_1 = require("./math.entity.js");
class ConfigureTeams extends father_js_1.FatherClass {
    constructor(publicRoom, storyTeller, mode) {
        super(publicRoom);
        this.storyTeller = storyTeller;
        this.teams = {
            //@ts-ignore
            team1: undefined,
            //@ts-ignore
            team2: undefined
        };
        //@ts-ignore
        this.winner = undefined;
        this.shirtsArray = [];
        this.ChooseArray(mode);
    }
    ChooseShirt() {
        let team1;
        let team2;
        let index = math_entity_js_1.MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1);
        team1 = this.shirtsArray[index];
        let index2 = math_entity_js_1.MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1);
        while (index === index2) {
            index2 = math_entity_js_1.MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1);
        }
        team2 = this.shirtsArray[index2];
        this.publicRoom.setTeamColors(1, team1.shirt.angle, team1.shirt.textColor, team1.shirt.colors);
        this.publicRoom.setTeamColors(2, team2.shirt.angle, team2.shirt.textColor, team2.shirt.colors);
        this.teams.team1 = team1;
        this.teams.team2 = team2;
        this.storyTeller.SendMessage(`O jogo é ${team1.name} X ${team2.name}`);
    }
    ChooseShirtTeam(teamID) {
        let index = math_entity_js_1.MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1);
        const otherTeam = teamID === 1 ? this.teams.team2.name : this.teams.team1.name;
        while (index === this.shirtsArray.findIndex(element => element.name === otherTeam)) {
            index = math_entity_js_1.MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1);
        }
        this.publicRoom.setTeamColors(teamID, this.shirtsArray[index].shirt.angle, this.shirtsArray[index].shirt.textColor, this.shirtsArray[index].shirt.colors);
        if (teamID === 1) {
            this.teams.team1.name = this.shirtsArray[index].name;
            this.teams.team1 = this.shirtsArray[index];
        }
        else {
            this.teams.team2.name = this.shirtsArray[index].name;
            this.teams.team2 = this.shirtsArray[index];
        }
    }
    ChooseArray(mode) {
        if (mode === "BR") {
            this.shirtsArray = vars_js_1.shirts.BrazilianShirts;
        }
        else if (mode == "ES") {
            this.shirtsArray = vars_js_1.shirts.SpanishShirts;
        }
        else if (mode === "CO") {
            this.shirtsArray = vars_js_1.shirts.CountriesShirts;
        }
        else if (mode === "UNI") {
            this.shirtsArray = vars_js_1.shirts.AllUniforms;
        }
        else if (mode === "TEAM") {
            this.shirtsArray = vars_js_1.shirts.Teams;
        }
    }
}
exports.ConfigureTeams = ConfigureTeams;
//# sourceMappingURL=Configure-teams.js.map