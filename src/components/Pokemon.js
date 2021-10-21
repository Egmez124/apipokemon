const Pokemon = ({name, img, typesPokemon})=> {
    return(
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img src={img} alt={name} className="pokemon-img"/>
            </div>
            <div>
                <div className="card-body">
                    <div className="card-top">
                        <h3>{name}</h3>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {typesPokemon.map((type, idx)=>{
                            return (
                                <div className="pokemon-type-text" key={idx}>{type.type.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon