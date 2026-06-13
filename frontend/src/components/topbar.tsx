import '../styles/topbar.css'
import { IoSearchOutline } from "react-icons/io5";


export function Topbar() {
    return (
        <aside className="top-bar">
            <div className="container">
                <nav>
                    <a className='logo' href="">Logo</a>
                    <a href="">Início</a>
                    <a href="">Ofertas</a>
                    <form className='searchbar' action="">
                        <IoSearchOutline  className="search-icon"/>
                        <input type="text" placeholder='Busque aqui'/>
                        <button type="submit" className='clearbutton'>Limpar</button>
                        <button type="submit" className='searchbutton'>Buscar</button>
                    </form>
                    <a className='login' href="">Login</a>
                    <a className='signup' href="">Se-inscrever</a>
                </nav>
            </div>
        </aside>
    )
}