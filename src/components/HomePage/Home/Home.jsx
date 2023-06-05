import './home.css';
import { listCardsSintax } from '../../../assets/cards';
import Description from '../Description/Description';
import WritingPractice from '../WritingPractice/WritingPractice';

function Main(){ 

    return(
        <div className='corpo'>
            <Description/>
            <WritingPractice title="Práticas de Escrita" list={ listCardsSintax }/> 
            {/* <div className="separator"></div>
            <WritingPractice title="Estrutura Condicionais e de Repetição" list={ listCardsLanguages }/>  */}
        </div>
    );
}
export default Main