import React from 'react'
import { Link } from 'react-router-dom'

import Astronaut from "../../assets/Astronaut.gif"
import { FormRegister } from './FormRegister'


export const Register = () => {
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
      <FormRegister />
    </section>
  )
}
