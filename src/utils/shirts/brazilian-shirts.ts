import { Team } from "../../types/types.js";
import { hexadecimalColors } from "../vars";

export const BrazilianShirts: Team[] = [
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
        color: hexadecimalColors.orange
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
      {
        "name": "Grêmio",
        "cheerphrases": [
            `Venho do bairro da Azenha
            Bairro do Monumental
            Grêmio é puro sentimento
            Somos a banda da Geral
            Dale dale Tricolor
            Dale dale Tricolor
            Dale dale dale dale Tricolor
            Dale dale Tricolor
            Dale dale Tricolor
            Dale dale dale dale Tricolor`
        ],
        color: hexadecimalColors.blueHax,
        shirt: {angle: 0, textColor: 0xFFFFFF, colors: [0x75ACFF, 0x000000, 0x75ACFF]}
      },
      {
        "name": "Corithians",
        cheerphrases: [
            `Corinthians,
            Corinthians minha vida,
            Corinthians minha história,
            Corinthians meu amor!
            Eu nunca vou te abandonar
            Eu nunca vou te abandonar, porque te amo!
            Eu nunca vou te abandonar, porque te amo!
            Eu sooooooou, Corinthians!
            Eu sooooooou, Corinthians!`
        ],
        color: hexadecimalColors.gray,
        shirt: {angle: 90, textColor: 0x000000, colors: [0xFFFFFF]}
    },
    {
        name: "Palmeiras",
        cheerphrases: [
            `Olê, olê (canta aê)
            Eu canto, eu sou Palmeiras até morrer
            Olê, olê (canta aê)
            Eu canto, eu sou Palmeiras até morrer (de alegria)
            Dá-lhe alegria, alegria no coração
            Daria a vida inteira para ser campeão
            A Taça Libertadores: Obsessão
            Tem que jogar com a alma e o coração (olê, olê)
             `
        ],
        color: hexadecimalColors.green,
        shirt: {angle: 0, textColor: 0xFFFFFF, colors: [0x006920]}
    },
    {
        name: "Santos",
        cheerphrases: [
            `Sou alvinegro da Vila Belmiro
            O Santos vive no meu coração
            É o motivo de todo o meu riso
            De minhas lágrimas e emoção
            Sua bandeira no mastro é a história
            De um passado e um presente só de glórias
            Nascer, viver e no Santos morrer
            É um orgulho que nem todos podem ter`
        ],
        color: hexadecimalColors.gray,
        shirt: {angle: 0, textColor: 0x000000, colors: [0xFFFFFF]}
    },
    {
        name: "Internacional",
        cheerphrases: [
            `Glória do desporto nacional
            Oh, Internacional
            Que eu vivo a exaltar
            Levas a plagas distantes
            Teus feitos relevantes
            Vives a brilhar
            Olhos onde surge o amanhã
            Radioso de luz, varonil
            Segue a tua senda de vitórias
            Colorado das glórias
            Orgulho do Brasil`
        ],
        color: hexadecimalColors.redHax,
        shirt: {angle: 90, textColor: 0xFAFAFA, colors: [0xC90000, 0x990000, 0xC90000]}
    },
    {
        name: "Atlético MG",
        cheerphrases: [
            `Primeiro campeão brasileiro
            Clube Atlético Mineiro
             Galo
            Sinônimo de raça
            Uma torcida apaixonada
            Minas Gerais está tomada
            Galo
            É um time de massa
            Galo
            A razão do meu viver
            Galo
            Nosso lema é vencer
            Te apoiarei até morrer`
        ],
        color: hexadecimalColors.gray,
        shirt: {angle: 0, textColor: 0xFF0000, colors: [0x000000, 0xFFFFFF, 0x000000]}
    },
    {
        name: "Cruzeiro",
        cheerphrases: [
            `Nós Somos Loucos, Somos Cruzeiro
            Um Gigante Incontestado!
            Um Refri Por Favor
            Vamos Vamos Cruzeiro
            Salve Salve Cruzeiro
            Guerreiro Dos Gramados
            Vamos, Vamos Cruzeiro`
        ],
        color: hexadecimalColors.blueHax,
        shirt: {angle: 0,  textColor: 0xFFFFFF, colors: [0x0600A6]}
    }
]