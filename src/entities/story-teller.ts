import { FatherClass } from "./father.js";
import { MathEntity } from "./math.entity.js";
import { WritingStyles, hexadecimalColors, messages} from "../index.js";
import { idioms } from "../types/types.js";


export class Storyteller extends FatherClass {
    private GoalMessages: string[] = []
    private OwnGoalMessages: string[] = []
    private GoldenGoalMessages: string[] = []
    private indice: number = 0 
    idiom: idioms
    constructor(publicRoom: RoomObject, idiom: idioms) {
        super(publicRoom)
        this.idiom = idiom
        this.ChooseIdiom()
    }
    private ChooseIdiom() {
        if (this.idiom == "en") {
            let messagesEn = messages.en
            this.OwnGoalMessages = messagesEn.ownGoalMessages
            this.GoldenGoalMessages = messagesEn.goldenGoalMessages
            this.GoalMessages = messagesEn.goalMessages
        } else if (this.idiom == "es") {
            let messagesEs = messages.es
            this.OwnGoalMessages = messagesEs.mensajesAutogol
            this.GoldenGoalMessages = messagesEs.mensajesGolDorado
            this.GoalMessages = messagesEs.mensajesGol
        } else if (this.idiom == "pt") {
            let messagesPT = messages.pt
            this.OwnGoalMessages = messagesPT.mensagensAutogol
            this.GoldenGoalMessages = messagesPT.mensagensGolDourado
            this.GoalMessages = messagesPT.mensagensGol
        }
    }
    async SendMessage(message: string, id?: number) {
        let name = this.ChooseName()
        await this.publicRoom.sendAnnouncement(`🎤${name}: ${message}`, id, hexadecimalColors.turquoise, WritingStyles.bold)
    }
    async SendMessageGoal(owngoal: boolean) {
        if (!owngoal) {
            this.indice = MathEntity.generateIntegerBetweenMinAndMax(0, this.GoalMessages.length - 1)
            await this.SendMessage(this.GoalMessages[this.indice])
        } else {
            this.indice = MathEntity.generateIntegerBetweenMinAndMax(0, this.OwnGoalMessages.length - 1)
            await this.SendMessage(this.OwnGoalMessages[this.indice])
        }
    }
    async SendGoldenGoalMessage() {
        this.indice = MathEntity.generateIntegerBetweenMinAndMax(0, this.GoldenGoalMessages.length - 1)
        await this.SendMessage(this.GoldenGoalMessages[this.indice])
    }
    private ChooseName(): string {
        if (this.idiom === "pt") {
            return "Narrador"
        } else if (this.idiom === "es") {
            return "Narrator"
        } else if (this.idiom === "en") {
            return "Story Teller"
        }
        return ""
    }
}