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
exports.Referee = void 0;
const father_js_1 = require("./father.js");
const index_js_1 = require("../index.js");
class Referee extends father_js_1.FatherClass {
    constructor(publicRoom) {
        super(publicRoom);
    }
    SendMessage(message, idiom, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let referename = undefined;
            if (idiom === "en") {
                referename = "Referee";
            }
            else if (idiom === "pt") {
                referename = "Juiz";
            }
            else if (idiom === "es") {
                referename = "Árbitro";
            }
            yield this.publicRoom.sendAnnouncement(`${referename}: ${message}`, id, index_js_1.hexadecimalColors.yellow, index_js_1.WritingStyles.bold);
        });
    }
    PauseGame(askedforabreak, idiom) {
        return __awaiter(this, void 0, void 0, function* () {
            let message = askedforabreak ? this.ChoosePauseMessage(idiom, askedforabreak.id, askedforabreak.name) : undefined;
            if (message) {
                yield this.SendMessage(`PÍÍÍÍÍ, ${message}`, idiom);
            }
        });
    }
    SendMessageWhenStopGame() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.SendMessage("PÍÍÍÍÍÍÍÍÍÍÍÍ");
        });
    }
    ChoosePauseMessage(idiom, id, name) {
        if (idiom === "pt") {
            return `Jogo pausado por #${id} ${name}`;
        }
        else if (idiom === "en") {
            return `Game paused by #${id} ${name}`;
        }
        else {
            return `Juego pausado por #${id} ${name}`;
        }
    }
}
exports.Referee = Referee;
//# sourceMappingURL=referee.js.map