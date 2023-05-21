import './types.css'
import Cards from './Cards/Cards'
import cards from '../../../assets/cards'

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

    const textOne = cards.map((x)=>x.textWriting.textOne);
    const textTwo = cards.map((x)=>x.textWriting.textTwo);


      return (
        <div className="typesModeling">
            <h2 className='title-model'>Práticas de Escrita</h2>
            <section className='cards-types'>
                <a href=""><Cards name={snakeCaseName} img = {snakeCaseImg} type={snakeCaseType} linguage={snakeCaselinguage} textOne={textOne} textTwo={textTwo} className={snakeCaseType}/></a>
                <a href=""><Cards  name={camelCaseName} img = {camelCaseImg} type={camelCaseType} linguage={camelCaselinguage} textOne={textOne} textTwo={textTwo} className={camelCaseType}/></a>
                <a href=""><Cards  name={kebabCaseName} img = {kebabCaseImg} type={kebabCaseType} linguage={kebabCaselinguage} textOne={textOne} textTwo={textTwo} className={kebabCaseType}/></a>
                <a href=""><Cards name={pascalCaseName} img = {pascalCaseImg} type={pascalCaseType} linguage={pascalCaselinguage} textOne={textOne} textTwo={textTwo} className={pascalCaseType}/></a>
            </section>
        </div>
        
    
    );
   
  }
  export default Types;
