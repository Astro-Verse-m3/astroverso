import Astronaut from "../../assets/Astronaut.gif"
import { Header } from '../../components/Header/Header'
import { StyledSection } from '../../styles/section'
import { StyledTitle } from "../../styles/typography"
import { FormRegister } from './FormRegister'


export const Register = () => {
  return (
    <StyledSection>
      <div className="header">
      <Header />
        <div className="header-gif">
          <img src={Astronaut} alt="gif de astronauta" />
          <StyledTitle tag="span" fontSize="four" margin="one" editText="one">Astronomia perto de você</StyledTitle>
        </div>
      </div>
      <FormRegister />
    </StyledSection>
  )
}
