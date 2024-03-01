import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  align-items: end;
  position: relative;
  top: 200px;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1rem 2rem;
  border-radius: 0.3rem;

  h2{
    padding-bottom: 1rem;
  }

  p{

    padding-bottom: 0.6em;
    
  }

  span{
    color: gray;
    font-weight: 500;

 
  }

`;

export const ContainerLikeandComment = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

div{
    display: flex;
    align-items: center;
    gap:0.2rem;
    margin-top: 0.4rem;
}


span{
    color: black;
    font-weight: normal;
   

 
  }
 





`;
