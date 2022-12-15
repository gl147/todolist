import "./Card.css";
import Avatar from "./Avatar/Avatar";
import Button from "./Button/Button";

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <div className="from-to">
        <Avatar />
        <div className="sender-name">Eric Koslow</div>
        <div className="to">TO</div>
        <Avatar />
        <div className="receiver-name">Madison Kochenderfer</div>
      </div>
      <div className="message">
        Great job on that presentation to the Board yesterda' everybody was
        really impressed!
      </div>
      <div className="respond-options">
        <Button text="Chop Wood, Carry Water" />
        <Button text="Ship, Shipmate, Self" />
      </div>
    </div>
  );
};

export default Card;
