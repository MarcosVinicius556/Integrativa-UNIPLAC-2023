import './home.css'
import Header from '../../GameContent/HeaderPage/Header'
import Description from '../Description/Description';
import Types from '../WritingPractice/Types';


function Main(){
    return(
        <div className='Home'>
            <Header/>
            <Description/>
            <Types/>

        </div>

    )
}
export default Main