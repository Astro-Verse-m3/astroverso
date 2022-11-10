import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import {
  StyledModalCard,
  StyledModalContainer,
} from "../../../components/Modal/styles";
import { QuizModalContext } from "../../../contexts/QuizModalContext";
import { Quiz } from "../Quiz/Quiz";

const QuizModal = () => {
  const { setShowModal, setCurrentQuest, setPoints } =
    useContext(QuizModalContext);

  return (
    <StyledModalContainer>
      <StyledModalCard>
        <button
          className="close-button"
          onClick={() => {
            setShowModal(false);
            setCurrentQuest(0);
            setPoints(0);
          }}
        >
          <MdClose />
        </button>
        <Quiz />
      </StyledModalCard>
    </StyledModalContainer>
  );
};

export default QuizModal;
