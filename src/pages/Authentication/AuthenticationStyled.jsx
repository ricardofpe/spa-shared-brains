import styled from "styled-components";

export const ContainerAuth = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;


  width: 70%;
  margin: 8rem auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 400px;
  margin: 0rem 1rem;
  padding: 2rem;
  gap: 1rem;
  background-color: ${(props) => (props.type === "signin" ? "#2643D4" : "white")};
  color: ${(props) => (props.type === "signup" ? "#2643D4" : "white")};
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
  }
`;

export const ContainerLogo = styled.div`

display: flex;
align-items: center;
justify-content: center;
width: 100%;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;;;

`