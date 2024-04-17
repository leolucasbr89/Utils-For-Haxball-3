import espanoljson from "./i18n/es.message.json"
import ptjson from "./i18n/pt.message.json"
import enjson from "./i18n/en.message.json"

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

export function ConnToIp(conn: string) {
    if (typeof conn === 'string' && /^[0-9a-fA-F]+$/.test(conn)) {
        //@ts-ignore
        const ipAddress = conn.match(/.{1,2}/g).map((h) => String.fromCharCode(parseInt(h, 16))).join('');
        console.log(ipAddress);
    } else {
        console.error('conn não é uma string válida contendo valores hexadecimais.');
    }    
}


export const messages = {
    en: enjson,
    es: espanoljson,
    pt: ptjson
}

export * from "./types/types.js"
export * from "./entities/father.js"
export * from "./entities/referee.js"
export * from "./entities/story-teller"
export * from "./entities/math.entity"