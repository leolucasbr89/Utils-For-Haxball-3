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
    },
    {
        name: "Belgium",
        cheerphrases: [
        `Belgien, Belgien, auf zum Sieg,
        Unser Herz schlägt laut und stark!
        Belgien, Belgien, unser Team,
        Wir sind hier, für euch im Park!`],
        color:  hexadecimalColors.yellow,
        shirt: {angle: 0, textColor: 0xFFFB00, colors: [0xD62828]}
    },
    {
        name: "Egypt",
        cheerphrases: [
        `Minha terra natal, Minha terra natal, Minha terra natal
        Meu amor e meu coração são vossos
        Egito! Ó mãe de todas as terras,
        Tu és minha esperança e minha ambição,
        Quem pode avaliar
        as bênçãos do Nilo para a humanidade?
        Egito! A jóia mais preciosa,
        Brilhando pela eternidade!
        Ó minha terra natal, sejas para sempre livre,
        Livre de todos os inimigos!
        Egito! Nobres são tuas crianças,
        Fiéis, e guardiãs de teu solo.
        Na guerra e na paz
        Nós te damos nossas vidas.`
        ],
        shirt: {angle: 60, textColor: 0xFFFFFF, colors: [0xF70000]},
        color: hexadecimalColors.red
    },
    {
        name: "Mexico",
        cheerphrases: [
        `Mexicanos, al grito de guerra
        El acero aprestad y el bridón
        Y retiemble en sus centros la tierra
        Al sonoro rugir del cañón
        Y retiemble en sus centros la tierra
        Al sonoro rugir del cañón
        Ciña ¡oh, Patria! Tus sienes de oliva
        De la paz el arcángel divino
        Que en el cielo tu eterno destino
        Por el dedo de Dios se escribió
        Mas si osare un extraño enemigo
        Profanar con su planta tu suelo
        Piensa, ¡oh, Patria querida! Que el cielo
        Un soldado en cada hijo te dio
        ¡Un soldado en cada hijo te dio!`],
        color: hexadecimalColors.green,
        shirt: {angle: 0, textColor: 0xFFFFFF, colors: [0x094A02]}
    },
    {
        name: "United States of America",
        color: hexadecimalColors.blueHax,
        cheerphrases: [
        `I
        I believe
        I believe that
        I believe that we
        I believe that we will
        I believe that we will win!
        I believe that we will win!
        I believe that we will win!`],
        shirt: {angle: -40, textColor: 0xFFFFFF, colors: [0x001347, 0xFF1C1C, 0x001347]}
    },
    {
        name: "Morocco",
        color: hexadecimalColors.red,
        cheerphrases: [
        `Allez, allez, Maroc,
        Les Lions de l'Atlas, on y croit,
        Avec courage et avec foi,
        On va gagner, on va gagner!
        Maroc, oh Maroc,
        Fiers et forts, on est avec vous,
        Rouge et vert, notre cœur bat pour vous,
        Ensemble, on va triompher!
        Oh-oh-oh-oh, allez les Lions,
        Oh-oh-oh-oh, jusqu'au bout,
        Avec fierté, on va chanter,
        Pour la victoire, pour le Maroc!`],
        shirt: {angle: 0, textColor: 0x017b5b, colors: [0xDB0000]}
    },
    {
        name: "Portugal",
        color: hexadecimalColors.red,
        cheerphrases: [
        `Vá lá cambada
        Infantes desportistas
        Homens de conquistas
        Povo que és o meu
        Bola redonda e onze jogadores
        Em frente sem temores
        Que as tácticas dou eu
        Tragam as gaitas, as bandeiras e a pomada
        Vamos dar-lhes uma abada
        Ensinar-lhes o que é bom
        Vamos mostrar a esses carafunchosos
        Por momentos gloriosos
        Quem é a nossa selecção`],
        shirt: {angle: -45, textColor: 0xFFF700, colors: [0x165200, 0xC20808]}
    }
]