import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import options from "./data.js";

function App() {
  const [userOption, setUserOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [score, setScore] = useState({ User: 0, Computer: 0 });

  useEffect(() => {
    if (userOption === options[0].content) {
      computerOption === options[1].content
        ? alert("You lost!")
        : computerOption === options[2].content && alert("You won!");
    } else if (userOption === options[1].content) {
      computerOption === options[2].content
        ? alert("You lost!")
        : computerOption === options[0].content && alert("You won!");
    } else {
      computerOption === options[0].content
        ? alert("You lost!")
        : computerOption === options[1].content && alert("You won!");
    }
  }, [userOption, computerOption]);

  return (
    <div className="wrapper">
      <div className="divToCenter">
        <div>User</div>
        <div>Computer</div>
        <h4>{score.User}</h4>
        <h4>{score.Computer}</h4>
      </div>
      <div className="halfScreenDiv lightGrey">
        <div className="divToCenter">
          <div className="threeOptions whiteSmoke">
            <div className="notSeenButton lightGrey"></div>
            <div className="notSeenButton lightGrey"></div>
            <div className="notSeenButton lightGrey"></div>
          </div>
        </div>
        <div className="divToCenter">
          <div className="notSeenButton whiteSmoke rotated">
            {computerOption}
          </div>
        </div>
      </div>
      <div className="halfScreenDiv whiteSmoke">
        <div className="divToCenter">
          <div className="notSeenButton lightGrey">{userOption}</div>
        </div>
        <div className="divToCenter">
          <div className="threeOptions lightGrey">
            {options.map((option) => {
              return (
                <Button
                  setUserOption={setUserOption}
                  setComputerOption={setComputerOption}
                  content={option.content}
                  string={option.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
