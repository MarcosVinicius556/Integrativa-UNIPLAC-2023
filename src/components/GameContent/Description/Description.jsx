import "./description.css"
import Objective from "./Objective/Subtitle";
import Text from "./Objective/Text";


function Description() {

    return (
        <div className="objective">
            <div className="bodyObjective">
                <Objective />
                <Text/>
            </div>

        </div>
    );
  }
  export default Description;