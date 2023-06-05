import camel from '../cards/camel.png';

const camelInformation = {
    id: 1,
    nome: 'Camel Case',
    textoSobre:'Camel case consiste em unir palavras compostas ou frases em uma única palavra, capitalizando cada palavra interna, exceto a primeira. É frequentemente usado para nomear variáveis e funções. É uma prática importante para tornar o código mais legível e consistente.',
    img: camel,
    exemplos: [
        {
            titulo: 'Variáveis',
            texto: "numeroDeEstudantes" 
        },
        {
            titulo: 'Variáveis',
            texto: 'nomeComplet' 
        },
        {
            titulo: 'Variáveis',
            texto: 'quantidadeItens'
        }
    ],
    curiosidades: [
        {
            titulo: 'Origem do nome',
            texto: 'O termo \'Camel Case\' foi cunhado devido à semelhança visual das letras maiúsculas no meio da palavra com as corcovas de um camelo.'
        },
        {
            titulo: 'Uso em marcas',
            texto: 'Algumas marcas registradas utilizam o Camel Case em seus nomes, como iPhone e eBay. Essa escolha pode ajudar a destacar e distinguir a marca.'
        }
    ]
}

export default camelInformation;