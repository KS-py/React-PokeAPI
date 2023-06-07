import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import './App.css';
import axios from 'axios';

function App(){
  const [pokemon, setPokemon] = useState([])
  const [count, setCount] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);

    axios.get(currentPageUrl, {
    }).then(res => {              
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results.map(p => p.name));
      setCount(res.data.results.map(q => parseInt(q.url.toString().slice(34, 37))))
    }) 
  }, [currentPageUrl])

  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading.."


  return(
    <>
      <PokemonList pokemon={pokemon} count={count}/>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
