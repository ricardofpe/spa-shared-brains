import styled from "styled-components"

export const ContainerSearch = styled.div`

padding-top: 2rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;


`

export const SearchThoughts = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 4rem;
align-items: center;
width: 80%;
margin: 0 auto;

flex-wrap: nowrap;

`

export const TextResults = styled.div`
  padding: 1.5rem;
  top: 210px;
  margin-bottom: 50px;
position: relative;
  background-color: #fff;
  width: 40%;
  border-radius: 0.3rem;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  span {
    font-size: 1rem;
  }
`;