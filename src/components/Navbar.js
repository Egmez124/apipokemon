const Navbar = ()=>{
    const pokeapiLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
    return (
        <nav>
            <div/>
            <div>
                <img src={pokeapiLogo} alt="pokeapi-logo" className="navbar-image"/>
            </div>
            <div/>
        </nav>
    )
}

export default Navbar;