import { useState, useEffect } from 'react';
import styles from '../styles/topbar.module.css';
import { IoSearchOutline } from "react-icons/io5";
import { MdAccountCircle } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';

export function Topbar() {
    const [search, setSearch] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    function handleClearSearch() {
        setSearch("");
    }

    function handleSubmitSearch(event: React.FormEvent) {
        event.preventDefault();
        if (search.trim()) {
            navigate(`/search/${encodeURIComponent(search.trim())}`);
        }
    }

    function handleLogout() {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
    }

    return (
        <aside className={styles['top-bar']}>
            <div className={`container ${styles.container}`}>
                <nav>
                    <Link className={styles.logo} to="/"><img src="public/assets/logo.png" alt="" /></Link>
                    <Link to="/">Início</Link>
                    <Link to="/offers">Ofertas</Link>
                    
                    <form className={styles.searchbar} onSubmit={handleSubmitSearch}>
                        <IoSearchOutline className={styles['search-icon']}/>
                        <input type="text" placeholder='Busque aqui' value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button type="button" className={styles.clearbutton} onClick={handleClearSearch}>Limpar</button>
                        <button type="submit" className={styles.searchbutton}>Buscar</button>
                    </form>

                    {isAuthenticated ? (
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <Link className={styles.myAccount} to="/wishList">
                                <MdAccountCircle className={styles['icon-account']} />Minha Conta
                            </Link>
                            <button 
                                onClick={handleLogout} 
                                style={{ background: 'transparent', border: 'none', color: '#9CA3AF', cursor: 'pointer', fontWeight: 600 }}
                            >
                                Sair
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link className={styles.login} to="/signIn">Login</Link>
                            <Link className={styles.signup} to="/signUp">Se-inscrever</Link>
                        </>
                    )}
                </nav>
            </div>
        </aside>
    )
}