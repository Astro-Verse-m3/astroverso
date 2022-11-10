import React from "react";

import { useContext } from "react";
import { IoPlanetSharp } from "react-icons/io5";
import Card from "../../components/Card/Card";
import HeaderMenu from "../../components/Header/HeaderMenu/HeaderMenu";
import { QuizModalContext } from "../../contexts/QuizModalContext";
import { StyledButton } from "../../styles/button";
import { StyledTitle } from "../../styles/typography";

import { StyledHomeContainer } from "../Home/style";
import { QuizMain, QuizCard } from "./DashboardStyle";
import solzinho from "../../assets/solzinho.png";
import sun from "../../assets/sun.png";

export const Dashboard = () => {
  const { showModal, setShowModal, setModalContents, showPoints, points } =
    useContext(QuizModalContext);

  return (
    <StyledHomeContainer className="temp">
      <HeaderMenu />
      <QuizMain>
        <StyledTitle tag="h2" color="two" fontSize="two" className="title">
          Escolha seu quiz
        </StyledTitle>
        <section className="container">
          <QuizCard>
            <img
              src="https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png"
              alt="Planeta"
            />

            <StyledTitle tag="p" color="two" fontSize="four">
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

            <StyledTitle tag="p" color="two" fontSize="four">
              Teste seus conhecimentos sobre Estrelas
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
            <img src={solzinho} alt="Geral" />

            <StyledTitle tag="p" color="two" fontSize="four">
              Teste seus conhecimentos Gerais
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
        </section>
      </QuizMain>
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
