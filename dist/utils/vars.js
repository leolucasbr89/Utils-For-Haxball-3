"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProhibitedWordsInPortuguese = exports.shirts = exports.WritingStyles = exports.messages = exports.maps = exports.hexadecimalColors = void 0;
const x3_futsal_json_1 = __importDefault(require("../../maps/x3-futsal.json"));
const es_message_json_1 = __importDefault(require("../../i18n/es.message.json"));
const pt_message_json_1 = __importDefault(require("../../i18n/pt.message.json"));
const en_message_json_1 = __importDefault(require("../../i18n/en.message.json"));
const x4_futsal_json_1 = __importDefault(require("../../maps/x4-futsal.json"));
const x7_futsal_json_1 = __importDefault(require("../../maps/x7-futsal.json"));
const x1_and_x2futsal_json_1 = __importDefault(require("../../maps/x1-and-x2futsal.json"));
const x5_futsal_json_1 = __importDefault(require("../../maps/x5-futsal.json"));
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
const brazilian_shirts_js_1 = require("./shirts/brazilian-shirts.js");
const spanish_shirts_1 = require("./shirts/spanish-shirts");
const countries_shirts_1 = require("./shirts/countries-shirts");
exports.maps = {
    x3futsal: x3_futsal_json_1.default,
    x4futsal: x4_futsal_json_1.default,
    x7futsal: x7_futsal_json_1.default,
    x1andx2futsal: x1_and_x2futsal_json_1.default,
    x5futsal: x5_futsal_json_1.default
};
exports.messages = {
    en: en_message_json_1.default,
    es: es_message_json_1.default,
    pt: pt_message_json_1.default
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
exports.shirts = {
    BrazilianShirts: brazilian_shirts_js_1.BrazilianShirts,
    SpanishShirts: spanish_shirts_1.SpanishShirts,
    CountriesShirts: countries_shirts_1.CountriesShirts,
    Teams: [...brazilian_shirts_js_1.BrazilianShirts, ...spanish_shirts_1.SpanishShirts],
    AllUniforms: [...brazilian_shirts_js_1.BrazilianShirts, ...spanish_shirts_1.SpanishShirts, ...countries_shirts_1.CountriesShirts]
};
exports.ProhibitedWordsInPortuguese = ["arrombado", "tmnc", "cu", "macaco", "hitler", "fodase", "fdp", "puta",
    "verme", "vermes", "macacos", "arrombados", "putas", "sexo", "lixo", "horrível", "horrivel"
];
//# sourceMappingURL=vars.js.map