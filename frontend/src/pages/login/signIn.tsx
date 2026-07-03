import styles from '../../styles/signIn.module.css';
import { FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaGhost } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useState } from 'react';
import { validateEmail } from '../../utils/login';

export function SignIn() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [formError, setFormError] = useState('');

    const emailValidation: any = validateEmail(email);
    const validationEmailClass = email === '' 
        ? '' 
        : (emailValidation.valid ? styles.success : styles.error);
        
    function handleRegisterSubmit(event: React.FormEvent) {
        event.preventDefault();
        
        const submitData = [email, password];
        const allFieldsFilled = submitData.every(field => field.trim() !== '');

        if (!allFieldsFilled) {
            setFormError("Por favor, preencha todos os campos antes de cadastrar!");
            return;
        }

        if (!emailValidation.valid || !password) {
            setFormError("Existem campos com erros. Corrija-os antes de continuar.");
            return;
        }

        setFormError('');
    }

    return(
        <section className={styles['login-page']}>
            <div className={styles.slogan}>
                <div className={styles.container}>
                    <div className={styles.init}>
                        <p className={styles.logo}>Logo</p>
                        <h1 className={styles.title}>Nome</h1>
                        <h2 className={styles.subtitle}>COMPARE . ECONOMIZE . JOGUE</h2>
                    </div>

                    <div className={styles.list}>
                        <ul>
                            <li><CiSquareCheck className={styles['icon-check1']}/><span className={styles['color-li']}>Acompanhe preços </span>de mais de 30 lojas</li>
                            <li><CiSquareCheck className={styles['icon-check2']}/>Salve jogos preferidos em sua <span className={styles['color-li']}> lista de desejos</span></li>
                            <li><CiSquareCheck className={styles['icon-check3']}/>Comente <span className={styles['color-li']}>suas opiniões </span> nos jogos</li>
                        </ul>
                    </div>

                    <div className={styles.icons}>
                        <p><FaSteam className={styles['icon-steam']}/>Steam</p>
                        <p><SiEpicgames className={styles['icon-epic']}/>Epic</p>
                        <p><FaGhost className={styles['icon-gog']}/>GOG</p>
                        <p>+20 lojas</p>
                    </div>
                </div>
            </div>
           
           <div className={styles['login-account']}>
                <div className={styles.container}>
                    <div className={styles['login-init']}>
                        <p className={styles.logo}>Logo</p>
                        <h2 className={styles.subtitle}>Seja bem vindo</h2>
                        <p className={styles.description}>Entre em sua conta para continuar</p>

                        <div className={styles['input-data']}>
                            <form onSubmit={handleRegisterSubmit}>
                                <div>
                                    <p>Endereço de email</p>
                                    <div className={`${styles['icon-group']} ${validationEmailClass}`}>
                                        <MdEmail className={styles['icon-email']} />
                                        <input type="email" placeholder="email@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <p className={`${styles['email-label']} ${validationEmailClass}`}>
                                        {emailValidation.message || '\u00A0'}
                                    </p>
                                    
                                    <p>Senha</p>
                                    <div className={`${styles['icon-group']}`}>
                                        <FaLock className={styles['icon-password']}/>
                                        <input type="password" placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>

                                <div className={styles['forget-pass']}>
                                    <a href="">Esqueceu a senha?</a>
                                </div>
                                <p className={styles['form-submit-error']}>{formError || '\u00A0'}</p>

                                <button>Entrar</button>
                            </form>
                        </div>

                        <div className={styles['others-login']}>
                            <p>ou continue com</p>
                            <a><FcGoogle className={styles['icon-google']}/>Google</a>
                            <p className={styles['no-account']}>Não tem uma conta?  <a href="/signUp"> Se inscreva-se</a></p>
                        </div>

                        <div className={styles['terms-service']}>
                            <p> Se inscrevendo você concorda com nossos <a href="" className={styles['link-term']}>Termos e Serviços</a> e <a href="" className={styles['link-poli']}>Politicas de Privicidade</a></p>
                        </div>

                    </div>
                </div>
           </div>
        </section>
    )
}