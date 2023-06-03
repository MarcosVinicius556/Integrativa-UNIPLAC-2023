import firstText from "../../../../assets/firstText"; //"../../../../assets/firstText";
import "./objective.css";

function Subtitle() {
  let subtitle = firstText.map((x) => x.object.subtitle);
  return (
    <div className="row col col-sm col-lg col-xs">
      <div className="row">
        <div className="logoSubtitle col-12">
          <h2>{subtitle}</h2>
        </div>
      </div>
      <div className="row">
      <div className="logoSubtitle col-12">
      <img src="src\assets\objective.jpeg" alt="" />
        </div>


      </div>
     
    </div>
  );
}
export default Subtitle;
