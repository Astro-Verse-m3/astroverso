import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import { UserContext } from "../../contexts/UserContext";
import { formSchemaLogin } from "./schemaLogin";
import { iUserLogin } from "./typeLogin";

import Astronaut from "../../assets/Astronaut.gif";
import { StyledLink } from "../../styles/link";
import { StyledTitle } from "../../styles/typography";
import { StyledForm } from "../../styles/form";
import { TfiLock } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
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
        <img src={Astronaut} alt="gif de astronauta" />
      <motion.div
        className="motion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="inputs-login">
          <StyledInputsForm margin="one">
            <CiMail />
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="E-mail"
            />
          </StyledInputsForm>
          <StyledTitle tag="span" fontSize="eight" color="one" editText="three">
            {errors.email?.message}
          </StyledTitle>

          <StyledInputsForm margin="one">
            <TfiLock />
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Senha"
            />
          </StyledInputsForm>
          <StyledTitle tag="span" fontSize="eight" color="one" editText="three">
            {errors.password?.message}
          </StyledTitle>
        </div>

        <div className="button-login">
          <StyledTitle
            tag="span"
            fontSize="seven"
            align="one"
            margin="two"
            editText="two"
          >
            Esqueceu a senha?
          </StyledTitle>
          <StyledButton margin="one">Login</StyledButton>
          <StyledTitle tag="p" fontSize="seven" editText="two">
            Não possui uma conta?
            <StyledLink to={"/register"} type="two">
              Cadastre-se!
            </StyledLink>
          </StyledTitle>
        </div>
      </motion.div>
    </StyledForm>
  );
};
