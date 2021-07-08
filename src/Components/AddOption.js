import React, { useState } from "react";
import "../Styles/AddOption.css";

export default function AddOption(props) {
  const [option, setOption] = useState("");
  const [error, setError] = useState(undefined);

  const handleAddOption = (e) => {
    e.preventDefault();
    let error = props.handleAddOption(option.trim());
    setOption("");
    setError(error);
  };

  return (
    <div className="add-option">
      {/* {this.state.option} */}
      {error && <p>{error}</p>}
      <form onSubmit={handleAddOption}>
        <input
          className="add-input"
          type="text"
          name="option"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />
        <button className="add-btn">Add Option</button>
      </form>
    </div>
  );
}
