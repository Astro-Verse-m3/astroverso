// import React, { useContext, useEffect } from "react";
// import { QuizContext } from "../../../contexts/QuizContext";
// import { QuizModalContext } from "../../../contexts/QuizModalContext";

// O CONTEUDO DESTA PAGINA  DEVE SER ATRIBUIDO AO CONTEUDO DE DENTRO DO MODAL

export const Quiz = () => {
  // const { myQuiz, setMyQuiz, answerSelected, setAnswerSelected } =
  //   useContext(QuizContext);
  // const {
  //   points,
  //   currentQuest,
  //   modalContents,
  //   answerQuestion,
  //   setCurrentQuest,
  // } = useContext(QuizModalContext);
  // const token = localStorage.getItem("@astroverso:token");
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       if (modalContents === "todos") {
  //         const response = await api.get(`/quiz`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         const planetsQuest = response.data[0].questions;
  //         const starQuest = response.data[1].questions;
  //         setMyQuiz(planetsQuest.concat(starQuest));
  //       } else {
  //         const response = await api.get(`/quiz/?category=${modalContents}`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         setMyQuiz(response.data[0].questions);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  // const quests = useMemo(
  //   () =>
  //     produce(myQuiz, (draft: iMyQuests[] | null) => {
  //       if (draft) {
  //         let newChosenQuests = [] as iMyQuests[];
  //         let numberQuests = 10;
  //         if (modalContents === "estrela") {
  //           numberQuests = 5;
  //         }
  //         for (let i = 0; i < numberQuests; i++) {
  //           let chosen = Math.floor(Math.random() * draft.length);
  //           newChosenQuests.push(draft[chosen]);
  //           draft = draft.filter((elem, i) => i !== chosen);
  //         }
  //         return newChosenQuests;
  //       } else {
  //         return null;
  //       }
  //     }),
  //   [myQuiz]
  // );
  // return (
  //     <>
  //       {quests && (
  //         <>
  //           <section className="quest">
  //             <StyledText type={"02"}>{quests[currentQuest]?.title}</StyledText>
  //           </section>
  //           <section className="answer">
  //             {quests[currentQuest]?.options?.map(({ answer, point }, i) => (
  //               <StyledButton
  //                 key={i}
  //                 disabled={answerSelected ? true : false}
  //                 type="button"
  //                 onClick={() => {
  //                   setAnswerSelected({ point });
  //                 }}
  //                 className={answerSelected && point > 0 ? "correct" : ""}
  //               >
  //                 {answer}
  //               </StyledButton>
  //             ))}
  //           </section>
  //           {answerSelected && (
  //             <StyledButton
  //               type="button"
  //               onClick={() => {
  //                 answerQuestion(answerSelected.point);
  //                 setAnswerSelected(null);
  //                 setCurrentQuest(currentQuest + 1);
  //               }}
  //             >
  //               Próximo
  //             </StyledButton>
  //           )}
  //         </>
  //       )}
  //       {currentQuest >= 10 ? (
  //         <section>
  //           <StyledText type="01">Parabems, você finalizou o quiz</StyledText>
  //           <StyledText type="02">Sua pontuação foi {points / 2}/10</StyledText>
  //         </section>
  //       ) : (
  //         false
  //       )}
  //     </>
  //   );
};
