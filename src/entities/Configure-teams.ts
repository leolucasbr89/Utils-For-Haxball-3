import { ActiveTeams, InputModes, RoomObject, Team, Teams } from "../types/types.js"
import { shirts } from "../utils/vars.js"
import { FatherClass } from "./father.js"
import { MathEntity } from "./math.entity.js"
import { Storyteller } from "./story-teller.js"

export class ConfigureTeams extends FatherClass {
    
    teams: Teams = {
        //@ts-ignore
        team1: undefined,
        //@ts-ignore
        team2: undefined
    }
    //@ts-ignore
    winner:ActiveTeams = undefined
    shirtsArray: Team[] = []
    constructor(publicRoom: RoomObject, readonly storyTeller: Storyteller, mode: InputModes) {
        super(publicRoom)
        this.ChooseArray(mode)
    } 
    ChooseShirt() {
        let team1: Team
        let team2: Team
        let index = MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1)
        team1 = this.shirtsArray[index]
        let index2 = MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1)
        while (index === index2) {
            index2 = MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1)
        }
        team2 = this.shirtsArray[index2]
        this.publicRoom.setTeamColors(1, team1.shirt.angle, team1.shirt.textColor, team1.shirt.colors)
        this.publicRoom.setTeamColors(2, team2.shirt.angle, team2.shirt.textColor, team2.shirt.colors)
        this.teams.team1 = team1
        this.teams.team2 = team2
        this.storyTeller.SendMessage(`O jogo é ${team1.name} X ${team2.name}`)
    }
    ChooseShirtTeam(teamID: ActiveTeams) {
        let index = MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1)
        const otherTeam = teamID === 1 ? this.teams.team2.name : this.teams.team1.name
        while (index === this.shirtsArray.findIndex(element => element.name === otherTeam) ) {
            index = MathEntity.generateIntegerBetweenMinAndMax(0, this.shirtsArray.length - 1)
        }
        this.publicRoom.setTeamColors(teamID, this.shirtsArray[index].shirt.angle, this.shirtsArray[index].shirt.textColor, this.shirtsArray[index].shirt.colors )
        if (teamID === 1) {
            this.teams.team1.name = this.shirtsArray[index].name
            this.teams.team1 = this.shirtsArray[index]
        } else {
            this.teams.team2.name = this.shirtsArray[index].name
            this.teams.team2 = this.shirtsArray[index]
        }
    }
    private ChooseArray(mode: InputModes) {
        if (mode === "BR") {
            this.shirtsArray = shirts.BrazilianShirts
        } else if (mode == "ES") {
            this.shirtsArray = shirts.SpanishShirts
        } else if (mode === "CO") {
            this.shirtsArray = shirts.CountriesShirts
        } else if (mode === "UNI"){
            this.shirtsArray = shirts.AllUniforms
        } else if (mode === "TEAM") {
            this.shirtsArray = shirts.Teams
        }
    }
}