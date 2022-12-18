import "./Avatar.scss";

const Avatar = ({ url }) => {
  return (
    <div className="ava-img">
      <img src={url} alt="" />
    </div>
  );
};

export default Avatar;
