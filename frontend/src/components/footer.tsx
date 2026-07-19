import styles from '../styles/footer.module.css';
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function Footer() {
    return(
        <footer className={styles.footerbar}>
            <div className={`container ${styles.container}`}>
                <nav>
                    <ul>
                        <Link className={styles.logo} to="/"><img src="public/assets/logo.png" alt="" /></Link>
                        <p className={styles.description}>Plataforma de comparar preço de jogos digitais.</p>
                        <span>
                            <a href=""><FaDiscord className={styles['discord-icon']}/></a>
                            <a href=""><FaInstagram className={styles['instagram-icon']}/></a>
                            <a href="https://github.com/Tulio8998"><FaGithub className={styles['github-icon']}/></a>
                        </span>
                    </ul>
                    <ul>
                        <p className={styles.title}>Plataforma</p>
                        <a href="">Inicio</a>
                        <a href="">Ofertas</a>
                    </ul>
                    <ul>
                        <p className={styles.title}>Suporte</p>
                        <a href="">FAQ</a>
                        <a href="">Entre em contato</a>
                        <a href="">Discord</a>
                        <a href="">Reportar Bug</a>
                    </ul>
                    <ul>
                        <p className={styles.title}>Site</p>
                        <a href="">Sobre</a>
                        <a href="">Parceiros</a>
                    </ul>
                    <ul>
                        <p className={styles.title}>Legal</p>
                        <a href="">Política de Privacidade</a>
                        <a href="">Termos e Serviços</a>
                        <a href="">Política de Cookie</a>
                    </ul>
                </nav>
                <div className={styles.rights}>
                    <p>© 2026 GameCompare. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}