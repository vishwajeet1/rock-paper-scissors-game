import React, { useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";
import ruleImage from "../static/images/image-rules.svg";
import closeIcon from "../static/images/icon-close.svg";
import "./style.css";
import { rule } from "postcss";

export default function Rules() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const { height, width } = useWindowDimensions();
  return (
    <div>
      {!modalIsOpen ? (
        <div className="fixed modalButton bottom-0 md:right-0">
          <div
            className="m-4 py-2 px-8 border rounded-lg text-white md:text-2xl cursor-pointer"
            onClick={() => setModalIsOpen(true)}
          >
            RULES
          </div>
        </div>
      ) : (
        <div
          className={`fixed w-full h-full bg-white top-0 z-80 ${
            width > 600 && "desktopModal"
          }`}
        >
          <>
            {width < 600 ? (
              <>
                <div className="flex flex-col items-center justify-around h-full z-50">
                  <div className="flex justify-center text-2xl text-gray-500 font-bold">
                    RULES
                  </div>
                  <img src={ruleImage} alt={"rule"} />
                  <img
                    src={closeIcon}
                    className="cursor-pointer"
                    alt={"closeIcon"}
                    onClick={() => setModalIsOpen(false)}
                  />
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full backgroundBlur">
                <div className="bg-white px-12 py-4 rounded-lg">
                  <div className="flex justify-between items-center pt-2 pb-4">
                    <div className="text-2xl text-gray-500 font-bold">
                      RULES
                    </div>
                    <img
                      src={closeIcon}
                      className="cursor-pointer"
                      onClick={() => setModalIsOpen(false)}
                      alt={"closeIcon"}
                    />
                  </div>
                  <img src={ruleImage} alt={"rules"} />
                </div>
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
}
