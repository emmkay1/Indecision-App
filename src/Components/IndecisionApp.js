import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";
import "../Styles/IndecisionApp.css";

IndecisionApp.defaultProps = {
  title: "Indecision",
  subtitle: "Put your life in the hands of chance"
};

export default function IndecisionApp(props) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(undefined);

  const handleAddOption = (option) => {
    if (!option) return "Enter a valid item.";
    else if (options.some((e) => e["option"] === option)) return "Item exists";
    setOptions([...options, { option, id: uuidv4() }]);
  };

  const handleRemoveAll = () => {
    setOptions([]);
  };

  const handleDeleteOption = (id) => {
    let filtered = options.filter((option) => option.id !== id);
    setOptions(filtered);
  };

  const handlePick = () => {
    let picked = options[Math.floor(Math.random() * options.length)];
    setSelectedOption(picked.option);
  };

  const handleCloseModal = () => {
    setSelectedOption(undefined);
  };

  useEffect(() => {
    let optionsData = JSON.parse(localStorage.getItem("options"));
    if (optionsData) setOptions(optionsData);
  }, []);

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  return (
    <div className="top-container">
      <Header title={props.title} subtitle={props.subtitle} />
      <Action options={options} handlePick={handlePick} />
      <div className="indecision-app">
        <Options
          hasOptions={options.length}
          options={options}
          handleRemoveAll={handleRemoveAll}
          handleDeleteOption={handleDeleteOption}
        />
        <AddOption handleAddOption={handleAddOption} />
      </div>
      <OptionModal
        selectedOption={selectedOption}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}
