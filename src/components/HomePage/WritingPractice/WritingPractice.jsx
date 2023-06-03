import './writing-practice.css';
import Carousel from './Carousel/WritingCarousel';

// eslint-disable-next-line react/prop-types
function WritingPractice({ title, list }) {
    return(
        <div className="writing-container">
            <h1 className="title-model">{ title }</h1>
            <Carousel list={ list }/>
        </div>
    );
}

export default WritingPractice;