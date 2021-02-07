import "./style.css";
import ScoreBoard from "../ScoreBoard";
import AllHands from "./AllHands";
import { useEffect, useState } from "react";
import _ from "lodash";
import GamePlay from "./GamePlay";
import Rules from "./Rules";

export const HAND_DATA = {
  paper: 1,
  rock: 2,
  scissors: 3,
};

export default Gamepad = () => {
  const [selectHand, setSelectHand] = useState(0);
  const [score, setScore] = useState(0);


  const handleSelectHand = (hand) => {
    setSelectHand(hand);
  };



  return (
    <div className="bgColor">
      <div>
        <ScoreBoard score={score}></ScoreBoard>
      </div>
      {!selectHand ? (
        <div>
          <AllHands handleSelectHand={handleSelectHand}></AllHands>
        </div>
      ) : (
        <div>
          <GamePlay hands={selectHand} setSelectHand={setSelectHand} setScore={setScore} />
        </div>
      )}
      <Rules></Rules>
    </div>
  );
};
