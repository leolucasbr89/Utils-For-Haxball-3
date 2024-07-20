import x3futsal from "../../maps/x3-futsal.json"
import espanoljson from "../../i18n/es.message.json"
import ptjson from "../../i18n/pt.message.json"
import enjson from "../../i18n/en.message.json"
import x4futsal from "../../maps/x4-futsal.json"
import x7futsal from "../../maps/x7-futsal.json"
import x1andx2futsal from "../../maps/x1-and-x2futsal.json"
import x5futsal from "../../maps/x5-futsal.json"

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
};


import { BrazilianShirts } from "./shirts/brazilian-shirts.js"
import { SpanishShirts } from "./shirts/spanish-shirts"
import { CountriesShirts } from "./shirts/countries-shirts"

export const maps = {
    x3futsal,
    x4futsal,
    x7futsal,
    x1andx2futsal,
    x5futsal
}

export const messages = {
    en: enjson,
    es: espanoljson,
    pt: ptjson
}






export enum WritingStyles {
    normal = "normal",
    bold = "bold",
    italic = "italic",
    small = "small",
    smallBold = "small-bold",
    smallItalic = "small-italic"
}




export const shirts = {
    BrazilianShirts,
    SpanishShirts,
    CountriesShirts,
    Teams: [...BrazilianShirts, ...SpanishShirts],
    AllUniforms: [...BrazilianShirts, ...SpanishShirts, ...CountriesShirts]
}

export const ProhibitedWordsInPortuguese = ["arrombado", "tmnc", "cu", "macaco", "hitler", "fodase", "fdp", "puta",
    "verme", "vermes", "macacos", "arrombados", "putas", "sexo", "lixo", "horrível", "horrivel"
]