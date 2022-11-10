import React, { createContext, useState } from "react";
import { iAnswer, iContextInterface, iMyQuests, iProps } from "./typeContext";

export const QuizContext = createContext({} as iContextInterface);

export const QuizProvider = ({ children }: iProps) => {
  const [myQuiz, setMyQuiz] = useState<iMyQuests[] | null>(null);
  const [limitQuest, setLimitQuest] = useState(10 as number);
  const [answerSelected, setAnswerSelected] = useState<iAnswer | null>(null);

  return (
    <QuizContext.Provider
      value={{
        myQuiz,
        setMyQuiz,
        answerSelected,
        setAnswerSelected,
        limitQuest,
        setLimitQuest,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
