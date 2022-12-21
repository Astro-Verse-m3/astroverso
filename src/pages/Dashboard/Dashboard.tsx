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
  const { showModal, setShowModal, setModalContents, setCurrentQuest } =
    useContext(QuizModalContext);
  return (
    <StyledHomeContainer className="temp">
      <HeaderMenu />
      <QuizMain>
        <div className="align-quiz">
          <StyledTitle tag="h2" color="two" fontSize="two">
            Escolha um de nossos quizzes
          </StyledTitle>
          <section className="CardContents">
            <QuizCard>
              <img
                src="https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png"
                alt="Planeta"
              />

              <StyledTitle tag="p" color="two" fontSize="four" align="two" editText="four">
                Teste seus conhecimentos sobre planetas
              </StyledTitle>
              <StyledButton
                // margin="one"
                type="button"
                onClick={() => {
                  setShowModal(!showModal);
                  setModalContents("planetas");
                }}
              >
                Faça o quiz
              </StyledButton>
            </QuizCard>
            <QuizCard>
              <img src={sun} alt="Estrelas" />

              <StyledTitle tag="p" color="two" fontSize="four" align="two" editText="four">
                Teste seus conhecimentos sobre estrelas
              </StyledTitle>
              <StyledButton
                // margin="one"
                type="button"
                onClick={() => {
                  setShowModal(!showModal);
                  setModalContents("estrelas");
                }}
              >
                Faça o quiz
              </StyledButton>
            </QuizCard>
            <QuizCard>
              <img src={solzinho} alt="Geral" />

              <StyledTitle tag="p" color="two" fontSize="four" align="two" editText="four">
                Teste seus conhecimentos gerais
              </StyledTitle>
              <StyledButton
                // margin="one"
                type="button"
                onClick={() => {
                  setShowModal(!showModal);
                  setModalContents("todos");
                  setCurrentQuest(0);
                }}
              >
                Faça o quiz
              </StyledButton>
            </QuizCard>
          </section>
        </div>
      </QuizMain>
      {showModal ? <QuizModal /> : false}
    </StyledHomeContainer>
  );
};