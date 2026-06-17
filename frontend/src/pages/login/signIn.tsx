import '../../styles/login.css'
import { FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaGhost } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";

export function SignIn() {
    return(
        <section className='login-page'>
            <div className='slogan'>
                <div className='container init '>
                    <p className='logo'>Logo</p>
                    <h1 className='title'>Nome</h1>
                    <h2 className='subtitle'>COMPARE . ECONOMIZE . JOGUE</h2>
                </div>

                <div className='container list'>
                    <ul>
                        <li><CiSquareCheck className='icon-check1'/><span>Acompanhe preços</span>de mais de 30 lojas</li>
                        <li><CiSquareCheck className='icon-check2'/>Salve jogos preferidos em sua <span>lista de desejos</span></li>
                        <li><CiSquareCheck className='icon-check3'/>Comente suas <span>suas opiniões</span> nos jogos</li>
                    </ul>
                </div>

                <div className='container icons'>
                    <p><FaSteam className='icon-steam'/>Steam</p>
                    <p><SiEpicgames className='icon-epic'/>Epic</p>
                    <p><FaGhost className='icon-gog'/>GOG</p>
                    <p>+20 lojas</p>
                </div>
            </div>
           
           <div className='login-account'>
                <div className='container'>
                    <div>
                        <p className='logo'>Logo</p>
                        <h2>Seja bem vindo</h2>
                        <p>Entre em sua conta para continuar</p>
                    </div>

                    <div>
                        <form action="">
                            <p>Endereço de email</p>
                            <input type="email" placeholder='email@exemple.com'/>

                            <p>Senha</p>
                            <input type="password" placeholder='senhaaqui'/>
                        </form>
                    </div>
                </div>
           </div>
        </section>
    )
}