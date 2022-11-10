import React, { createContext, useState } from "react";
import { iProps, iQuizModalInterface } from "./typeContext";

export const QuizModalContext = createContext({} as iQuizModalInterface);

export const QuizModalProvider = ({ children }: iProps) => {
  const [showModal, setShowModal] = useState(false as boolean);
  const [modalContents, setModalContents] = useState<
    "todos" | "planetas" | "estrelas"
  >("todos");
  const [currentQuest, setCurrentQuest] = useState(0 as number);
  const [points, setPoints] = useState(0 as number);
  const [showPoints, setShowPoints] = useState(false as boolean);

  const answerQuestion = (point: number) => {
    setPoints(point + points);
  };
  return (
    <QuizModalContext.Provider
      value={{
        showModal,
        setShowModal,
        modalContents,
        setModalContents,
        currentQuest,
        setCurrentQuest,
        points,
        setPoints,
        showPoints,
        setShowPoints,
        answerQuestion,
      }}
    >
      {children}
    </QuizModalContext.Provider>
  );
};
