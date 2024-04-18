"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WritingStyles = exports.hexadecimalColors = exports.messages = void 0;
const es_message_json_1 = __importDefault(require("../i18n/es.message.json"));
const pt_message_json_1 = __importDefault(require("../i18n/pt.message.json"));
const en_message_json_1 = __importDefault(require("../i18n/en.message.json"));
exports.messages = {
    en: en_message_json_1.default,
    es: es_message_json_1.default,
    pt: pt_message_json_1.default
};
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
})(WritingStyles || (exports.WritingStyles = WritingStyles = {}));
//# sourceMappingURL=vars.js.map