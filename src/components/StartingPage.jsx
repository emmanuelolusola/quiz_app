import React from "react";
import Card from "./Card";

import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) => {
  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };

  return (
    <Card>
      <h1 className="header">Welcome to Quiz Game!</h1>
      <h1 className="primary_text">Please enter your username.</h1>
      <input
        type="text"
        className="username_input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="start_btn" onClick={startGame}>
        Let's Play
      </button>
      <p className="top_score">
        Top score: <span>{topScore}</span>
      </p>
    </Card>
  );
};

export default StartingPage;
