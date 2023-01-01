import React, { useContext, useEffect, useMemo } from "react";
import { QuizContext } from "../../../contexts/QuizContext";
import { QuizModalContext } from "../../../contexts/QuizModalContext";

import { ApiRequests } from "../../../services/ApiRequest";
import { iMyQuests } from "../../../contexts/typeContext";
import produce from "immer";
import { DivQuiz, Option, Proximo } from "./stylesQuiz";
import { StyledButton } from "../../../styles/button";
import toast from "react-hot-toast";
import { StyledTitle } from "../../../styles/typography";

// O CONTEUDO DESTA PAGINA  DEVE SER ATRIBUIDO AO CONTEUDO DE DENTRO DO MODAL

export const Quiz = () => {
  const {
    myQuiz,
    setMyQuiz,
    answerSelected,
    setAnswerSelected,
    limitQuest,
    setLimitQuest,
  } = useContext(QuizContext);

  const {
    points,
    currentQuest,
    modalContents,
    answerQuestion,
    setCurrentQuest,
    setShowModal,
    showModal,
  } = useContext(QuizModalContext);

  const token = localStorage.getItem("@astroverso:token");

  useEffect(() => {
    (async () => {
      try {
        if (modalContents === "todos") {
          const response = await ApiRequests.get(`/quiz`);
          const planetsQuest = response.data[0].questions;
          const starQuest = response.data[1].questions;
          setMyQuiz(planetsQuest.concat(starQuest));
        } else {
          const response = await ApiRequests.get(
            `/quiz/?category=${modalContents}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setMyQuiz(response.data[0].questions);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const quests = useMemo(
    () =>
      produce(myQuiz, (draft: iMyQuests[] | null) => {
        if (draft) {
          let newChosenQuests = [] as iMyQuests[];
          let numberQuests = 10;
          if (modalContents === "estrelas") {
            numberQuests = 5;
          }
          for (let i = 0; i < numberQuests; i++) {
            let chosen = Math.floor(Math.random() * draft.length);
            newChosenQuests.push(draft[chosen]);
            draft = draft.filter((elem, i) => i !== chosen);
          }
          return newChosenQuests;
        } else {
          return null;
        }
      }),
    [myQuiz]
  );

  if (modalContents === "estrelas") {
    setLimitQuest(5);
  } else {
    setLimitQuest(10);
  }

  const id = localStorage.getItem("@astroverso:id");

  const sendPoints = (Points: number) => {
    try {
      ApiRequests.patch(`users/${id}`, {
        score: Points,
      });
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };

  return (
    <>
      {quests && (
        <>
          <StyledTitle
            tag="p"
            color="two"
            fontSize="four"
            className="question"
            align="two"
            margin="three"
          >
            {quests[currentQuest]?.title}
          </StyledTitle>
          <div className="option">
            {quests[currentQuest]?.options?.map(({ answer, point }, i) => (
              <Option
                key={i}
                disabled={answerSelected ? true : false}
                type="button"
                onClick={() => {
                  setAnswerSelected({ point });
                }}
                className={answerSelected && point > 0 ? "correct" : ""}
              >
                {answer}
              </Option>
            ))}
          </div>
          {answerSelected && (
            <Proximo
              type="button"
              onClick={() => {
                answerQuestion(answerSelected.point);
                setAnswerSelected(null);
                setCurrentQuest(currentQuest + 1);
              }}
            >
              Próximo
            </Proximo>
          )}
        </>
      )}
      {currentQuest >= limitQuest ? (
        <DivQuiz>
          <img
            src={require("../../../assets/premio.png")}
            alt="Quiz Finalizado"
          />
          <StyledTitle tag="p" color="two" fontSize="four">
            Parabéns, você finalizou o quiz!
          </StyledTitle>
          {points / 2 !== limitQuest ? (
            <>
              {points === 0 ? (
                <StyledTitle
                  tag="p"
                  color="two"
                  fontSize="four"
                  className="question"
                >
                  Que pena você errou todas as {limitQuest} perguntas. 
                </StyledTitle>
              ) : (
                <>
                  {points / 2 <= 3 ? (
                    <StyledTitle
                      tag="p"
                      color="two"
                      fontSize="four"
                      className="question"
                    >
                      É bom dar uma estudada!! Você acertou apenas {points / 2}/
                      {limitQuest === 10 ? <>10</> : <>5</>} perguntas
                    </StyledTitle>
                  ) : (
                    <StyledTitle
                      tag="p"
                      color="two"
                      fontSize="four"
                      className="question"
                    >
                      Você acertou {points / 2}/
                      {limitQuest === 10 ? <>10</> : <>5</>} perguntas
                    </StyledTitle>
                  )}
                </>
              )}
            </>
          ) : (
            <StyledTitle
              tag="p"
              color="two"
              fontSize="four"
              className="question"
            >
              Nossa que incrivel!! Você acertou todas as perguntas
            </StyledTitle>
          )}
          <StyledButton
            margin="one"
            onClick={() => {
              sendPoints(0);
              setShowModal(!showModal);
              setCurrentQuest(0);
            }}
          >
            Finalizar Quiz
          </StyledButton>
        </DivQuiz>
      ) : (
        false
      )}
    </>
  );
};
