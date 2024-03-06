import { useParams } from "react-router-dom"
import { ContainerSearch } from "./SearchStyled"


export default function Search() {

    const {title} = useParams()

  return (
   <ContainerSearch>
    <h1>
    {title}
    </h1>

    </ContainerSearch>
  )
}
