import { useState } from "react"

const SearchBox = ({onSearch}) => {
    const [value, setValue] = useState('')
    
    return (
        <div className="search-box-container" >
            <div className="searchbar">
                <input placeholder="Buscar por tipo..." value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
            </div>
            <div className="search-btn">
                <button onClick={()=>{onSearch(value)}}>Search</button>
            </div>
        </div>
    )
}
export default SearchBox