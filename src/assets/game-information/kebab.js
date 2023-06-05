import kebab from '../cards/kebab.png';

const kebabInformation = {
    id: 2,
    nome: "Kebab Case",
    textoSobre: "No Kebab Case as palavras são separadas por hifens ('-'). É um dos casos de uso comuns para nomear variáveis, identificadores e arquivos em programação. É semelhante ao Snake Case, onde as palavras são separadas por underscores ('_').",
    img: kebab,
    exemplos: [
        {
            titulo: "Variáveis",
            texto: "cor-de-fundo" 
        },
        {
            titulo: "Variáveis",
            texto: "id-do-elemento" 
        },
        {
            titulo: "Variáveis",
            texto: "texto-em-destaque" 
        }
    ],
    curiosidades: [
        {
            titulo: "Origem do nome",
            texto: "O termo 'Kebab Case' é uma referência aos kebabs, um prato da culinária do Oriente Médio que consiste em pedaços de carne ou vegetais grelhados em um espeto. A forma como os ingredientes são colocados no espeto e separados entre si se assemelha à forma como as palavras são separadas por hifens no Kebab Case."
        },
        {
            titulo: "Uso em URLs",
            texto: "O Kebab Case é frequentemente usado para criar URLs amigáveis para SEO (Search Engine Optimization) e para melhorar a legibilidade das URLs. As palavras separadas por hifens tornam-se mais fáceis de ler para os usuários e os mecanismos de pesquisa."
        }
    ]
}

export default kebabInformation;