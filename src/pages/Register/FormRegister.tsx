import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { UserContext } from "../../contexts/UserContext";
import { iUserRegister } from "./typeRegister";
import { formSchemaRegister } from "./SchemaRegister";

import Astronaut from "../../assets/Astronaut.gif";
import { StyledForm } from "../../styles/form";
import { StyledTitle } from "../../styles/typography";
import { StyledInputsForm } from "../../styles/inputs";
import { CiMail, CiUser } from "react-icons/ci";
import { TfiLock } from "react-icons/tfi";
import { StyledButton } from "../../styles/button";
import { StyledLink } from "../../styles/link";

export const FormRegister = () => {
  const { signUp } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(formSchemaRegister),
  });

  return (
    <StyledForm onSubmit={handleSubmit(signUp)}>
      <img src={Astronaut} alt="gif de astronauta" />
      <motion.div
        className="motion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="inputs-login">
          <StyledInputsForm margin="two">
            <CiUser />
            <input
              id="name"
              type="text"
              placeholder="Usuário"
              {...register("name")}
            />
          </StyledInputsForm>
          <StyledTitle tag="span" fontSize="eight" color="one" editText="three">
            {errors.name?.message}
          </StyledTitle>

          <StyledInputsForm margin="two">
            <CiMail />
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              {...register("email")}
            />
          </StyledInputsForm>
          <StyledTitle tag="span" fontSize="eight" color="one" editText="three">
            {errors.email?.message}
          </StyledTitle>

          <StyledInputsForm margin="two">
            <TfiLock />
            <input
              id="password"
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
          </StyledInputsForm>
          <StyledTitle tag="span" fontSize="eight" color="one" editText="three">
            {errors.password?.message}
          </StyledTitle>

          <StyledInputsForm margin="two">
            <TfiLock />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirmar Senha"
              {...register("confirmPassword")}
            />
          </StyledInputsForm>
          <StyledTitle tag="span" fontSize="eight" color="one" editText="three">
            {errors.confirmPassword?.message}
          </StyledTitle>
        </div>

        <div className="button-login">
          <StyledButton margin="two">Cadastrar</StyledButton>
          <StyledTitle tag="p" fontSize="seven" editText="two">
            Já possui uma conta?{" "}
            <StyledLink to={"/login"} type="two">
              Faça Login!
            </StyledLink>
          </StyledTitle>
        </div>
      </motion.div>
    </StyledForm>
  );
};
