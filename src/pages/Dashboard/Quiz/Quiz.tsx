import React, { useContext, useEffect } from "react";
import { QuizContext } from "../../../contexts/QuizContext";
import { QuizModalContext } from "../../../contexts/QuizModalContext";

import HeaderMenu from "../../../components/Header/HeaderMenu/HeaderMenu";
import {StyledHomeContainer, FundoFixo, DivQuiz, CloseButton, Option, Proximo} from "./stylesQuiz"

// O CONTEUDO DESTA PAGINA  DEVE SER ATRIBUIDO AO CONTEUDO DE DENTRO DO MODAL

export const Quiz = () => {
  const { myQuiz, setMyQuiz, answerSelected, setAnswerSelected } = useContext(QuizContext);
  const {
     points,
     currentQuest,
     modalContents,
     answerQuestion,
     setCurrentQuest,
  } = useContext(QuizModalContext);
  const token = localStorage.getItem("@astroverso:token");
  useEffect(() => {
    (async () => {
      try {
        if (modalContents === "todos") {
          const response = await api.get(`/quiz`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const planetsQuest = response.data[0].questions;
          const starQuest = response.data[1].questions;
          setMyQuiz(planetsQuest.concat(starQuest));
       } else {
          const response = await api.get(`/quiz/?category=${modalContents}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
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
          if (modalContents === "estrela") {
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
  return (
    <>
      <StyledHomeContainer>
        <HeaderMenu />
        {quests && (
          <>
              <FundoFixo>
                <DivQuiz>
                  <CloseButton>
                    x
                  </CloseButton>
                  <h3 className="question">{quests[currentQuest]?.title}</h3>

                  <div className="options">
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
                </DivQuiz>
              </FundoFixo>
          </>
        )}

        {currentQuest >= 10 ? (
          <FundoFixo>
            <DivQuiz>
              <CloseButton>
                x
              </CloseButton>
              <img src={require('../../../assets/premio.png')} alt="Quiz Finalizado" />
              <h3 className="question">Parabéns, você finalizou o quiz!</h3>
              <h3 className="question">Sua pontuação foi {points / 2}/10</h3>
            </DivQuiz>
          </FundoFixo>
        ) : (
          false
        )}
      </StyledHomeContainer>
    </>
  );
};
