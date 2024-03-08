import { useParams } from "react-router-dom"
import { ContainerSearch, SearchThoughts, TextResults } from "./SearchStyled"
import { useEffect, useState } from "react";
import { searchThoughtsByTitle } from "../../services/postsServices";
import Card from "../../components/Cards/Card";


export default function Search() {

    const {title} = useParams()
    const [thoughts, setThoughts] = useState([]);
    
    async function search (){
      try{
        const thoughtsApi = await searchThoughtsByTitle(title);
        setThoughts(thoughtsApi.data.results)
        
      }catch(err){
       console.log(err)
       setThoughts([])
      }
    }

    useEffect(() =>{
      search()
    },[title])
 
    return (
   <ContainerSearch>

<TextResults>
        <span>
          {thoughts.length
            ? `Encontramos ${thoughts.length} ${
                thoughts.length > 1 ? "resultados" : "resultado"
              } para:`
            : "Não encontramos resultados para:"}
        </span>
        <h2>{title}</h2>
      </TextResults>


    <SearchThoughts>
        {thoughts.map((item) => (
          <Card
            key={item.id}
            username={item.username}
            createdAt= {item.createdAt}
            title={item.title}
            text={item.text}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </SearchThoughts>

    </ContainerSearch>
  )
}
