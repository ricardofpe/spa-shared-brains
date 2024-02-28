/* eslint-disable react/prop-types */
import { Section } from "./CardStyle"



function Card({thoughts}) {
  return (

    <Section>
        <h2>{thoughts.title}</h2>
        <p>{thoughts.text}</p>
        <i className="bi bi-heart"></i>
        <span>{thoughts.likes}</span>
        <i className="bi bi-chat"></i>
        <span>{thoughts.comments}</span>
    </Section>

  )
}

export default Card