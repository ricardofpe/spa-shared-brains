import { useRouteError, Link } from "react-router-dom";
import { ContainerError } from "./ErrorPageStyled";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <ContainerError>
      <h1>Oops!</h1>
      <p>Desculpe aconteceu um erro.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" >
      <button>Volte a Página Principal :)</button>
      </Link>

    </ContainerError>
  );
}