import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  align-items: start;
  position: relative;
  top: 200px;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
 width: 100%;


`;

    
  export const CardThought = styled.article`
  


  h2{
    font-size: ${(thoughts) => (thoughts.top ? "3rem" : "1.8rem")};
    padding-bottom: 1rem;
  }

  p{
    font-size: ${(thoughts) => (thoughts.top ? "1.2rem" : "1rem")};
   
    padding-bottom: 0.6em;
  }

  i {
    cursor: pointer;
    color: #0bade3;
    font-size: 1.1rem;
    text-decoration: none;
    border: none;
    margin: 2px;
  }



  `
  
  

export const ContainerCardFooter = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

 




span{
    color: black;
    font-weight: normal;
   

 
  }
 




`;

export const ContainerDataandByUser = styled.div`

  display: flex;
  align-items: start;

  flex-direction: column;

.date{
    margin-top: 0.2rem ;
    font-size: ${(thoughts) => (thoughts.top ? "1rem" : "0.8rem")};
  }


  
  span{
    color: gray;
    font-weight: 500;
    font-size: ${(thoughts) => (thoughts.top ? "1rem" : "0.8rem")};
 
  }


`
export const ContainerLikeandComment = styled.div`

div{
    display: flex;
 
    align-items: center;

 
}

i{
  padding: .4rem;
}


`