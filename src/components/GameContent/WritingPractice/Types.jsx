import './types.css'
import Cards from './Cards/Cards'

const cards = [
    {
      snakeCase: {
        img: 'src/assets/cards/snake.png',
        title: 'Snake Case',
        type: 'snake_case',
        linguage: 'Python'
      },
      camelCase:{
        img: "src/assets/cards/camel.png",
        title: 'Camel Case',
        type: 'camelCase',
        linguage: 'Java, C#'
      },
      kebabCase:{
          img: "src/assets/cards/kebab.png",
          title: 'Kebab Case',
          type: 'kebab-case',
          linguage: 'URLs de sites'
      },
      pascalCase:{
          img: "src/assets/cards/pascal.png",
          title: 'Pascal Case',
          type: 'PascalCase',
          linguage: 'C#'
      }
    },
  ];

function Types() {

    const snakeCaseName = cards.map((x)=>x.snakeCase.title)
    const snakeCaseImg = cards.map((x)=>x.snakeCase.img)
    const snakeCaselinguage = cards.map((x)=>x.snakeCase.linguage)
    const snakeCaseType= cards.map((x)=>x.snakeCase.type)

    const camelCaseName = cards.map((x)=>x.camelCase.title)
    const camelCaseImg = cards.map((x)=>x.camelCase.img)
    const camelCaselinguage = cards.map((x)=>x.camelCase.linguage)
    const camelCaseType= cards.map((x)=>x.camelCase.type)

    const kebabCaseName = cards.map((x)=>x.kebabCase.title)
    const kebabCaseImg = cards.map((x)=>x.kebabCase.img)
    const kebabCaselinguage = cards.map((x)=>x.kebabCase.linguage)
    const kebabCaseType= cards.map((x)=>x.kebabCase.type)

    const pascalCaseName = cards.map((x)=>x.pascalCase.title)
    const pascalCaseImg = cards.map((x)=>x.pascalCase.img)
    const pascalCaselinguage = cards.map((x)=>x.pascalCase.linguage)
    const pascalCaseType= cards.map((x)=>x.pascalCase.type)

    return (
        <div className="typesModeling">
            <h2>Práticas de Escrita</h2>
            <section className='teste'>
                <a href=""><Cards name={snakeCaseName} img = {snakeCaseImg} type={snakeCaseType} linguage={snakeCaselinguage}/></a>
                <a href="" id='camel'><Cards  name={camelCaseName} img = {camelCaseImg} type={camelCaseType} linguage={camelCaselinguage}/></a>
                <a href="" id='kebab'><Cards  name={kebabCaseName} img = {kebabCaseImg} type={kebabCaseType} linguage={kebabCaselinguage}/></a>
                <a href="" id='pascal'><Cards name={pascalCaseName} img = {pascalCaseImg} type={pascalCaseType} linguage={pascalCaselinguage}/></a>
            </section>
        </div>
        
    
    );
  }
  export default Types;
  