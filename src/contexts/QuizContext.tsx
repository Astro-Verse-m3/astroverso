import React, { createContext, useState } from "react";
import { iAnswer, iContextInterface, iMyQuiz, iProps } from "./typeContext";

export const QuizContext = createContext({} as iContextInterface);

export const QuizProvider = ({ children }: iProps) => {
  const [myQuiz, setMyQuiz] = useState<iMyQuiz | null>(null);

  const [answerSelected, setAnswerSelected] = useState<iAnswer | null>(null);

  return (
    <QuizContext.Provider
      value={{ myQuiz, setMyQuiz, answerSelected, setAnswerSelected }}
    >
      {children}
    </QuizContext.Provider>
  );
};
