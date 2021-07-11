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
        //console.log(res)
      }

      func()
      
    }
  }, [queryTerm])

  const info = data.map((item)=><Pokemon key={item.id} name={item.name}/>)

  const HandleSearch = query => {
    SetQueryTerm(query)
  }

  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <SearchBox onSearch={HandleSearch} />
        {info}
      </header>
    </div>
  );

}

export default App;
