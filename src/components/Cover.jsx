import "../styles/Cover.css";
import { Link } from "react-router-dom";

const Cover = ({ imageSrc }) => {
  return (
    <div className="cover">
      <img src={imageSrc} alt="Travel" className="cover__image" />
      <div className="btn-container">
        <Link to={"/donate"} className="donate-btn" role="button">
          Donate
        </Link>
      </div>
      <h1 className="navbar__logo">plant a tree</h1>
      <h1 className="cover__title">Save environment.</h1>
    </div>
  );
};

export default Cover;
