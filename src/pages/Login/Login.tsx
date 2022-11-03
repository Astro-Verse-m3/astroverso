
import Astronaut from "../../assets/Astronaut.gif";
import { Header } from "../../components/Header/Header";
import { StyledSection } from "../../styles/section";
import { FormLogin } from "./FormLogin";

export const Login = () => {
  return (
    <StyledSection>
      <div className="header">
        <Header />
        <div className="header-gif">
          <img src={Astronaut} alt="gif de astronauta" />
          <span>Astronomia perto de você</span>
        </div>
      </div>
      <FormLogin />
    </StyledSection>
  );
};
