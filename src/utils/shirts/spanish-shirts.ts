import { Team } from "../../types/types.js";
import { hexadecimalColors } from "../vars.js";

export const SpanishShirts: Team[] = [
    {
        name: "Barcelona",
        cheerphrases: [
            `Blaugrana al vent
            un crit valent
            tenim un nom el sap tothom:
            Barça, Barça, Baaarça!
            `
        ],
        color: hexadecimalColors.maroon,
        shirt: {angle: 360, textColor: 0xFFD700, colors: [0x00008B, 0x8B0000, 0x00008B]}
    },
    {
        name: "Real Madrid",
        cheerphrases: [
        `Historia que tú hiciste, historia por hacer
        porque nadie resiste tus ganas de vencer.
        Ya salen las estrellas mi viejo Chamartín
        de lejos y de cerca nos traes hasta aquí.
        Llevo tu camiseta pegada al corazón,
        los días que tú juegas son todo lo que soy.
        Ya corre La Saeta, ya ataca mi Madrid
        soy lucha, soy belleza, el grito que aprendí.
        Madrid, Madrid, Madrid
        ¡HALA MADRID!
        y nada más, y nada más
        ¡HALA MADRID!
        `],
        color: hexadecimalColors.gray,
        shirt: {angle: 0, textColor: 0xDAA520, colors: [0xFFFAFA, 0xFFFAFA, 0xFFFAFA]}
    }
]