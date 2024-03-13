
import Card from "../../components/Cards/Card";

import { findAllThoughts, getTopThought } from "../../services/postsServices";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { useState, useEffect } from "react";



export default function Home() {
  const [thoughts, setThoughts] = useState([]);
  const [thoughtTop, setThoughtTop] = useState({});

  async function getAllThoughts() {
    const responseThought = await findAllThoughts();
    setThoughts(responseThought.data.results);

    const responseThoughtTop = await getTopThought()
    setThoughtTop(responseThoughtTop.data.thoughts)
  }

  useEffect(() => {
    getAllThoughts();

  }, []); 

  return (
    <>

      <HomeHeader>
      <Card
            top={"true"}
            username={thoughtTop.username}
            createdAt= {thoughtTop.createdAt}
            title={thoughtTop.title}
            text={thoughtTop.text}
            likes={thoughtTop.likes}
            comments={thoughtTop.comments}
          />

      </HomeHeader>
      <HomeBody>
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
      </HomeBody>
    </>
  );
}

