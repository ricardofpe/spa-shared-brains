/* eslint-disable react/prop-types */
import { CardContainer, ContainerLikeandComment } from "./CardStyle";
import { format } from 'date-fns';


function Card({ title, text, username, likes, comments, createdAt }) {

  const formattedDate = format(new Date(createdAt), 'dd/MM/yyyy');

  return (
    <CardContainer>
      <article>
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <span>By {username}</span>
          <p className="date">Date: {formattedDate}</p>
        </div>
      </article>

      <ContainerLikeandComment>
        <div>
          <i className="bi bi-heart"></i>
          <span>{likes}</span>
        </div>

        <div>
          <i className="bi bi-chat"></i>
          <span>{comments}</span>
        </div>
      </ContainerLikeandComment>
    </CardContainer>
  );
}

export default Card;
