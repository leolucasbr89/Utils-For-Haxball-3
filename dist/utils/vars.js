"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shirts = exports.WritingStyles = exports.hexadecimalColors = exports.messages = exports.maps = void 0;
const x3_futsal_json_1 = __importDefault(require("../../maps/x3-futsal.json"));
const es_message_json_1 = __importDefault(require("../../i18n/es.message.json"));
const pt_message_json_1 = __importDefault(require("../../i18n/pt.message.json"));
const en_message_json_1 = __importDefault(require("../../i18n/en.message.json"));
const x4_futsal_json_1 = __importDefault(require("../../maps/x4-futsal.json"));
const x7_futsal_json_1 = __importDefault(require("../../maps/x7-futsal.json"));
const x1_and_x2futsal_json_1 = __importDefault(require("../../maps/x1-and-x2futsal.json"));
exports.maps = {
    x3futsal: x3_futsal_json_1.default,
    x4futsal: x4_futsal_json_1.default,
    x7futsal: x7_futsal_json_1.default,
    x1andx2futsal: x1_and_x2futsal_json_1.default
};
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
const unisBrazilian = [
    {
        name: "Fluminense",
        cheerphrases: [`
        Vamos, Fluzão, com raça e coração,
        Com garra e determinação,
        Vamos mostrar quem é o melhor,
        Com amor, somos vencedores!`,
            `Guerreiros das Laranjeiras,
        Com garra e amor a jogar,
        Com o manto tricolor,
        Vamos lutar e conquistar!`
        ],
        shirt: { angle: 20, textColor: 0xB8860B, colors: [0x215E21, 0xFFFAFA, 0xA62A2A] },
        color: exports.hexadecimalColors.red
    },
    {
        name: "Flamengo",
        cheerphrases: [
            `Uma vez Flamengo, sempre Flamengo,
        Flamengo sempre eu hei de ser.
        É meu maior prazer, vê-lo brilhar,
        Seja na terra, seja no mar.
        Vencer, vencer, vencer!`,
            `Eu sou Flamengo, até morrer,
        Eu sou Flamengo, com muito amor.
        Não é mole, não, não é mole não,
        Ser rubro-negro, com muito orgulho,
        Com muito amor!`,
        ],
        shirt: { angle: 90, textColor: 0xFFFAFA, colors: [0xFF0000, 0x00000, 0xFF0000] },
        color: exports.hexadecimalColors.red
    },
    {
        "name": "Vasco",
        "cheerphrases": [
            `Gigante pela própria natureza, 
          Vasco é o teu nome!`,
            `Vasco, minha vida, 
          minha história, 
          meu primeiro amor!`
        ],
        "color": 0xd3d3d3,
        shirt: { angle: 135, textColor: 0xFF0000, colors: [0xFFFFFF, 0x000000, 0xFFFFFF] }
    },
    {
        "name": "Botafogo",
        "cheerphrases": [
            `Fogo, minha paixão, 
          Botafogo no coração!`,
            `Ser Botafogo é ser campeão, 
          na raça e no coração!`
        ],
        "color": 0x333333,
        shirt: { angle: 225, textColor: 0xDAA520, colors: [0x000000, 0x1C1C1C, 0x000000] }
    },
];
exports.shirts = {
    unisBrazilian
};
//# sourceMappingURL=vars.js.map