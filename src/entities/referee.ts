import { FatherClass } from "./father.js";
import { WritingStyles, hexadecimalColors, idioms } from "../index.js"

export class Referee extends FatherClass {
    constructor(publicRoom: RoomObject) {
        super(publicRoom)
    }

    async SendMessage(message: string, idiom?: idioms,id?: number) {
        let referename: string|undefined = undefined
        if (idiom === "en") {
            referename = "Referee"
        } else if (idiom === "pt") {
            referename = "Juiz"
        } else if (idiom === "es") {
            referename = "Árbitro"
        }


        await this.publicRoom.sendAnnouncement(`${referename}: ${message}`, id, hexadecimalColors.yellow, WritingStyles.bold)
    }

    async PauseGame(askedforabreak: PlayerObject|undefined, idiom: idioms) {
        let message: string|undefined = askedforabreak ? this.ChoosePauseMessage(idiom, askedforabreak.id, askedforabreak.name) : undefined
        
        if (message) {
            await this.SendMessage(`PÍÍÍÍÍ, ${message}`, idiom)
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