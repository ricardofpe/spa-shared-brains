import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";
import { thoughts } from "../../dataFake"

export default function Home(){
    return(
        <>

          <Navbar/>
          {thoughts.map((item, index) => (
          <Card key={index} thoughts={item} />
          ))}
   
           
  
      </>
         
    )
}