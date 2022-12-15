import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="ava-img">
      <img src={props.avaURL} alt="" />
    </div>
  );
};

export default Avatar;
