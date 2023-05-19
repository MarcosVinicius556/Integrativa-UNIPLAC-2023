import './home.css'
import GamePage from '../../../routes/GamePage';
import Header from '../../GameContent/HeaderPage/Header'


function Main(){
    return(
        <div className='Home'>
            <Header/>
            <div className='corpo'>
           <GamePage/>
           </div>
        </div>

    )
}
export default Main