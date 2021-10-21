import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import {getPokemon, getPokemonData} from './components/getPokemon'
import Pokemon from './components/Pokemon';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';

function App() {
  const [data, setData] = useState([])
  const [queryTerm, SetQueryTerm] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [loadding, setLoadding] = useState(false)

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

  const info = pokemon.map((item)=><Pokemon key={item.id} name={item.name} img={item.sprites.front_default} typesPokemon={item.types}/>)

  const HandleSearch = query => {
    SetQueryTerm(query)
  }

  useEffect(()=>{
    if (data){
      const fetchPokemons = async ()=>{
        const promises = data.slice(0, 12).map(async(item)=>{
        return await getPokemonData(item.pokemon.name)
        })
        const results = await Promise.all(promises)
        setPokemon(results)
        setLoadding(true)
      }
      fetchPokemons()
    }
  }, [data])

  console.log()
 
  return (
    <div>
      <Navbar/>
      <div className="App">
        <SearchBox onSearch={HandleSearch} />
        <Pokedex />
        {!loadding?(
          <div>Cargando...</div>
        ):(
          <div className="pokedex-grid">
          {info}
        </div>
        )}
      
      </div>
    </div>
    
  );

}

export default App;
