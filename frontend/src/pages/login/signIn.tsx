import '../../styles/login.css'
import { FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaGhost } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";

export function SignIn() {
    return(
        <section className='login-page'>
            <div className='slogan'>
                <div className='container'>
                    <div className='init'>
                        <p className='logo'>Logo</p>
                        <h1 className='title'>Nome</h1>
                        <h2 className='subtitle'>COMPARE . ECONOMIZE . JOGUE</h2>
                    </div>

                    <div className='list'>
                        <ul>
                            <li><CiSquareCheck className='icon-check1'/><span className='color-li'>Acompanhe preços </span>de mais de 30 lojas</li>
                            <li><CiSquareCheck className='icon-check2'/>Salve jogos preferidos em sua <span className='color-li'> lista de desejos</span></li>
                            <li><CiSquareCheck className='icon-check3'/>Comente <span className='color-li'>suas opiniões </span> nos jogos</li>
                        </ul>
                    </div>

                    <div className='icons'>
                        <p><FaSteam className='icon-steam'/>Steam</p>
                        <p><SiEpicgames className='icon-epic'/>Epic</p>
                        <p><FaGhost className='icon-gog'/>GOG</p>
                        <p>+20 lojas</p>
                    </div>
                </div>
            </div>
           
           <div className='login-account'>
                <div className='container'>
                    <div className='login-init'>
                        <p className='logo'>Logo</p>
                        <h2 className='subtitle'>Seja bem vindo</h2>
                        <p className='description'>Entre em sua conta para continuar</p>

                        <div className='input-data'>
                            <form action="">
                                <div>
                                    <p>Endereço de email</p>
                                    <input type="email" placeholder='email@exemple.com'/>

                                    <p>Senha</p>
                                    <input type="password" placeholder='senha'/>
                                </div>

                                <div className='forget-pass'>
                                    <a href="">Esqueceu a senha?</a>
                                </div>

                                <button>Entrar</button>
                            </form>
                        </div>

                        <div className='others-login'>
                            <p>ou continue com</p>
                            <a><FcGoogle className='icon-google'/>Google</a>
                            <p className='no-account'>Não tem uma conta?  <a href=""> Se inscreva-se</a></p>
                        </div>

                        <div className='terms-service'>
                            <p> Se inscrevendo você concorda com nossos <a href="" className='link-term'>Termos e Serviços</a> e <a href="" className='link-poli'>Politicas de Privicidade</a></p>
                        </div>

                    </div>
                </div>
           </div>
        </section>
    )
}