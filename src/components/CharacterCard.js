import React from "react";

export default function CharacterCard(props) {
  return (
  <span>
    <h3>Name: {props.data.name}</h3>
    <h3>Species: {props.data.species}</h3>
  </span>
  )
}
