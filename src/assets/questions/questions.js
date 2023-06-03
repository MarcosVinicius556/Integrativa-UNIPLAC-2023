import nomenclaturas from "./nomeclatures";

const questoes = [
    {
      question: {
        nomenclature: nomenclaturas[0],
        name: 'Pão de Açucar',
        answer: 'PaoDeAcucar',
        help: `Dica sobre ${nomenclaturas[0].name}`
      }
      
    },
    {
      question: {
        nomenclature: nomenclaturas[1],
        name: 'Contador de erros',
        answer: '_contadorDeErros',
        help: `Dica sobre ${nomenclaturas[1].name}`
      }
    },
    {
      question: {
        nomenclature: nomenclaturas[2],
        name: 'Método para testes',
        answer: 'metodoParaTestes',
        help: `Dica sobre ${nomenclaturas[2].name}`
      }
    },
  ];

export default questoes;