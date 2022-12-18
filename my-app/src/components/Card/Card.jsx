import "./Card.scss";
import Avatar from "./Avatar/Avatar";
import Button from "./Button/Button";

const Card = ({ message }) => {
  return (
    <div className="card-wrapper">
      <div className="from-to">
        <Avatar url={message?.senderAvaURL} />
        <div className="sender-name">{message?.senderName}</div>
        <div className="to">TO</div>
        <Avatar url={message?.receiverAvaURL} />
        <div className="receiver-name">{message?.receiverName}</div>
      </div>
      <div className="message">{message?.message}</div>
      <div className="respond-options">
        <Button text="Chop Wood, Carry Water" />
        <Button text="Ship, Shipmate, Self" />
      </div>
    </div>
  );
};

export default Card;
