import { useContext } from "react";
import toast from "react-hot-toast";
import Astronaut from "../../assets/Astronaut.gif";
import { Header } from "../../components/Header/Header";
import { AstrosContext } from "../../contexts/AstrosContext";
import { StyledSection } from "../../styles/section";
import { StyledTitle } from "../../styles/typography";
import { FormLogin } from "./FormLogin";

export const Login = () => {
  const { toQuiz, setToQuiz } = useContext(AstrosContext);
  if (toQuiz) {
    toast.error("faça login para ter acesso ao quiz");
    setToQuiz(false);
  }
  return (
    <StyledSection>
      <div className="header">
        <Header />
        <div className="header-gif">
          <img src={Astronaut} alt="gif de astronauta" />
          <StyledTitle tag="span" fontSize="four" margin="one" editText="one">
            Astronomia perto de você
          </StyledTitle>
        </div>
      </div>
      <FormLogin />
    </StyledSection>
  );
};
