import "./PlayerCard.css";
import { useLocation } from "react-router-dom";
import RankIcon from "../RankIcon";
import starIcon from "../../Images/Star-Icon.png";
import Win from "../IconComponents/Win";
import Lose from "../IconComponents/Lose";
import PlayerVPlayer from "../IconComponents/PlayerVPlayer";
import PlayerVEnv from "../IconComponents/PlayerVEnv";

const PlayerCard = () => {
  // pass data to profile from Leaderboard
  const location = useLocation();
  const { data } = location.state;
  const battle = data.lastBattle;
  const outcome = battle.result;
  const { battleType } = battle;
  const battleEnd = battle.battleEnded;
  const formatEndDate =  battleEnd.replace('T', ' ')

  return (
    <div className="page-background player-card_container">
      <div className="player-card">
        {/* player info and bio */}
        <div className="player-card_name">{data.name}</div>
        <div className="player-card_rank-box">
          <RankIcon
            rank={data.rank}
            alt={data.rankTier}
            title={data.rankTier}
          />
          <p className="player-card_rank">{data.rankTier}</p>
        </div>
        <div className="player-card_bio">{data.bio}</div>
        <div className="player-card_rank player-card_talent">
          <img
            className="battle-stats_star-icon"
            src={starIcon}
            alt="star icon"
            title="star icon"
          />
          <p>
            <strong>Talent:</strong> {data.talent}
          </p>
        </div>
        {/* Last battle condtional win/lose pvp/pve elements */}
        <div className="last-battle_details">
          <div className="last-battle-details_title">
            <h2 className="player-card_results-header top-margin">
              Last Battle
            </h2>
            <h3 className='table-categories_date top-margin'>Concluded on: {formatEndDate}</h3>
          </div>
          <div className="last-battle_icons">
            {battleType === "pve" ? <PlayerVEnv /> : <PlayerVPlayer />}
            {battleType === "pve" ? (
              <h3 className="player-card_results-header">PvE</h3>
            ) : (
              <h3 className="player-card_results-header">PvP</h3>
            )}
          </div>
          <div className="last-battle_icons">
            {outcome === "W" ? <Win /> : <Lose />}
            {outcome === "W" ? (
              <h3 className="player-card_results-header">WON</h3>
            ) : (
              <h3 className="player-card_results-header">LOST</h3>
            )}
          </div>
          <div className="battle-stats_box">
            {/* Battle stats table */}
            <h2 className="player-card_results-header top-margin">
              Battle Stats
            </h2>
            <div className="battle-stats_table">
              <div className="battle-stats-table_column">
                <h3 className="column-header top-margin">Player</h3>
                <div className="table-categories_font">Points before</div>
                <div className="battle-stats_points">
                  <img
                    className="battle-stats_star-icon"
                    src={starIcon}
                    alt="Star Icon"
                  />
                  <span className="battle-stats_player-score">
                    {battle.playerPointsBefore}
                  </span>
                </div>
                <div className="table-categories_font">Points after</div>
                <div className="battle-stats_points">
                  <img
                    className="battle-stats_star-icon"
                    src={starIcon}
                    alt="Star Icon"
                  />
                  <span className="battle-stats_player-score">
                    {battle.playerPointsAfter}
                  </span>
                </div>
              </div>
              <div className="battle-stats-table_column">
                <h3 className="column-header top-margin">Opponent</h3>
                <div className="table-categories_font">Points before</div>
                <div className="battle-stats_points">
                  <img
                    className="battle-stats_star-icon"
                    src={starIcon}
                    alt="Star Icon"
                  />
                  <span className="battle-stats_player-score">
                    {battle.opponentPointsBefore}
                  </span>
                </div>
                <div className="table-categories_font">Points after</div>
                <div className="battle-stats_points">
                  <img
                    className="battle-stats_star-icon"
                    src={starIcon}
                    alt="Star Icon"
                  />
                  <span className="battle-stats_player-score">
                    {battle.opponentPointsAfter}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
