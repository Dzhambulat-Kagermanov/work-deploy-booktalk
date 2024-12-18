/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({
  className,
  text = "ВСТУПИТЬ В КЛУБ",
  divClassName,
}) => {
  return (
    <div className={`frame ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </div>
  );
};

Frame.propTypes = {
  text: PropTypes.string,
};
