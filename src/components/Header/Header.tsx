import { StyledHeader } from "../../styles/header";
import { StyledLink } from "../../styles/link";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <nav>
        <StyledLink to={"/"} type="one">
          Voltar
        </StyledLink>
      </nav>
    </StyledHeader>
  );
};
