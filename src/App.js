import React from "react";
import Header from "./components/Header.js";
import CharacterList from "../src/components/CharacterList";
import {Route} from "react-router-dom";
import WelcomePage from "../src/components/WelcomePage";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/"><WelcomePage /></Route>
      <Route path="/characterList/"><CharacterList /></Route>
    </main>
  );
}
