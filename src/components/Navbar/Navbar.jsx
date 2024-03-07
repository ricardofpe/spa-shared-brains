import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/shared-brains-logo.png";
import { Button, ErrorSpan, ImageLogo, InputSearch, Nav } from "./NavbarStyled";
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"



const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "The search can't be empty" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "The search can't have just spaces",
    }),
});

export default function Navbar() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
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
      
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      
      
      <Outlet/>
    </>
  );
  }



