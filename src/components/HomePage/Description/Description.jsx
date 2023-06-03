import "./description.css";
import Objective from "./Objective/Subtitle";
import Text from "./Objective/Text";

function Description() {
  return (
    <div className="row">
      <div className="objective col-12">
        <div className="col-11 bodyObjective">
          <Objective />
          <Text />
        </div>
      </div>
    </div>
  );
}
export default Description;
