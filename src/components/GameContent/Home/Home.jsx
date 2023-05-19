import './home.css'
import GamePage from '../../../routes/GamePage';
import Header from '../../GameContent/HeaderPage/Header'
import Objective from '../Objective/Objective';


function Main(){
    return(
        <div className='Home'>
            <Header/>
            <Objective/>
           <GamePage/>
        </div>

    )
}
export default Main