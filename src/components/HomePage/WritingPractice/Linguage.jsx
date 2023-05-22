import "./types.css";
import cards from '../../../assets/cards';//"../../../assets/cards";
import Cards from './Cards/Cards';//"./Cards/Cards";
import { useRef } from "react"; 

function Language() {

  const carousel = useRef(null);

  const ifCaseName = cards.map((x) => x.modelIf.title);
  const ifCaseImg = cards.map((x) => x.modelIf.img);
  const ifCaseimportant = cards.map((x) => x.modelIf.important);
  const ifCasedificult = cards.map((x) => x.modelIf.dificult);
  const classNameIf = cards.map((x) => x.modelIf.className);

  const forCaseName = cards.map((x) => x.modelFor.title);
  const forCaseImg = cards.map((x) => x.modelFor.img);
  const forCaseimportant = cards.map((x) => x.modelFor.important);
  const forCasedificult = cards.map((x) => x.modelFor.dificult);
  const classNameFor = cards.map((x) => x.modelFor.className);

  const foreachCaseName = cards.map((x) => x.modelForeach.title);
  const foreachCaseImg = cards.map((x) => x.modelForeach.img);
  const foreachCaseimportant = cards.map((x) => x.modelForeach.important);
  const foreachCasedificult = cards.map((x) => x.modelForeach.dificult);
  const classNameForeach = cards.map((x) => x.modelForeach.className);

  const whileCaseName = cards.map((x) => x.modelWhile.title);
  const whileCaseImg = cards.map((x) => x.modelWhile.img);
  const whileCaseimportant = cards.map((x) => x.modelWhile.important);
  const whileCasedificult = cards.map((x) => x.modelWhile.dificult);
  const classNameWhile = cards.map((x) => x.modelWhile.className);

  const textOne = cards.map((x) => x.textLinguage.textOne);
  const textTwo = cards.map((x) => x.textLinguage.textTwo);

  const handleLeftClick = (e)=>{
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;

  }
 const handleRigthClick = (e)=>{
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <div className="typesModeling">
      <h2 className="title-model">Estrutura Condicionais e de Repetição</h2>
        <section className="cards-types" ref={carousel}>
          <a href="">
            <Cards
              name={ifCaseName}
              img={ifCaseImg}
              linguage={ifCasedificult}
              type={ifCaseimportant}
              textOne={textOne}
              textTwo={textTwo}
              className={classNameIf}
            />
          </a>
          <a href="">
            <Cards
              name={forCaseName}
              img={forCaseImg}
              linguage={forCasedificult}
              type={forCaseimportant}
              textOne={textOne}
              textTwo={textTwo}
              className={classNameFor}
            />
          </a>
          <a href="">
            <Cards
              name={foreachCaseName}
              img={foreachCaseImg}
              linguage={foreachCasedificult}
              type={foreachCaseimportant}
              textOne={textOne}
              textTwo={textTwo}
              className={classNameForeach}
            />
          </a>
          <a href="">
            <Cards
              name={whileCaseName}
              img={whileCaseImg}
              linguage={whileCasedificult}
              type={whileCaseimportant}
              textOne={textOne}
              textTwo={textTwo}
              className={classNameWhile}
            />
          </a>
          <a href="">
            <Cards
              name={whileCaseName}
              img={whileCaseImg}
              linguage={whileCasedificult}
              type={whileCaseimportant}
              textOne={textOne}
              textTwo={textTwo}
              className={classNameWhile}
            />
          </a>
        </section>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img src="src\assets\cards\Icone-seta.png" alt="" />
          </button> 
          <button className="esquerda" onClick={handleRigthClick}>
            <img src="src\assets\cards\Icone-seta.png" alt="" />
          </button>
        </div>
      </div>
  );
}

export default Language;
