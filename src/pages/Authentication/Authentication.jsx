import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { ImageLogo } from "../../components/Navbar/NavbarStyled";
import { ContainerAuth, ContainerLogo, Section } from "./AuthenticationStyled";
import logo from "../../assets/shared-brains-logo.png";
import { Link } from "react-router-dom";
export default function Authentication() {
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
     <form>
      <Input
      type="email"
      placeholder="Email"
      name="email"
      />
        <Input
      type="password"
      placeholder="Senha"
      name="password"
      />
     </form>
     <Button type="submit" text="Entrar"/>
      </Section>

      
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form>
        <Input
      type="text"
      placeholder="Nome"
      name="name"
      />
      <Input
      type="email"
      placeholder="Email"
      name="email"
      />
        <Input
      type="password"
      placeholder="Senha"
      name="password"
      />
            <Input
      type="password"
      placeholder="Confirmar senha"
      name="password"
      />
     </form>
     <Button type="submit" text="Cadastrar"/>
      </Section>


    </ContainerAuth>
    </>
  )
}
