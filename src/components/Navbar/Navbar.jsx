import logo from "../../assets/shared-brains-logo.png";
import { Button, ImageLogo, InputSearch, Nav } from "./NavbarStyled";


export default function Navbar() {
  return (
    <>
      <Nav>
        <InputSearch className="input-search">
        <i className="bi bi-search"></i>
          <input placeholder="Pesquise por um título" type="text" />
        </InputSearch>


        <ImageLogo src={logo} alt="Logo Shared Brains" />
       
      

        <Button >
            Entrar
        </Button>
     
      </Nav>
    </>
  );
}



