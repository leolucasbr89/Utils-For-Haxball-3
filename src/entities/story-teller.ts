import { FatherClass } from "./father.js";
import { MathEntity } from "./math.entity.js";
import { WritingStyles, hexadecimalColors, messages} from "../index.js";
import { idioms } from "../types/types.js";


export class Storyteller extends FatherClass {
    private GoalMessages: string[] = []
    private OwnGoalMessages: string[] = []
    private GoldenGoalMessages: string[] = []
    private indice: number = 0
    constructor(publicRoom: RoomObject, idiom: idioms) {
        super(publicRoom)
        this.ChooseIdiom(idiom)
    }
    ChooseIdiom(idiom: idioms) {
        if (idiom == "en") {
            let messagesEn = messages.en
            this.OwnGoalMessages = messagesEn.ownGoalMessages
            this.GoldenGoalMessages = messagesEn.goldenGoalMessages
            this.GoalMessages = messagesEn.goalMessages
        } else if (idiom == "es") {
            let messagesEs = messages.es
            this.OwnGoalMessages = messagesEs.mensajesAutogol
            this.GoldenGoalMessages = messagesEs.mensajesGolDorado
            this.GoalMessages = messagesEs.mensajesGol
        } else if (idiom == "pt") {
            let messagesPT = messages.pt
            this.OwnGoalMessages = messagesPT.mensagensAutogol
            this.GoldenGoalMessages = messagesPT.mensagensGolDourado
            this.GoalMessages = messagesPT.mensagensGol
        }
    }
    async SendMessage(message: string, id?: number) {
        await this.publicRoom.sendAnnouncement(`🎤Story Teller: ${message}`, id, hexadecimalColors.turquoise, WritingStyles.bold)
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
}