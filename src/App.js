import { useEffect, useState } from "react";
import { Select, List, Button, Header, Footer } from "./components";

import fetchPokemons from "./utils/fetchPokemons";

const App = () => {
  const [pokemons, setPokemons] = useState(undefined);
  const [selectedPokemonType, setSelectedPokemonType] = useState("");
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const pokemonsData = fetchPokemons();
    if (pokemonsData) {
      setPokemons(pokemonsData);
      setSelectedPokemonType("grass");
      const allPokemonTypes = Object.keys(pokemonsData).map((pokemonType) => ({
        value: pokemonType,
        label: pokemonType,
      }));
      setPokemonTypes(allPokemonTypes);
    }
  }, []);

  useEffect(() => {
    if (pokemons) {
      setFilteredPokemons(pokemons[selectedPokemonType]);
    }
  }, [selectedPokemonType, pokemons]);

  return (
    <>
      <Header>
        <h1>Pokemon App</h1>
        <Select options={pokemonTypes} onChange={setSelectedPokemonType} />
      </Header>
      <List listItems={filteredPokemons} />
      <Footer>
        <Button onClick={() => alert('Nice one!')} label="Click Me" />
      </Footer>
    </>
  );
};

export default App;
