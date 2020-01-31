import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


export default function CharacterList() {
 const [data, setData] = useState([]);

 const [query, setQuery] = useState("");

  useEffect(() => {
    const getCharacters = () => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log("axios call", response.data.results);
      setData(response.data.results)
      const characterName = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase()))
    })
    .catch(error => {
      console.log("server error", error);
    })
    }
    getCharacters();
  }, [query]);

  // const handleInputChange = event => {
  //   setQuery(event.target.value);
  // };

  return (
    <section className="character-list">
      {data.map(item => (
        <CharacterCard key={item.id} data={item} />
      ))}
    </section>
  );
}
