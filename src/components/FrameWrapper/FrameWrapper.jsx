/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FrameWrapper = ({
  className,
  overlapGroupClassName,
  text = "50+",
  text1 = "КЛУБОВ",
  text2 = "Возможность создавать <br/>и вступать в книжные клубы",
  divClassName,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div className={`frame-wrapper ${className}`}>
      <div className={`overlap-group-6 ${overlapGroupClassName}`}>
        <div className={`element ${divClassNameOverride}`}>{text}</div>

        <div className={`text-wrapper-5 ${divClassName1}`}>{text1}</div>

        <p className={`p ${divClassName}`}>{text2}</p>
      </div>
    </div>
  );
};

FrameWrapper.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
