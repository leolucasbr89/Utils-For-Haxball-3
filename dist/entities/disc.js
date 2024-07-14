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
exports.Disc = void 0;
const father_js_1 = require("./father.js");
class Disc extends father_js_1.FatherClass {
    constructor(publicRoom, id, position) {
        super(publicRoom);
        this.id = id;
        this.position = position;
    }
    //this metod is util for real soccer
    ChangeBallPosition(x, cmask, y) {
        return __awaiter(this, void 0, void 0, function* () {
            this.position.x = x;
            if (y) {
                this.position.y = y;
            }
            yield this.publicRoom.setDiscProperties(this.id, { x: x, y: y, cMask: cmask });
        });
    }
    ChangeBallForce(newInvMass) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.publicRoom.setDiscProperties(this.id, { invMass: newInvMass });
        });
    }
    ChangeBallColor(color) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.publicRoom.setDiscProperties(this.id, { color: color });
        });
    }
    UpdatePosition(position) {
        return __awaiter(this, void 0, void 0, function* () {
            this.position = position;
        });
    }
}
exports.Disc = Disc;
//# sourceMappingURL=disc.js.map