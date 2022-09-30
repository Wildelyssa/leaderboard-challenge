import "./Leaderboard.css";
import Player from "./Player";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "./Error";

const Leaderboard = () => {
  //Set State
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //API call
    const APIurl = "PLACEHOLDER";
    fetch(APIurl)
      .then((response) => response.json())
      .then((respData) => {
        setData(respData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="leaderboard_container">
      {error ? (
        <Error />
      ) : (
        // map player components and links to profiles
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              {data.map((player, i) => (
                <Link to="/profile" state={{ data: data[i] }}>
                  <Player
                    id={i}
                    rank={player.rank}
                    number={i + 1}
                    name={player.name}
                    score={player.points}
                    rankTier={player.rankTier}
                  />
                </Link>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Leaderboard;
