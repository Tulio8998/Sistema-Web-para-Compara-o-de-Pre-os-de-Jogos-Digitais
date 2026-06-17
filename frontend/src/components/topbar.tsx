import { useState } from 'react';
import '../styles/topbar.css'
import { IoSearchOutline } from "react-icons/io5";


export function Topbar() {
    const [ search, setSearch ] = useState("");

    function handleClearSearch() {
        setSearch("");
    }

    function handleSubmitSearch() {
        event?.preventDefault();
        console.log(search)
    }

    return (
        <aside className="top-bar">
            <div className="container">
                <nav>
                    <a className='logo' href="">Logo</a>
                    <a href="">Início</a>
                    <a href="">Ofertas</a>
                    <form className='searchbar' onSubmit={handleSubmitSearch}>
                        <IoSearchOutline  className="search-icon"/>
                        <input type="text" placeholder='Busque aqui' value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button type="button" className='clearbutton' onClick={handleClearSearch}>Limpar</button>
                        <button type="submit" className='searchbutton'>Buscar</button>
                    </form>
                    <a className='login' href="/signIn">Login</a>
                    <a className='signup' href="/signUp">Se-inscrever</a>
                </nav>
            </div>
        </aside>
    )
}