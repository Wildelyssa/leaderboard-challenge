import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Leaderboard.css";

import { useSelector, useDispatch } from "react-redux";
import { requestPlayerData } from "../Store/playersSlice";

import {
  REQUEST_PLAYER_DATA_IDLE,
  REQUEST_PLAYER_DATA_FAILED,
  REQUEST_PLAYER_DATA_SUCCESS,
  REQUEST_PLAYER_DATA_PENDING
} from '../Store/constants';

import Player from "./Player";
import Loader from "./Loader";
import Error from "./Error";

const Leaderboard = () => {
  const { players: { playerData, status } } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === REQUEST_PLAYER_DATA_IDLE) {
      dispatch(requestPlayerData());
    }
  }, [dispatch, status]);

  const isLoading = status === REQUEST_PLAYER_DATA_PENDING;
  const dataLoaded = status === REQUEST_PLAYER_DATA_SUCCESS;
  const isError = status === REQUEST_PLAYER_DATA_FAILED;

  let content;

  if(isLoading) {
    content = <Loader />
  } else if(dataLoaded) {
    content = playerData.map((player, i) => (
      <Link to="/profile" state={{ data: playerData[i] }}>
          <Player
            key={i}
            id={i}
            rank={player.rank}
            number={i + 1}
            name={player.name}
            score={player.points}
            rankTier={player.rankTier}
          />
      </Link>
    ))
  } else if(isError) {
    content = <Error />
  }

  return (
    <div className="leaderboard_container">
      {content}
    </div>
  );
};

export default Leaderboard;
