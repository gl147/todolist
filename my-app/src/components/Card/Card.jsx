import "./Card.css";
import Avatar from "./Avatar/Avatar";
import Button from "./Button/Button";

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <div className="from-to">
        <Avatar url={props.element.senderAvaURL} />
        <div className="sender-name">{props.element.senderName}</div>
        <div className="to">TO</div>
        <Avatar url={props.element.receiverAvaURL} />
        <div className="receiver-name">{props.element.receiverName}</div>
      </div>
      <div className="message">{props.element.message}</div>
      <div className="respond-options">
        <Button text="Chop Wood, Carry Water" />
        <Button text="Ship, Shipmate, Self" />
      </div>
    </div>
  );
};

export default Card;
