import '../styles/footer.css'
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
    return(
        <footer className="footerbar">
            <div className="container">
                <nav>
                    <ul>
                        <a className='logo title' href="">Logo</a>
                        <p className='description'>Plataforma de comparar preço de jogos digitais.</p>
                        <span>
                            <a href=""><FaDiscord className='discord-icon'/></a>
                            <a href=""><FaInstagram className='instagram-icon'/></a>
                            <a href=""><FaGithub className='github-icon'/></a>
                        </span>
                    </ul>
                    <ul>
                        <p className='title'>Plataforma</p>
                        <a href="">Inicio</a>
                        <a href="">Ofertas</a>
                    </ul>
                    <ul>
                        <p className='title'>Suporte</p>
                        <a href="">FAQ</a>
                        <a href="">Entre em contato</a>
                        <a href="">Discord</a>
                        <a href="">Reportar Bug</a>
                    </ul>
                    <ul>
                        <p className='title'>Site</p>
                        <a href="">Sobre</a>
                        <a href="">Parceiros</a>
                    </ul>
                    <ul>
                        <p className='title'>Legal</p>
                        <a href="">Política de Privacidade</a>
                        <a href="">Termos e Serviços</a>
                        <a href="">Política de Cookie</a>
                    </ul>
                </nav>
                <div className="rights">
                    <p>© 2026 Nome. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}