import styles from '../styles/topbar.module.css';

export function TopbarAuth() {
    return (
        <aside className={styles['top-bar-auth']}>
            <div className={`container ${styles.container}`}>
                <nav>
                    <a className={styles.logo} href="">Logo</a>
                    <a href="/">Início</a>
                    <a href="">Ofertas</a>
                </nav>
            </div>
        </aside>
    )
}