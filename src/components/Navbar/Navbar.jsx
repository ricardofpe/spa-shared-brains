import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/shared-brains-logo.png";
import { Button, ErrorSpan, ImageLogo, InputSearch, Nav, UserLoggedSpace } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { searchSchema } from "../../schemas/searchSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLogged } from "../../services/userServices";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext)

  function onSearch(data) {
    const { title } = data;
    navigate(`search/${title}`);
    reset();
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function signout() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  }

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSearch className="input-search">
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>

            <input
              {...register("title")}
              placeholder="Pesquise por um título"
              type="text"
            />
          </InputSearch>
        </form>

        <Link to="/">
          <ImageLogo src={logo} alt="Logo Shared Brains" />
        </Link>

        {user ? (
          <UserLoggedSpace >
           <Link style={{textDecoration: "none"}}  to="/profile">
           <h2>{user.name}</h2>
           </Link>
             
           

            <i className="bi bi-box-arrow-right" onClick={signout}></i>
          </UserLoggedSpace>
        ) : (
          <Link to="/auth">
            <Button type="button" text="Entrar">
              Entrar
            </Button>
          </Link>
        )}
      </Nav>

      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}

      <Outlet />
    </>
  );
}
