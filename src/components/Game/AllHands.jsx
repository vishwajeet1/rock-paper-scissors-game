import React from "react";
import HandCardCircle from "./../Hands/HandCardCircle";
import triangle from "../static/images/bg-triangle.svg";
import { HAND_DATA } from "../Game";

function AllHands({ handleSelectHand }) {
  return (
    <div className="flex justify-center flex-col items-center py-12 md:py-24">
      <div className="flex flex-col">
        <div className="flex justify-between"></div>
        <div className="flex justify-center items-start">
          <div className="relative">
            <div
              className="absolute"
              style={{ transform: "translate(-50%,-50%)" }}
            >
              <HandCardCircle
                handleSelectHand={handleSelectHand}
                hands={HAND_DATA.rock}
              ></HandCardCircle>
            </div>
          </div>
          <img src={triangle} className="w-1/2 md:w-3/4"></img>
          <div className="relative">
            <div
              className="absolute"
              style={{ transform: "translate(-50%,-50%)" }}
            >
              <HandCardCircle
                handleSelectHand={handleSelectHand}
                hands={HAND_DATA.paper}
              ></HandCardCircle>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative">
          <div
            className="absolute"
            style={{ transform: "translate(-50%,-50%)" }}
          >
            <HandCardCircle
              handleSelectHand={handleSelectHand}
              hands={HAND_DATA.scissors}
            ></HandCardCircle>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllHands;
