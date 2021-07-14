export const getPokemon = async(queryTerm) => {
    const url = `https://pokeapi.co/api/v2/type/${queryTerm}/`
    let data = await fetch(url).then((res)=> res.json())
    return data 
}
export const getPokemonData = async(name)=>{
   const url = `https://pokeapi.co/api/v2/pokemon/${name}/`
    const data = await fetch(url).then((res)=>res.json())
   return data
}