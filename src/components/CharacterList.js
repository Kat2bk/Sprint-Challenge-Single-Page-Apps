import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
 const [data, setData] = useState([]);

  useEffect(() => {
    const getCharacters = () => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log("axios call", response);
      setData(response.data);
    })
    .catch(error => {
      console.log("server error", error);
    })
    }
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
