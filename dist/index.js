"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = exports.ConnToIp = exports.WritingStyles = exports.hexadecimalColors = void 0;
const es_message_json_1 = __importDefault(require("./i18n/es.message.json"));
const pt_message_json_1 = __importDefault(require("./i18n/pt.message.json"));
const en_message_json_1 = __importDefault(require("./i18n/en.message.json"));
exports.hexadecimalColors = {
    "red": 0xFF0000,
    "yellow": 0xFFFF00,
    "green": 0x00FF00,
    "blue": 0x0000FF,
    "purple": 0x800080,
    "orange": 0xFFA500,
    "pink": 0xFFC0CB,
    "cyan": 0x00FFFF,
    "brown": 0x8B4513,
    "lightblue": 0xADD8E6,
    "lightgreen": 0x98FB98,
    "gray": 0x808080,
    "violet": 0xEE82EE,
    "gold": 0xFFD700,
    "silver": 0xC0C0C0,
    "turquoise": 0x40E0D0,
    "olive": 0x808000,
    "coral": 0xFF7F50,
    "salmon": 0xFA8072,
    "royalblue": 0x4169E1,
    "redHax": 0xdb6259,
    "blueHax": 0x5482da,
    "maroon": 0x831d1c
};
var WritingStyles;
(function (WritingStyles) {
    WritingStyles["normal"] = "normal";
    WritingStyles["bold"] = "bold";
    WritingStyles["italic"] = "italic";
    WritingStyles["small"] = "small";
    WritingStyles["smallBold"] = "small-bold";
    WritingStyles["smallItalic"] = "small-italic";
})(WritingStyles = exports.WritingStyles || (exports.WritingStyles = {}));
function ConnToIp(conn) {
    if (typeof conn === 'string' && /^[0-9a-fA-F]+$/.test(conn)) {
        //@ts-ignore
        const ipAddress = conn.match(/.{1,2}/g).map((h) => String.fromCharCode(parseInt(h, 16))).join('');
        return ipAddress;
    }
    else {
        return "";
    }
}
exports.ConnToIp = ConnToIp;
exports.messages = {
    en: en_message_json_1.default,
    es: es_message_json_1.default,
    pt: pt_message_json_1.default
};
__exportStar(require("./types/types.js"), exports);
__exportStar(require("./entities/father.js"), exports);
__exportStar(require("./entities/referee.js"), exports);
__exportStar(require("./entities/story-teller"), exports);
__exportStar(require("./entities/math.entity"), exports);
//# sourceMappingURL=index.js.map