/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { FrameWrapper } from "../FrameWrapper";
import "./style.css";

export const Frame512946 = ({
  property1,
  className,
  frameWrapperText = "Возможность создавать <br/>и вступать в книжные клубы",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`frame-512946 ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <FrameWrapper
        className="frame-512859-instance"
        divClassName={`${state.property1 === "variant-2" && "class-14"}`}
        divClassName1={`${state.property1 === "variant-2" && "class-14"}`}
        divClassNameOverride={`${state.property1 === "variant-2" && "class-14"}`}
        overlapGroupClassName={`${state.property1 === "variant-2" ? "class-12" : "class-13"}`}
        text="15+"
        text1="ПОДБОРОК"
        text2={frameWrapperText}
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Frame512946.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  frameWrapperText: PropTypes.string,
};
