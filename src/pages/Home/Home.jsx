import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";
import { thoughts } from "../../dataFake"
import { HomeBody } from "./HomeStyled";


export default function Home(){
    return(
        <>

          <Navbar/>
          <HomeBody>
          {thoughts.map((item, index) => (
          <Card key={index} thoughts={item} />
          ))}
          </HomeBody>
         
   
           
  
      </>
         
    )
}