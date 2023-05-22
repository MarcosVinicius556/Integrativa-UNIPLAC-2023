import "./objective.css";
import firstText from '../../../../assets/firstText';//"../../../../assets/firstText";

function Text() {
  let text = firstText.map((x) => x.object.meaning);
  return (
    <div className="textObjective">
      <p>{text}</p>
    </div>
  );
}
export default Text;
