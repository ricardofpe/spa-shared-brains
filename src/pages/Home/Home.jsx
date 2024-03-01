import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";
import { findAllThoughts } from "../../services/postsServices";
import { HomeBody } from "./HomeStyled";
import { useState } from "react";

// ... outras importações

import { useEffect } from "react";

export default function Home() {
  const [thoughts, setThoughts] = useState([]);

  async function getAllThoughts() {
    const response = await findAllThoughts();
    setThoughts(response.data.results);
  }

  useEffect(() => {
    getAllThoughts();
  }, []); // O array vazio indica que o efeito deve ser executado apenas uma vez, após a montagem do componente

  return (
    <>
      <Navbar />
      <HomeBody>
        {thoughts.map((item) => (
          <Card
            key={item.id}
            username={item.username}
            createdAt= {item.createdAt}
            title={item.title}
            text={item.text}
            likes={item.likes.length}
            comments={item.comments.length}
          />
        ))}
      </HomeBody>
    </>
  );
}

