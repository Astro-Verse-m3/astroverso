import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserContext } from "../../contexts/UserContext";
import { formSchemaLogin } from "./schemaLogin";
import { iUserLogin } from "./typeLogin";
import { StyledLink } from "../../styles/link";
import { StyledTitle } from "../../styles/typography";
import { StyledForm } from "../../styles/form";
import { TfiLock } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";
import { StyledButton } from "../../styles/button";
import { StyledInputsForm } from "../../styles/inputs";

export const FormLogin = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({ resolver: yupResolver(formSchemaLogin) });

  return (
    <StyledForm onSubmit={handleSubmit(login)}>
      <div className="inputs-login">
        <StyledInputsForm>
          <HiOutlineMail />
          <label htmlFor="email">
            E-mail
            <input type="email" id="email" {...register("email")} />
          </label>
        </StyledInputsForm>
        <StyledTitle tag="span" fontSize="five">
          {errors.email?.message}
        </StyledTitle>

        <StyledInputsForm>
          <TfiLock />
          <label htmlFor="password">
            Senha
            <input type="password" id="password" {...register("password")} />
          </label>
        </StyledInputsForm>
        <StyledTitle tag="span" fontSize="five">
          {errors.password?.message}
        </StyledTitle>
      </div>

      <div className="button-login">
        <StyledTitle tag="span" fontSize="six">
          Esqueceu a senha?
        </StyledTitle>
        <StyledButton>Login</StyledButton>
        <StyledTitle tag="p" fontSize="six">
          Não possui uma conta?
          <StyledLink to={"/register"} type="two">
            Cadastre-se!
          </StyledLink>
        </StyledTitle>
      </div>
    </StyledForm>
  );
};
