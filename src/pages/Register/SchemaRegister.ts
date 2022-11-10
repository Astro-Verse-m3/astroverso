import * as yup from "yup";

export const formSchemaRegister = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(10, "Deve conter no máximo 10 caracteres")
    .required("Nome obrigatório"),
  email: yup
    .string()
    .trim()
    .required("E-mail obrigatório")
    .email("E-mail inválido"),
  password: yup
    .string()
    .trim()
    .required("Senha obrigatória")
    .matches(/[A-Z]/, "Deve conter uma maiúscula")
    .matches(/([a-z])/, "Deve conter uma minúscula")
    .matches(/(\d)/, "Deve conter um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve conter pelo menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});