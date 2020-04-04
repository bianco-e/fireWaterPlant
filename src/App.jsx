import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import options from "./data.js";

function App() {
  const [userOption, setUserOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const emptyChosenOptions = () => {
    setUserOption("");
    setComputerOption("");
  };

  const restartScores = () => {
    setUserScore(0);
    setComputerScore(0);
  };

  const fire = options[0];
  const water = options[1];
  const plant = options[2];

  useEffect(() => {
    if (userScore === 3) {
      alert("You win!");
      restartScores();
    }
    if (computerScore === 3) {
      alert("You lose!");
      restartScores();
    }
  }, [userScore, computerScore]);

  useEffect(() => {
    setTimeout(() => {
      if (userOption === fire.content) {
        if (computerOption === water.content) {
          alert("Water turned you off!");
          setComputerScore(computerScore + 1);
          emptyChosenOptions();
        } else if (computerOption === plant.content) {
          alert("You burnt the plant!");
          setUserScore(userScore + 1);
          emptyChosenOptions();
        } else {
          emptyChosenOptions();
        }
      } else if (userOption === water.content) {
        if (computerOption === plant.content) {
          alert("Plant absorbed you!");
          setComputerScore(computerScore + 1);
          emptyChosenOptions();
        } else if (computerOption === fire.content) {
          alert("You turned fire off!");
          setUserScore(userScore + 1);
          emptyChosenOptions();
        } else {
          emptyChosenOptions();
        }
      } else if (userOption === plant.content) {
        if (computerOption === fire.content) {
          alert("Fire burnt you!");
          setComputerScore(computerScore + 1);
          emptyChosenOptions();
        } else if (computerOption === water.content) {
          alert("You absorbed the water!");
          setUserScore(userScore + 1);
          emptyChosenOptions();
        } else {
          emptyChosenOptions();
        }
      }
    }, 400);
  }, [userOption, computerOption]);

  return (
    <div className="wrapper">
      <div className="scoreDiv">
        <h4>User</h4>
        <h4>Computer</h4>
        <h4>{userScore}</h4>
        <h4>{computerScore}</h4>
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
