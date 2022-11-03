import { Link } from "react-router-dom";
import Astronaut from "../../assets/Astronaut.gif"
import { FormLogin } from "./FormLogin";

export const Login = () => {

return (
  <section>
    <div>
        <header>
          <h1>ASTROVERSO</h1>
          <nav>
            <Link to={"/"}>Voltar</Link>
          </nav>
        </header>
        <div>
          <img src={Astronaut} alt="gif de astronauta" />
          <span>Astronomia perto de você</span>
        </div>
      </div>
      <FormLogin />
  </section>
);
}

