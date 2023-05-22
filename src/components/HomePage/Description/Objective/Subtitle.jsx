import firstText from '../../../../assets/firstText';//"../../../../assets/firstText";
import "./objective.css";

function Subtitle() {
  let subtitle = firstText.map((x) => x.object.subtitle);
  return (
    
      <div className="logoSubtitle">
        <h2>{subtitle}</h2>
        <img src="src\assets\objective.jpeg" alt="" />
      </div>
     
  );
}
export default Subtitle;
