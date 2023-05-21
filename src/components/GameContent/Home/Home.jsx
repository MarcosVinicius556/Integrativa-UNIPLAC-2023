import './home.css'
import Header from '../../GameContent/HeaderPage/Header'
import Description from '../Description/Description';
import Types from '../WritingPractice/Types';
import FooterComponent from '../../FooterComponent/FooterComponent';
import Language from '../WritingPractice/Linguage';

function Main(){

    return(
        <div className='Home'>
            <header><Header/></header>
            <Description/>
            <Types/> 
            <Language/>
            <footer><FooterComponent/></footer>     
        </div>
    );
}
export default Main