import styled from "styled-components";

export const ContainerProfile = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
top: 200px;
position: relative;
`

export const ProfileHeader = styled.div`

width: 80%;
margin-top: 1rem;
display: flex;
justify-content: space-between;
align-items: flex-end;
position: relative;
border-radius: 0.3rem;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
background-color: #fff;
z-index: 0;

`

export const ProfileIconEdit = styled.div`

position: absolute;
top: 1rem;
right: 1rem;
color:#0bade3;
background-color: #fff;
padding: 0%.5rem;
border-radius: 50%;
font-size: 1%.5rem;
cursor: pointer;
transition: all 0.3s ease-in-out;

:hover{
    color:#fff;
    background-color: #0bade3;
}

`

export const ProfileBackground = styled.img`

position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
object-fit: cover;
background-color: #dfdfdf;
width: 100%;
height: 50%;
z-index: -1;
border-radius: 0.3rem 0.3rem 0 0;

`

export const ProfileUser = styled.div`
padding: 2rem;

`
export const ProfileAvatar = styled.img`
border-radius: 50%;
width: 13rem;
border: solid 5px #fff;
object-fit: cover;
object-position: center;
`
export const ProfileActions = styled.div`
padding: 2rem;


`

export const ProfileIconAdd = styled.i`

background-color: transparent;
border-radius: 50%;
color: #0bade3;
outline: none;
border: none;
cursor: pointer !important;
font-weight: bold;
font-size: 2rem;
transition: all 0.3s ease-in-out;

:hover{
    color:#0a86af;
    font-size: 2.1rem;
}

`