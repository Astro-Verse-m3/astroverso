import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
	email: yup
		.string()
		.trim()
		.required("Digite o seu e-mail")
		.email("E-mail inválido"),
	password: yup
		.string()
		.trim()
		.required("Digite a sua senha")
});
