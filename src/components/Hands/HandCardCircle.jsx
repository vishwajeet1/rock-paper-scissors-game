import React from "react";
import rock from "../static/images/icon-rock.svg";
import paper from "../static/images/icon-paper.svg";
import scissors from "../static/images/icon-scissors.svg";
import triangle from "../static/images/bg-triangle.svg";
import { HAND_DATA } from "../Game";
import "./style.css";

export default function HandCardCircle(props) {
  const handleClickEvent = (hands) => {
    if (props.handleSelectHand) {
      props.handleSelectHand(hands);
    }
  };

  const currentIcons = (currentHand) => {
    if (currentHand === HAND_DATA.paper) {
      return paper;
    }
    if (currentHand === HAND_DATA.rock) {
      return rock;
    }
    return scissors;
  };

  const colorBand = (currentHand) => {
    switch (currentHand) {
      case HAND_DATA.rock:
        return {
          border: "border-red-800",
          bg: "bg-red-500",
        };
      case HAND_DATA.paper:
        return {
          border: "border-yellow-800",
          bg: "bg-yellow-500",
        };
      default:
        return {
          border: "border-purple-800",
          bg: "bg-purple-500",
        };
    }
  };

  return (
    <div>
      <div
        className={`relative flex justify-center cursor-pointer ${
          props.style ? props.style : ""
        }`}
        onClick={() => handleClickEvent(props.hands)}
      >
        {props.winner && (
          <span class="top-0 left-0 absolute animate-ping-1 inline-flex h-full w-full rounded-full bg-white opacity-75 z-10"></span>
        )}
        <div
          className={`z-40 rounded-full border-b-4 ${
            colorBand(props.hands).border
          } ${colorBand(props.hands).bg} ${props.gamePlay ? "p-4" : "p-2"} ${
            props.gamePlay ? "md:p-8" : "md:p-4"
          }`}
        >
          <div
            className={`rounded-full bg-white ${
              props.gamePlay ? "p-8" : "p-4"
            } ${
              props.gamePlay ? "md:p-12" : "md:p-8"
            } border-t-4 border-lightgray-400`}
          >
            <img
              src={currentIcons(props.hands)}
              className="max-w-sm w-4 h-4 md:w-12 md:h-12"
              alt={"hands"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
