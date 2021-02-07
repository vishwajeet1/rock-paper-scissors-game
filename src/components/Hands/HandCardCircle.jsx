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
        return "red";
      case HAND_DATA.paper:
        return "yellow";
      default:
        return "purple";
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
          className={`z-40 rounded-full border-b-4 border-${colorBand(
            props.hands
          )}-800 bg-${colorBand(props.hands)}-500 p-${
            props.gamePlay ? "4" : "2"
          } md:p-${props.gamePlay ? "8" : "4"}`}
        >
          <div
            className={`rounded-full bg-white p-${
              props.gamePlay ? "8" : "4"
            } md:p-${
              props.gamePlay ? "12" : "8"
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
