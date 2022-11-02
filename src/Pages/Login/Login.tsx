import { FormLogin } from "./FormLogin";
import Astronaut from "../../assets/Astronaut.gif"

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