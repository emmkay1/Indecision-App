import React from "react";
import "../Styles/Action.scss";

const Action = (props) => (
  <div>
    <button
      className={`big-btn ${!props.options[0] ? "disabled" : ""}`}
      onClick={props.handlePick}
      disabled={!props.options[0]}
    >
      What should I do?
    </button>
  </div>
);

export default Action;
