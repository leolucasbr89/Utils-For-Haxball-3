import { Team } from "../../types/types";
import { hexadecimalColors } from "../vars";

export const CountriesShirts: Team[] = [
    {
        name: "Brazil",
        cheerphrases: [
            `
            Ééééé cinco oito foi Pelé
            Em meia dois foi o Mané
            Em sete zero o esquadrão
            Primeiro a ser tricampeão!
            Ôôôô 94 Romáriôôô
            2002 Fenomenôôô
            Primeiro tetracampeão
            Único penta é Brasilzão!

            Ôôôô Brasil olê, olê, olê! 
            `
        ],
        color: hexadecimalColors.yellow,
        shirt: {angle: 220, textColor: 0x038434, colors: [0xF8DD2E]}
    },
    {
        name: "Argentina",
        cheerphrases: [
            `En Argentina nací
            tierra de Diego y Lionel
            de los pibes de Malvinas que jamás olvidaré.
            No te lo puedo explicar
            porque no vas a entender
            las finales que perdimos, cuántos años las lloré.
            Pero eso se terminó, porque en el Maracaná
            la final con los brazucas la volvió a ganar papá...
            Muchachos, ahora nos volvimos a ilusionar
            quiero ganar la tercera, quiero ser campeón mundial
            y al Diego, en el cielo lo podemos ver
            con Don Diego y con la Tota, alentándolo a Lionel.`
        ],
        color: hexadecimalColors.blueHax,
        shirt: {angle: 180, textColor: 0x333A3C, colors: [0xEFF6FC, 0xBBE3F4, 0xEFF6FC]}
    },
    {
        name: "France",
        cheerphrases: [`
        Merci à vous merci les bleus 
        Allez les bleus allez 
        Merci à vous merci les bleus 
        Allez les bleus allez 
        Merci à vous merci les bleus 
        Allez les bleus allez 
        Merci à vous merci les bleus 
        Allez les bleus allez ` 
      ],
      color: hexadecimalColors.blue,
      shirt: {angle: 180, textColor: 0x000000, colors: [0x0717A6, 0xFFFFFF, 0xFF0A0A]}
    },
    {
        name: "Colombia",
        cheerphrases: [`¡Oye!
        Me siento dichoso
        De ser colombiano
        Lo digo orgulloso: ¡Yo soy colombiano!
        ¡Juancho!
        Cantemos con alegría
        Que se oiga una sola voz
        Que viva la patria mía
        ¡Que viva la selección!
        Como buenos colombianos
        Tenemos que respaldar, a nuestro seleccionado; que jugará en el mundial`
        ],
        color: hexadecimalColors.yellow,
        shirt: {angle: 0, textColor: 0x0A0EFF, colors: [0xD9C80B]}
    },
    {
        name: "Germany",
        cheerphrases: [
        `Schwarz und weiß,
        Wie lieb ich dich,
        Schwarz und weiß,
        Verlass mich nicht,
        Schwarz und weiß,
        Bist du für mich,
        Ganz egal was auch passiert!

        Schwarz und weiß,
        Wie lieb ich dich,
        Schwarz und weiß,
        Das weißt du nicht,
        Schwarz und weiß,
        Bleib ich bei dir,
        Ganz egal was auch passiert!`
        ],
        shirt: {angle: 0, textColor: 0xFFFAFA, colors:  [0x000000, 0xFF0000, 0xFFA500]},
        color: hexadecimalColors.gray
    },
    {
        name: "Uruguai",
        cheerphrases: [
        `Ya cruzamo´ el mundo
        Pa verte jugar
        Te seguimo´ siempre a todos lados
        Nunca favoritos, siempre desde atrás
        Así ganamos los campeonatos
        A los jugadores les quiero pedir
        Que transpiren bien la camiseta
        Para dar la vuelta y ser campeón mundial
        Como en 1950
        Vamo´ Uruguay, Uruguay, Uruguay`],
        color: hexadecimalColors.royalblue,
        shirt: {angle: 60, textColor:  0x000000, colors: [0x0D9EFF]}
    }
]