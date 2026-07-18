import { Link } from 'react-router-dom';
import styles from '../styles/topbar.module.css';

export function TopbarAuth() {
    return (
        <aside className={styles['top-bar-auth']}>
            <div className={`container ${styles.container}`}>
                <nav>
                    <Link className={styles.logo} to="/"><img src="public/assets/logo.png" alt="" /></Link>
                    <a href="/">Início</a>
                    <a href="/offers">Ofertas</a>
                </nav>
            </div>
        </aside>
    )
}