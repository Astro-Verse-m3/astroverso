import Astronaut from "../../assets/Astronaut.gif"
import { FormLogin } from "./FormLogin";

export const Login = () => {

return (
  <section>
    <div>
      <img src={Astronaut} alt="gif de astronauta" />
      <h1>ASTROVERSO</h1>
      <span>Astronomia perto de você</span>
    </div>
    <FormLogin />
  </section>
);
}

