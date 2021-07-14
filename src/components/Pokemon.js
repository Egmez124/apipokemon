const Pokemon = ({name, url})=> {
    return(
        <div className="pokemon-card">
            <div className="pokemon-img">
                
            </div>
            <div>
                <div>{name}</div>
                <div>{url}</div>
            </div>
        </div>
    )
}

export default Pokemon