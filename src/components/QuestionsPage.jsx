import React, { useState } from "react";

import { questions } from "../questions";

import Question from "./Question";

const QuestionsPage = ({
  score,
  setScore,
  setShowQuestionPage,
  setShowFinalPage,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <>
      <Question
        questionIndex={questionIndex}
        questions={questions}
        setQuestionIndex={setQuestionIndex}
        setShowQuestionPage={setShowQuestionPage}
        setShowFinalPage={setShowFinalPage}
        score={score}
        setScore={setScore}
      />
    </>
  );
};

export default QuestionsPage;
