/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { FrameWrapper } from "../FrameWrapper";
import "./style.css";

export const Frame512967 = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`frame-512967 ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <FrameWrapper
        className="frame-instance"
        divClassName={`${state.property1 === "variant-2" ? "class-10" : "class-11"}`}
        divClassName1={`${state.property1 === "variant-2" && "class-9"}`}
        divClassNameOverride={`${state.property1 === "variant-2" && "class-9"}`}
        overlapGroupClassName={`${state.property1 === "variant-2" ? "class-7" : "class-8"}`}
        text="50+"
        text1="КЛУБОВ"
        text2={
          <>
            Возможность создавать <br />и вступать в книжные клубы
          </>
        }
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

Frame512967.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};