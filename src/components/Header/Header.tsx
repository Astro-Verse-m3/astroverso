import { Link } from "react-router-dom";
import { StyledHeader } from "../../styles/header";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Astroverso</h1>
      <nav>
        <Link to={"/"}>Voltar</Link>
      </nav>
    </StyledHeader>
  );
};
