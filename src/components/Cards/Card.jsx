/* eslint-disable react/prop-types */
import { CardContainer , ContainerLikeandComment} from "./CardStyle";

function Card({ thoughts }) {
  return (
    <CardContainer>
      <article>
        <div>
          <h2>{thoughts.title}</h2>
          <p>{thoughts.text}</p>
          <span>By userName</span>
        </div>
      </article>

      <ContainerLikeandComment>
        <div>
        <i className="bi bi-heart"></i>
        <span>{thoughts.likes}</span>
        </div>

        <div>
        <i className="bi bi-chat"></i>
        <span>{thoughts.comments}</span>
        </div>
      
      </ContainerLikeandComment>
    </CardContainer>
  );
}

export default Card;
