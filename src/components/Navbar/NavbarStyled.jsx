import styled from "styled-components"

export const Nav = styled.nav`
 display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;;
`
export const ImageLogo = styled.img`
max-width: 10rem;
   
   object-fit: cover;
   cursor: pointer;
`

export const InputSearch = styled.div`
   position: relative;
    width: 200px;
    display: flex;
    align-items: center;

    button{
        position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: gray;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s;

   
    }

    button:hover{
        background-color: #dddddd;
    }
    input{

        outline: none;
    font-size: 0.9rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;

   &:focus{
    border: #00e3f8 1px solid;
}

    }

`

export const Button = styled.button`
background-color: #2643d4;
border: none;
outline: none;
font-size: 1rem;
padding: 0.4rem 1rem;
color: white;
transition: all 0.4s ease-in-out;
cursor: pointer;
border-radius: 0.3rem;
width: 200px;
font-weight: 500;
letter-spacing: 0.1rem;
text-transform: uppercase;

&:hover {
    background-color: #00e3f8;
  }

`