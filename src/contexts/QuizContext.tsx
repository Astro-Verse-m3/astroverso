import React, { createContext, useState } from "react";

interface iContextInterface {
  myQuiz: iMyQuiz | null;
  setMyQuiz: React.Dispatch<React.SetStateAction<iMyQuiz | null>>;

  answerSelected: null | iAnswer;
  setAnswerSelected: React.Dispatch<React.SetStateAction<null | iAnswer>>;
}
interface iMyOptions {
  answer: string;
  point: number;
}

export interface iMyQuests {
  id: number;
  title: string;
  options: iMyOptions[];
}

interface iMyQuiz {
  questions: iMyQuests[];
}

interface iAnswer {
  point: number;
}

export interface iProps {
  children: React.ReactNode;
}

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
