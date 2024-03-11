import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ImageLogo } from "../../components/Navbar/NavbarStyled";
import { ContainerAuth, ContainerLogo, Section } from "./AuthenticationStyled";
import logo from "../../assets/shared-brains-logo.png";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
export default function Authentication() {

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,

  } = useForm();

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,

  } = useForm();

  function inHandleSubmit(data){
    console.log(data)
  }

  function upHandleSubmit(data){
    console.log(data)
  }

  return (
<>
    <ContainerLogo>
      <Link to="/">
      <ImageLogo src={logo} alt="Logo Shared Brains" />
      </Link>
   
    </ContainerLogo>
    
    <ContainerAuth>



      <Section type="signin">
     <h2>Entrar</h2>
     <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
      <Input
      type="email"
      placeholder="Email"
      name="email"
      register={registerSignin}
      />
        <Input
      type="password"
      placeholder="Senha"
      name="password"
      register={registerSignin}
      />
           <Button type="submit" text="Entrar"/>
     </form >

      </Section>

      
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
        <Input
      type="text"
      placeholder="Nome"
      name="name"
      register={registerSignup}
      />
      <Input
      type="email"
      placeholder="Email"
      name="email"
      register={registerSignup}
      />
        <Input
      type="password"
      placeholder="Senha"
      name="password"
      register={registerSignup}
      />
            <Input
      type="password"
      placeholder="Confirmar senha"
      name="password"
      register={registerSignup}
      />
           <Button type="submit" text="Cadastrar"/>
     </form>

      </Section>


    </ContainerAuth>
    </>
  )
}
