import { useState } from 'react';
import styles from '../styles/topbar.module.css';
import { IoSearchOutline } from "react-icons/io5";

export function Topbar() {
    const [ search, setSearch ] = useState("");

    function handleClearSearch() {
        setSearch("");
    }

    function handleSubmitSearch(event: React.FormEvent) {
        event.preventDefault();
        console.log(search)
    }

    return (
        <aside className={styles['top-bar']}>
            <div className={`container ${styles.container}`}>
                <nav>
                    <a className={styles.logo} href="">Logo</a>
                    <a href="/">Início</a>
                    <a href="/offers">Ofertas</a>
                    <form className={styles.searchbar} onSubmit={handleSubmitSearch}>
                        <IoSearchOutline className={styles['search-icon']}/>
                        <input type="text" placeholder='Busque aqui' value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button type="button" className={styles.clearbutton} onClick={handleClearSearch}>Limpar</button>
                        <button type="submit" className={styles.searchbutton}>Buscar</button>
                    </form>
                    <a className={styles.login} href="/signIn">Login</a>
                    <a className={styles.signup} href="/signUp">Se-inscrever</a>
                </nav>
            </div>
        </aside>
    )
}