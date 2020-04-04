import React from "react";
import options from "../data.js";

const Button = ({ content, string, setUserOption, setComputerOption }) => {
  const getCorrectContent = (idToCompare) => {
    return options.find((option) => option.id === idToCompare).content;
  };
  const onClickFn = () => {
    setUserOption(getCorrectContent(string));
    const randomOption = options[Math.floor(Math.random() * 3)].id;
    setComputerOption(getCorrectContent(randomOption));
  };
  return (
    <button className="button whiteSmoke" onClick={onClickFn}>
      {content}
    </button>
  );
};

export default Button;
