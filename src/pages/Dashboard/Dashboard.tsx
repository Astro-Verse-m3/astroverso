import React, { useContext } from "react";

import HeaderMenu from "../../components/Header/HeaderMenu/HeaderMenu";

import { StyledButton } from "../../styles/button";
import { StyledTitle } from "../../styles/typography";

import { StyledHomeContainer } from "../Home/style";
import { QuizMain, QuizCard } from "./DashboardStyle";
import solzinho from "../../assets/solzinho.png";
import sun from "../../assets/sun.png";
import QuizModal from "./QuizModal";
import { QuizModalContext } from "../../contexts/QuizModalContext";

export const Dashboard = () => {
  const { showModal, setShowModal, setModalContents } =
    useContext(QuizModalContext);
  return (
    <StyledHomeContainer className="temp">
      <HeaderMenu />
      <QuizMain>
        <StyledTitle tag="h2" color="two" fontSize="two">
          Escolha um de nossos quizzes
        </StyledTitle>
        <section className="CardContents">
          <QuizCard>
            <img
              src="https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png"
              alt="Planeta"
            />

            <StyledTitle tag="p" color="two" fontSize="four" align="two">
              Teste seus conhecimentos sobre Planetas
            </StyledTitle>
            <StyledButton
              margin="one"
              type="button"
              onClick={() => {
                setShowModal(!showModal);
                setModalContents("planetas");
              }}
            >
              Faça O Quiz
            </StyledButton>
          </QuizCard>
          <QuizCard>
            <img src={sun} alt="Estrelas" />

            <StyledTitle tag="p" color="two" fontSize="four" align="two">
              Teste seus conhecimentos sobre Estrelas
            </StyledTitle>
            <StyledButton
              margin="one"
              type="button"
              onClick={() => {
                setShowModal(!showModal);
                setModalContents("estrelas");
              }}
            >
              Faça O Quiz
            </StyledButton>
          </QuizCard>
          <QuizCard>
            <img src={solzinho} alt="Geral" />

            <StyledTitle tag="p" color="two" fontSize="four" align="two">
              Teste seus conhecimentos Gerais
            </StyledTitle>
            <StyledButton
              margin="one"
              type="button"
              onClick={() => {
                setShowModal(!showModal);
                setModalContents("todos");
              }}
            >
              Faça O Quiz
            </StyledButton>
          </QuizCard>
        </section>
      </QuizMain>

      {showModal ? <QuizModal /> : false}
    </StyledHomeContainer>
  );
};

// Logica do botao que fecha o modal

// const { showModal, setShowModal, setShowPoints, setCurrentQuest } =
//     useContext(quizModalContexts);

/* <StyledButton
type="button"
onClick={() => {
  setShowModal(!showModal);
  setShowPoints(true);
  setCurrentQuest(0);
}}
>
Fechar
</StyledButton> */
