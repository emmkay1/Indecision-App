import React from "react";
import "../Styles/Option.css";

const Option = (props) => (
  <div className="option-container">
    <div className="option-text">
      {props.num}. {props.optionText}
    </div>
    <div
      className="delete-btn"
      onClick={(e) => {
        props.handleDeleteOption(props.id);
      }}
    >
      Remove
    </div>
  </div>
);

export default Option;
