import "./HeaderSign.css";
import starIcon from "../Images/Star-Icon.png";


const HeaderSign = () => {
  return (
    <div className="header-sign">
      <h1 className="header-sign__title">Origin Leaderboard</h1>
      <div className="header-sign__season-box">
        <img
          className="header-sign__star-icon"
          src={starIcon}
          alt="Star Icon"
        />
        <h2 className="header-sign__sub-title">Season 0</h2>
        <img
          className="header-sign__star-icon"
          src={starIcon}
          alt="Star Icon"
        />
      </div>
    </div>
  );
};

export default HeaderSign;
