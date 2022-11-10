import Astronaut from '../../assets/Astronaut.gif';
import { Header } from '../../components/Header/Header';
import { Modal } from '../../components/Modal/Modal';
import { StyledSection } from '../../styles/section';
import { StyledTitle } from '../../styles/typography';
import { FormLogin } from './FormLogin';

export const Login = () => {
  return (
    <StyledSection>
      <div className="header">
        <Header />
        <div className="header-gif">
          <img src={Astronaut} alt="gif de astronauta" />
          <StyledTitle tag="span" fontSize="five" margin="one">
            Astronomia perto de você
          </StyledTitle>
        </div>
      </div>
      <FormLogin />
      <Modal />
    </StyledSection>
  );
};
