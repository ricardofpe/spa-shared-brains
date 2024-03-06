import { useRouteError } from "react-router-dom";
import { ContainerError } from "./ErrorPageStyled";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <ContainerError>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ContainerError>
  );
}