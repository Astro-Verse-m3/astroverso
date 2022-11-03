import { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { UserContext } from '../../contexts/UserContext';
import { iUserRegister } from './typeRegister';
import { Link } from 'react-router-dom';
import { formSchemaRegister } from './SchemaRegister';


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
      <form onSubmit={handleSubmit(signUp)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite o seu nome"
            {...register("name")}
          />
        </div>
        <span>
          {errors.name?.message}
        </span>
        
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite o seu e-mail"
            {...register("email")}
          />
        </div>
        <span>
          {errors.email?.message}
        </span>
        
        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite a sua senha"
            {...register("password")}
          />
        </div>
        <span>
          {errors.password?.message}
        </span>
        
        <div>
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirme a sua senha"
            {...register("confirmPassword")}
          />
        </div>
        <span>
          {errors.confirmPassword?.message}
        </span>

        <div>
            <button>Cadastrar</button>
            <span>Já possui uma conta? <Link to={"/login"}>Faça Login!</Link></span>
        </div>   
      </form>
    );
  };
  
