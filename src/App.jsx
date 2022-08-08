import "./App.css";
import QuestionsPage from "./components/QuestionsPage";
import StartingPage from "./components/StartingPage";
import FinalPage from "./components/FinalPage";
import { useState } from "react";

function App() {
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [username, setUsername] = useState("");

  return (
    <>
      {showStartingPage && (
        <StartingPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionsPage={setShowQuestionsPage}
          topScore={topScore}
          username={username}
          setUsername={setUsername}
        />
      )}
      {showQuestionsPage && (
        <QuestionsPage
          score={score}
          setScore={setScore}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
        />
      )}
      {showFinalPage && (
        <FinalPage
          score={score}
          setScore={setScore}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowStartingPage={setShowStartingPage}
          setShowFinalPage={setShowFinalPage}
          username={username}
          setUsername={setUsername}
        />
      )}
    </>
  );
}

export default App;
