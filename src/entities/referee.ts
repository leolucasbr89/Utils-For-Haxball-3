import { FatherClass } from "./father.js";
import { PlayerObject, RoomObject, WritingStyles, hexadecimalColors, idioms } from "../index.js"

export class Referee extends FatherClass {
    referename: string = "Referee"
    
    constructor(publicRoom: RoomObject, idiom: idioms) {
        super(publicRoom)
        this.SetName(idiom)
    }
    SetName(idiom: idioms) {
        if (idiom === "en") {
            this.referename = "Referee"
        } else if (idiom === "pt") {
            this.referename = "Juiz"
        } else if (idiom === "es") {
            this.referename = "Árbitro"
        }
    }

    async SendMessage(message: string, id?: number) {
        await this.publicRoom.sendAnnouncement(`${this.referename}: ${message}`, id, hexadecimalColors.yellow, WritingStyles.bold)
    }

    async PauseGame(askedforabreak: PlayerObject|undefined, idiom: idioms) {
        let message: string|undefined = askedforabreak ? this.ChoosePauseMessage(idiom, askedforabreak.id, askedforabreak.name) : undefined
        
        if (message) {
            await this.SendMessage(`PÍÍÍÍÍ, ${message}`)
        }
    }
    async SendMessageWhenStopGame() {

        await this.SendMessage("PÍÍÍÍÍÍÍÍÍÍÍÍ")
    }
    private ChoosePauseMessage(idiom: idioms, id: number, name: string): string{
        if (idiom === "pt") {
            return `Jogo pausado por #${id} ${name}`
        } else if (idiom === "en") {
            return `Game paused by #${id} ${name}`
        } else {
            return `Juego pausado por #${id} ${name}`
        } 
    }
}