import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


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

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  // <div className="form-box">
  // <form className="search">
  //   <input
  //     type="text"
  //     onChange={handleInputChange}
  //     value={query}
  //     name="name"
  //     tabIndex="0"
  //     className="search-name"
  //     placeholder="search by name"
  //   />
  // </form>
  // </div>

  return (

    <section className="character-list">
      {data.map(item => (
        <CharacterCard key={item.id} data={item} />
      ))}
    </section>
  );
}
