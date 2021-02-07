import React, { useState, useEffect } from "react";
import HandCardCircle from "../Hands/HandCardCircle";
import { HAND_DATA } from "../Game";
import _ from "lodash";
import "./style.css";

const winnerStatus = {
  winner: "WIN",
  lose: "LOSS",
  draw: "DRAW",
};

export default function GamePlay({ hands, setSelectHand, setScore }) {
  const [houseGame, setHouseGame] = useState(0);

  const gameEngine = (playerChoice, opponentChoice) => {
    if (playerChoice === opponentChoice) {
      return winnerStatus.draw;
    }
    switch (playerChoice) {
      case HAND_DATA.rock:
        return opponentChoice === HAND_DATA.scissors
          ? winnerStatus.winner
          : winnerStatus.lose;
      case HAND_DATA.paper:
        return opponentChoice === HAND_DATA.rock
          ? winnerStatus.winner
          : winnerStatus.lose;
      default:
        return opponentChoice === HAND_DATA.paper
          ? winnerStatus.winner
          : winnerStatus.lose;
    }
  };

  const resetGame = () => {
    setSelectHand(0);
  };

  const updateScore = (status) => {
    switch (status) {
      case winnerStatus.winner:
        setScore((state) => {
          return state + 3;
        });
        break;
      case winnerStatus.lose:
        setScore((state) => {
          return state - 1;
        });
        break;
      default:
    }
  };

  useEffect(() => {
    const selectedNumber = _.random(1, 3);
    setHouseGame(selectedNumber);
    const score = gameEngine(hands, selectedNumber);
    updateScore(score);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col-reverse md:flex-col justify-center items-center pr-4 md:pr-8 move-left">
          <div className="text-white md:text-5xl py-4 md:py-8">You Picked</div>
          <HandCardCircle
            gamePlay={true}
            hands={hands}
            winner={winnerStatus.winner === gameEngine(hands, houseGame)}
          ></HandCardCircle>
        </div>
        <div className="flex flex-col-reverse md:flex-col justify-center items-center pl-4 md:pl-8 move-right">
          <div className="text-white md:text-5xl py-4 md:py-8">
            The House Picked
          </div>
          <HandCardCircle
            gamePlay={true}
            hands={houseGame}
            winner={winnerStatus.winner === gameEngine(houseGame, hands)}
          ></HandCardCircle>
        </div>
      </div>
      <div className="flex justify-center items-center move-up">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl md:text-5xl text-white font-bold py-4">
            YOU {gameEngine(hands, houseGame)}
          </div>
          <div
            className="bg-white rounded-lg py-4 px-8 md:py-8 md:px-12 cursor-pointer"
            onClick={resetGame}
          >
            PLAY AGAIN
          </div>
        </div>
      </div>
    </>
  );
}
