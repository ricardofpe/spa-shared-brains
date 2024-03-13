import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ImageLogo } from "../../components/Navbar/NavbarStyled";
import { ContainerAuth, ContainerLogo, Section } from "./AuthenticationStyled";
import logo from "../../assets/shared-brains-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signinSchema} from "../../schemas/signinSchema";
import { signupSchema } from "../../schemas/signupSchema";
import { ErrorSpanAuthentification } from "./AuthenticationStyled";
import { signin, signup } from "../../services/userServices";
import Cookies from "js-cookie";



export default function Authentication() {

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: errorsSignup },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({ resolver: zodResolver(signinSchema) });

 async function inHandleSubmit(data){
    try{
      const response = await signin(data)
      Cookies.set("id", response.data.id)

      Cookies.set("token", response.data.token, {expires: 1})
      navigate("/")
    }catch(error){
      console.log(error)
    }
  }
 
 async function upHandleSubmit(data){
   
    try{
      const response = await signup(data)
      Cookies.set("id", response.data.id)
   
      Cookies.set("token", response.data, {expires: 1})
      navigate("/")
    }catch(error){
      console.log(error)
    }
  }

  const navigate = useNavigate()

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
            placeholder="E-mail"
            name="email"
            register={registerSignin}
          />
          {errorsSignin.email && (
            <ErrorSpanAuthentification>{errorsSignin.email.message}</ErrorSpanAuthentification>
          )}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignin}
          />
          {errorsSignin.password && (
            <ErrorSpanAuthentification>{errorsSignin.password.message}</ErrorSpanAuthentification>
          )}
          <Button type="submit" text="Entrar" />
        </form>
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
          {errorsSignup.name && (
            <ErrorSpanAuthentification>{errorsSignup.name.message}</ErrorSpanAuthentification>
          )}
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            register={registerSignup}
          />
          {errorsSignup.email && (
            <ErrorSpanAuthentification>{errorsSignup.email.message}</ErrorSpanAuthentification>
          )}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignup}
          />
          {errorsSignup.password && (
            <ErrorSpanAuthentification>{errorsSignup.password.message}</ErrorSpanAuthentification>
          )}
          <Input
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            register={registerSignup}
          />
          {errorsSignup.confirmPassword && (
            <ErrorSpanAuthentification>{errorsSignup.confirmPassword.message}</ErrorSpanAuthentification>
          )}
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>


    </ContainerAuth>
    </>
  )
}
