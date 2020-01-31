import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
 const [data, setData] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log("axios call", response.data.results);
      setData(response.data.results);
    })
    .catch(error => {
      console.log("server error", error);
    })
    }
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      {data.map(item => (
        <CharacterCard key={item.id} data={item} />
      ))}
    </section>
  );
}
