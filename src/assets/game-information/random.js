import random from '../cards/aleatorio.png';

const randomInformation = {
    id: 5,
    nome: 'Modo aleatório',
    textoSobre:'Neste modo suas habilidades de escrita de variáveis serão testadas!, Neste modo todos os tipos serão abordados de forma aleatória, boa sorte!',
    img: random,
    exemplos: [
        {
            titulo: 'Variáveis',
            texto: "numeroDeEstudantes" 
        },
        {
            titulo: 'Variáveis',
            texto: 'nome_completo' 
        },
        {
            titulo: 'Variáveis',
            texto: 'QuantidadeItens'
        }
    ],
    curiosidades: [
        {
            titulo: 'Origem do nome',
            texto: 'O termo \'Camel Case\' foi cunhado devido à semelhança visual das letras maiúsculas no meio da palavra com as corcovas de um camelo.'
        },
        {
            titulo: "Popularidade",
            texto: "O Snake Case é amplamente utilizado na comunidade de programação, especialmente em linguagens de programação como Python, Ruby e PHP."
        }
    ]
}

export default randomInformation;