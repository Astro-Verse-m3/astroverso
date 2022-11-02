import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formSchemaLogin } from "./schemaLogin";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { iUserLogin } from "./typeLogin";

export const FormLogin = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin> ({resolver: yupResolver(formSchemaLogin),
  });

  return (
    <form onSubmit={handleSubmit(login)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email")}
          />
        </div>
        <span>
          {errors.email?.message}
        </span>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password")}
          />
        </div>
        <span>
          {errors.password?.message}
        </span>
        <div>
            <button>Login</button>
            <span>Não possui uma conta? <Link to={"/register"}>Cadastre-se!</Link></span>
        </div>
    </form>
  )
};
