/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import TextLimit from "../TextLimit/TextLimit";
import { CardContainer, CardThought, ContainerCardFooter, ContainerDataandByUser, ContainerLikeandComment } from "./CardStyle";

function Card({ title, text, username, likes, comments, createdAt, top, actions = false, id }) {

  const dateObject = new Date(createdAt);


  const day = String(dateObject.getDate()).padStart(2, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
  const year = dateObject.getFullYear();


  const formattedDate = `${day}/${month}/${year}`;

  return (
    <CardContainer >
      <CardThought top={top} >
        <div>

        {actions && (
              <span>
                <Link to={`/manage-news/edit/${id}`}>
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <Link to={`/manage-news/delete/${id}`}>
                  <i className="bi bi-trash3"></i>
                </Link>
              </span>
            )}
          <h2>{title}</h2>
          <TextLimit text={text} limit={150}/>
          
        </div>
      </CardThought>




      <ContainerCardFooter  >

      <ContainerDataandByUser top={top} >
          <span>By {username}</span>
          <p className="date">Date: {formattedDate}</p>
        </ContainerDataandByUser>
       
         <ContainerLikeandComment>
          
        <i className="bi bi-heart"></i>
          <span>{likes?.length}</span>
          <i className="bi bi-chat"></i>
          <span>{comments?.length}</span>
        </ContainerLikeandComment>
      </ContainerCardFooter>
    </CardContainer>
  );
}

export default Card;
