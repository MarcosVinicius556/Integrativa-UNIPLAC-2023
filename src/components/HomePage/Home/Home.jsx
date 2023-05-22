import './home.css'
// import Header from '../../HeaderComponent/Header';//'../../GameContent/HeaderPage/Header'
import Description from '../Description/Description';//'../Description/Description';
import Types from '../WritingPractice/Types';//'../WritingPractice/Types';
import Language from '../WritingPractice/Linguage';
// import FooterComponent from '../../FooterComponent/FooterComponent';

function Main(){

    return(
        <div className='Home'>
            {/* <header><Header/></header> */}
            <Description/>
            <Types/> 
            <Language/>
            {/* <footer><FooterComponent/></footer>      */}
        </div>
    );
}
export default Main