import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/shared-brains-logo.png";
import { Button, ImageLogo, InputSearch, Nav } from "./NavbarStyled";
import {useForm} from "react-hook-form"

export default function Navbar() {

  const {register, handleSubmit, reset} = useForm()
  const navigate = useNavigate()
  function onSearch (data) {

    const {title} = data
     navigate(`search/${title}`)
     reset()

  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
        <InputSearch className="input-search">
     
     <button type="submit" >
     <i className="bi bi-search"></i>
     </button>

        
          <input {...register("title")} placeholder="Pesquise por um título" type="text" />
        </InputSearch>
        </form>

<Link to="/">
        <ImageLogo src={logo} alt="Logo Shared Brains" />
        </Link>
      

        <Button >
            Entrar
        </Button>
     
      </Nav>
      <Outlet/>
    </>
  );
}



