import { FatherClass } from "./father.js";
import { WritingStyles, hexadecimalColors, idioms } from "../index.js"

export class Referee extends FatherClass {
    constructor(publicRoom: RoomObject) {
        super(publicRoom)
    }

    async SendMessage(message: string, id?: number) {
        await this.publicRoom.sendAnnouncement(`Referee: ${message}`, id, hexadecimalColors.yellow, WritingStyles.bold)
    }

    async PauseGame(askedforabreak: PlayerObject|undefined, idiom: idioms) {
        let message: string|undefined = askedforabreak ? this.ChoosePauseMessage(idiom, askedforabreak.id, askedforabreak.name) : undefined
        
        
        await this.SendMessage(`PÍÍÍÍÍ, ${message}`)
    }
    async SendMessageWhenStopGame() {
        await this.SendMessage("PÍÍÍÍÍÍÍÍÍÍÍÍ")
    }
    private ChoosePauseMessage(idiom: idioms, id: number, name: string): string|undefined {
        if (idiom === "pt") {
            return `Jogo pausado por #${id} ${name}`
        } else if (idiom === "en") {
            return `Game paused by #${id} ${name}`
        } else if (idiom === "es") {
            return `Juego pausado por #${id} ${name}`
        } 
        return undefined
    }
}