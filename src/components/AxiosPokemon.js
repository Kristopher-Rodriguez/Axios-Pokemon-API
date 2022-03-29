import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosPokemon = (props) => {
  const [pokeApiData, setPokeApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        console.log(response.data.results);
        setPokeApiData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App" style={{textAlign: "center"}}>
      <h1>Axios Pokemon API</h1>
      <ul>
        {pokeApiData.map((pokemon, index) => (
          <ul key={index}>
            {index + 1}{". "}{pokemon.name}
          </ul>
        ))}
      </ul>
    </div>
  );
};
export default AxiosPokemon;
