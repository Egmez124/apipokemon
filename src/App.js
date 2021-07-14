import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import {getPokemon, getPokemonData} from './components/getPokemon'
import Pokemon from './components/Pokemon';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';

function App() {
  const [data, setData] = useState([])
  const [queryTerm, SetQueryTerm] = useState('normal')
  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    if (queryTerm) {
      const func = async ()=> {
        const res = await getPokemon(queryTerm)
        setData(res.pokemon)
        //console.log(res)
      }

      func()
      
    }
  }, [queryTerm])

  const info = data.slice(0, 10).map((item)=><Pokemon key={item.id} name={item.pokemon.name} url={item.pokemon.url}/>)

  const HandleSearch = query => {
    SetQueryTerm(query)
  }

  const fetchPokemons = async ()=>{
    const promises = data.slice(0, 10).map(async(item)=>{
      return await getPokemonData(item.pokemon.name)
    })
    const results = await Promise.all(promises)
    setPokemon(results)
    
  }
  useEffect(()=>{
    fetchPokemons()
  }, [])
  console.log(pokemon)
 
  return (
    <div>
      <Navbar/>
      <div className="App">
        <SearchBox onSearch={HandleSearch} />
        <Pokedex />
        <div className="pokedex-grid">
          
        </div>
      
      </div>
    </div>
    
  );

}

export default App;
