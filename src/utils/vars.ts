import x3futsal from "../../maps/x3-futsal.json"
import espanoljson from "../../i18n/es.message.json"
import ptjson from "../../i18n/pt.message.json"
import enjson from "../../i18n/en.message.json"
import x4futsal from "../../maps/x4-futsal.json"
import x7futsal from "../../maps/x7-futsal.json"
import x1andx2futsal from "../../maps/x1-and-x2futsal.json"
import { Team } from "../types/types"

export const maps = {
    x3futsal,
    x4futsal,
    x7futsal,
    x1andx2futsal
}

export const messages = {
    en: enjson,
    es: espanoljson,
    pt: ptjson
}




export const hexadecimalColors = {
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
}

export enum WritingStyles {
    normal = "normal",
    bold = "bold",
    italic = "italic",
    small = "small",
    smallBold = "small-bold",
    smallItalic = "small-italic"
}

const unisBrazilian: Team[] = [
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
        shirt: {angle: 20, textColor:0xB8860B, colors: [0x215E21, 0xFFFAFA, 0xA62A2A]},
        color: hexadecimalColors.red
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
        shirt: {angle: 90, textColor: 0xFFFAFA, colors: [0xFF0000, 0x00000, 0xFF0000]},
        color: hexadecimalColors.red
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
        shirt: {angle: 135, textColor: 0xFF0000, colors: [0xFFFFFF, 0x000000, 0xFFFFFF]}
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
        shirt: {angle: 225, textColor: 0xDAA520, colors: [0x000000, 0x1C1C1C, 0x000000]}
      },
   
]


export const shirts = {
    unisBrazilian
}