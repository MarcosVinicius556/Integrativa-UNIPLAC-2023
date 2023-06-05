import snake from './cards/snake.png';
import camel from './cards/camel.png';
import kebab from './cards/kebab.png';
import pascal from './cards/pascal.png';

import programing from './cards/programing.png';
import coding from './cards/coding.png';
import programingCourse from './cards/programming-course.png';
import data from './cards/data.png';

export const listCardsSintax = [
    {
      name: 'Snake Case',
      img: snake,
      titleOne: 'Forma de Uso',
      obsOne: 'snake_case',
      titleTwo: 'Muito usado em',
      obsTwo: 'Python',
      className: 'snake_case',
      cardColor: 'rgb(77, 91, 112)'
    },
    {
      name: 'Camel Case', 
      img: camel,
      titleOne: 'Forma de Uso',
      obsOne: 'camelCase',
      titleTwo: 'Muito usado em',
      obsTwo: 'Java, C#',
      className: 'camelCase',
      cardColor: 'rgb(77, 91, 112)'
    },
    {
      name: 'Kebab Case',
      img: kebab,
      titleOne: 'Forma de Uso',
      obsOne: 'kebab-case',
      titleTwo: 'Muito usado em',
      obsTwo: 'URLs de sites',
      className: 'kebab-case',
      cardColor: 'rgb(77, 91, 112)'
    },
    {
      name: 'Pascal Case',
      img: pascal,
      titleOne: 'Forma de Uso',
      obsOne: 'PascalCase',
      titleTwo: 'Muito usado em',
      obsTwo: 'C#',
      className: 'PascalCase',
      cardColor: 'rgb(77, 91, 112)'
    }
  ];

export const listCardsLanguages = [
  {
    name: 'If',
    img: programing,
    titleOne: 'Importância',
    obsOne: '5',
    titleTwo: 'Dificuldade',
    obsTwo: '2',
    className: 'modelIf',
    cardColor: '#404040'
  },
  {
    name: 'For', 
    img: coding,
    titleOne: 'Importância',
    obsOne: '5',
    titleTwo: 'Dificuldade',
    obsTwo: '1',
    className: 'modelFor',
    cardColor: '#404040'
  },
  {
    name: 'Foreach',
    img: programingCourse,
    titleOne: 'Importância',
    obsOne: '4',
    titleTwo: 'Dificuldade',
    obsTwo: '3',
    className: 'modelForeach',
    cardColor: '#404040'
  },
  {
    name: 'While',
    img: data,
    titleOne: 'Importância',
    obsOne: '5',
    titleTwo: 'Dificuldade',
    obsTwo: '2',
    className: 'modelWhile',
    cardColor: '#404040'
  }
];
