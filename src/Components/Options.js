import React from "react";
import Option from "./Option";
import "../Styles/Options.css";

const Options = (props) => (
  <div>
    <div className="options-header">
      <p>Your Options</p>
      <div className="remove-all-btn" onClick={props.handleRemoveAll}>
        Remove All
      </div>
    </div>
    {!props.hasOptions && (
      <p className="no-options">Please add an option to get started!</p>
    )}
    {props.options.map((option, idx) => (
      <Option
        key={option.id}
        num={idx + 1}
        optionText={option.option}
        id={option.id}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
