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
    },
    {
        name: "América MG",
        cheerphrases: [
        `Mantendo nosso espírito esportivo,
        social e cultural.
        Vamos cantando o hino do América
        tão famoso e tradicional.

        América és o maior,
        teu futebol é sensacional.
        Cantamos para o mundo inteiro,
        tu és a gloria do esporte nacional.`
        ],
        color: hexadecimalColors.lightgreen,
        shirt: {angle: 0, textColor: 0xFFFFFF, colors: [0x109600, 0x000000, 0x109600]}
    },
    {
        name: "Chapecoense",
        cheerphrases: [`
            Agora eu quero ver, você, chorar
            Você vai estremecer, quando minha chape jogar
            Eu bem que te avisei, e você sabia
            Troque de camisa, e tenha alegria
            Se você é triste, é por culpa sua
            E pra te consolar minha chape só fatura
        `],
        color: hexadecimalColors.lightgreen,
        shirt: { angle: 0, textColor: 0xFAFAFA, colors: [0x007A00, 0x005406, 0x007A00]}
    },
    {
        name: "São Paulo",
        cheerphrases: [
        `O Rei Mandou
        Porque São Paulo É Sentimento
        Como Eu Te Amo, Tricolor
        Doutor, Eu Não Me Engano
        Pode Vir Todo Mundo
        Domingo Eu Vou Lá No Morumbi
        Nós Queremos Gavião
        Bonde do Mal
        União sinistra
        Sou Sou Tricolor`
        ],
        color: hexadecimalColors.redHax,
        shirt: {angle: 90,  textColor: 0xFF0000, colors: [0xFFFFFF]}
    },
    {
        name: "Athletico Paranaense",
        cheerphrases: [
        `Deus, pela Pátria
        Pelo Atlético até morrer
        Vamos Furacão,
        Viemos pra vencer
        Por Deus, pela Pátria
        Pelo Atlético até morrer`],
        color: hexadecimalColors.redHax,
        shirt: {angle: 45, textColor: 0xFAFAFA,colors: [0xC90000, 0x000000, 0xC90000]}
    },
    {
        name: "Bahia",
        cheerphrases: [
        `Somos da turma tricolor
        Somos a voz do campeão
        Somos do povo um clamor
        Ninguém nos vence em vibração
        Vamos avante esquadrão
        Vamos serás um vencedor
        Vamos conquistar mais um tento
        BAHIA, BAHIA, BAHIA!
        Ouve esta voz que é teu alento
        BAHIA, BAHIA, BAHIA!
        Mais um, mais um Bahia
        Mais um mais um título de glória
        Mais um, mais um Bahia
        É assim que se resume a sua história.`],
        color: hexadecimalColors.blueHax,
        shirt: {angle: 0, textColor: 0xFAFAFA, colors: [0x2908FF, 0xFF0000, 0x2908FF]}
    },
    {
        name: "Botafogo PB",
        cheerphrases: [
        `Essa é minha alegria de coração
        Ver o belo jogar no mundão
        Tudo que eu fiz na vida foi te amar
        E esse meu sentimento não vai parar 
        (Eu quero ver)
        Eu quero ver o Belo jogar com raça para vencer`,
        `Do belo eu sou! 
        🥁🥁🥁🥁🥁🥁
        Do belo eu sou! 
        🥁🥁🥁🥁🥁🥁
        Do belo eu sou! 
        🥁🥁🥁🥁🥁🥁
        `
    ],
        color: hexadecimalColors.gray,
        shirt: {angle: 0, textColor: 0xD40D12, colors: [0x2E2331, 0xE6EDF5, 0x2E2331]}
    },
    {
        name: "Criciúma",
        cheerphrases: [
        `Toda semana venho ver o campeão
        Porque eu levo na alma
        Essa loucura que sinto por ti
        Não se compara com nada
        Ganhas ou percas eu venho te apoiar
        O Criciúma é minha vida
        É a alegria do meu coração
        E de Santa Catarina
        Tricolor venho te ver
        E não importa mais nada
        Vamos vamos meu tigre
        Tua torcida não pára`],
        color: hexadecimalColors.yellow,
        shirt: {angle: 90,textColor: 0xFFFFFF,colors: [0xE4C918, 0x0E0E0E, 0xD9D9D9]}
    },
    {
        name: "Red Bull Bragantino",
        cheerphrases: [
        `Chegou a hora da luta
        É o alvinegro em ação
        Bragança toda se inflama
        Massa Bruta campeão
        Na força de uma raça
        Na luta já vencida
        Ergamos sempre uma taça
        Pra grande fiel torcida
        Bragantino o melhor
        Primeiro em emoção
        No campo é o maior
        Arrebenta coração`],
        color: hexadecimalColors.gray,
        shirt: {angle: 0,textColor: 0xFF0000, colors: [0xFAFAFA]}
    }
]