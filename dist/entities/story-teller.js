"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storyteller = void 0;
const father_js_1 = require("./father.js");
const math_entity_js_1 = require("./math.entity.js");
const index_js_1 = require("../index.js");
class Storyteller extends father_js_1.FatherClass {
    constructor(publicRoom, idiom) {
        super(publicRoom);
        this.GoalMessages = [];
        this.OwnGoalMessages = [];
        this.GoldenGoalMessages = [];
        this.indice = 0;
        this.idiom = idiom;
        this.ChooseIdiom();
    }
    ChooseIdiom() {
        if (this.idiom == "en") {
            let messagesEn = index_js_1.messages.en;
            this.OwnGoalMessages = messagesEn.ownGoalMessages;
            this.GoldenGoalMessages = messagesEn.goldenGoalMessages;
            this.GoalMessages = messagesEn.goalMessages;
        }
        else if (this.idiom == "es") {
            let messagesEs = index_js_1.messages.es;
            this.OwnGoalMessages = messagesEs.mensajesAutogol;
            this.GoldenGoalMessages = messagesEs.mensajesGolDorado;
            this.GoalMessages = messagesEs.mensajesGol;
        }
        else if (this.idiom == "pt") {
            let messagesPT = index_js_1.messages.pt;
            this.OwnGoalMessages = messagesPT.mensagensAutogol;
            this.GoldenGoalMessages = messagesPT.mensagensGolDourado;
            this.GoalMessages = messagesPT.mensagensGol;
        }
    }
    SendMessage(message, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let name = this.ChooseName();
            yield this.publicRoom.sendAnnouncement(`🎤${name}: ${message}`, id, index_js_1.hexadecimalColors.turquoise, index_js_1.WritingStyles.bold);
        });
    }
    SendMessageGoal(owngoal) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!owngoal) {
                this.indice = math_entity_js_1.MathEntity.generateIntegerBetweenMinAndMax(0, this.GoalMessages.length - 1);
                yield this.SendMessage(this.GoalMessages[this.indice]);
            }
            else {
                this.indice = math_entity_js_1.MathEntity.generateIntegerBetweenMinAndMax(0, this.OwnGoalMessages.length - 1);
                yield this.SendMessage(this.OwnGoalMessages[this.indice]);
            }
        });
    }
    SendGoldenGoalMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            this.indice = math_entity_js_1.MathEntity.generateIntegerBetweenMinAndMax(0, this.GoldenGoalMessages.length - 1);
            yield this.SendMessage(this.GoldenGoalMessages[this.indice]);
        });
    }
    ChooseName() {
        if (this.idiom === "pt") {
            return "Narrador";
        }
        else if (this.idiom === "es") {
            return "Narrator";
        }
        else if (this.idiom === "en") {
            return "Story Teller";
        }
        return "";
    }
}
exports.Storyteller = Storyteller;
//# sourceMappingURL=story-teller.js.map