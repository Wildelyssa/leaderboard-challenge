import "./Player.css";
import RankIcon from "./RankIcon";
import starIcon from "../Images/Star-Icon.png";

const Player = (props) => {
  const index = props.id;
  //Establish character limit for rendering names
  const name = props.name;
  const characterLimit = 25;
  const shortName = name.slice(0, characterLimit);
  const playerName =
    name.length > characterLimit ? shortName + "..." : shortName;

  return (
    <div className="player_container">
      {/* set conditional class to highlight 0-2 in array with gradient border */}
      <div
        className={
          index >= 3
            ? "player-row_container border"
            : "player-row_container gradient"
        }
      >
        <div className="row">
          <div className="player-row">
            <div className="player_number">{props.number}</div>
            <div className="player_name">{playerName}</div>
          </div>
          <div className="player-row player-row-width">
            <div className="player-row score">
              <img
                className="player_star-icon"
                src={starIcon}
                alt="Star Icon"
              />
              <div className="player_score">{props.score}</div>
            </div>
            <div className="player_rank">{props.rankTier}</div>
          </div>
        </div>
      </div>
      {/* pass props to load correct rank image/badge */}
      <RankIcon rank={props.rank} alt={props.rankTier} title={props.rankTier} />
    </div>
  );
};

export default Player;
