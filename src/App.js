import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import {getPokemon} from './components/getPokemon'
import Pokemon from './components/Pokemon';
function App() {
  const [data, setData] = useState([])
  const [queryTerm, SetQueryTerm] = useState('')

  useEffect(()=>{
    if (queryTerm) {
      const func = async ()=> {
        const res = await getPokemon(queryTerm)
        setData(res)
      }

      func()
    }
  }, [queryTerm])

  const HandleSearch = query => {
    SetQueryTerm(query)
  }

  const list = data.map((item)=> <Pokemon
    name={item.pokemon.pokemon.name}
    type={item.name}
    id={item.pokemon.pokemon.name}
  />)

  return (
    <div className="App">
      <header className="App-header">
        <SearchBox onSearch={HandleSearch} />
        {list}
      </header>
    </div>
  );
}

export default App;
