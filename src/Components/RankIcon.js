import "./RankIcon.css";

const RankIcon = (props) => {
  return (
    <div className="rank-icon_container">
      <div className="light-border">
        <img
          className="rank-icon"
          src={require(`../Images/Rank-icons/Rank=${props.rank}.png`)}
          alt={props.alt}
          title={props.title}
        />
      </div>
    </div>
  );
};

export default RankIcon;
