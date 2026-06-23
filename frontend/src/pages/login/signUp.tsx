import styles from '../../styles/signUp.module.css';
import { FaLock, FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaGhost } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from 'react-icons/md';
import { MdAlternateEmail } from "react-icons/md";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from 'react';
import { calculatePasswordStrength, validName } from '../../utils/login';
import { validateEmail } from '../../utils/login';
import { passwordsMatch } from '../../utils/login';


export function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const nameValidation: any = validName(username);
    const emailValidation: any = validateEmail(email);
    const passwordStrength: any = calculatePasswordStrength(password);
    const passwordIsEqual: boolean = passwordsMatch(password, confirmPassword);

    const validationClass = email === '' 
    ? '' 
    : (emailValidation.valid ? styles.success : styles.error);

    return(
        <section className={styles['create-page']}>
            <div className={styles['slogan-create']}>
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
           
           <div className={styles['create-account']}>
                <div className={styles.container}>
                    <div className={styles['create-init']}>
                        <p className={styles.logo}>Logo</p>
                        <h2 className={styles.subtitle}>Seja bem vindo</h2>
                        <p className={styles.description}>Entre em sua conta para continuar</p>

                        <div className={styles['input-data']}>
                            <form action="">
                                <div>
                                    <p>Nome de usuário</p>
                                    <div className={styles['icon-group']}>
                                        <MdAlternateEmail className={styles['icon-user']}/>
                                        <input type="text" placeholder='nome' value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    </div>

                                    <p>Endereço de email</p>
                                    <div className={`${styles['icon-group']} ${validationClass}`}>
                                        <MdEmail className={styles['icon-email']} />
                                        <input 
                                            type="email" 
                                            placeholder="email@exemple.com" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                        />
                                    </div>
                                    <p className={`${styles['email-label']} ${validationClass}`}>
                                        {emailValidation.message}
                                    </p>
                                    
                                    <p>Senha</p>
                                    <div className={styles['icon-group']}>
                                        <FaLock className={styles['icon-password']}/>
                                        <input type="password" placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className={styles['password-strength']}>
                                        <div
                                            className={styles.segment}
                                            style={{
                                                backgroundColor:
                                                    passwordStrength.score >= 1
                                                        ? passwordStrength.color
                                                        : '#2D3243'
                                            }}
                                        />
                                        <div
                                            className={styles.segment}
                                            style={{
                                                backgroundColor:
                                                    passwordStrength.score >= 2
                                                        ? passwordStrength.color
                                                        : '#2D3243'
                                            }}
                                        />
                                        <div
                                            className={styles.segment}
                                            style={{
                                                backgroundColor:
                                                    passwordStrength.score >= 3
                                                        ? passwordStrength.color
                                                        : '#2D3243'
                                            }}
                                        />
                                        <div
                                            className={styles.segment}
                                            style={{
                                                backgroundColor:
                                                    passwordStrength.score >= 4
                                                        ? passwordStrength.color
                                                        : '#2D3243'
                                            }}
                                        />
                                    </div>
                                    <p className={styles['password-label']}> {passwordStrength.label}</p>

                                    <p>Confirmar senha</p>
                                    <div className={styles['icon-group']}>
                                        <FaLock className={styles['icon-password']}/>
                                        <input type="password" placeholder='confirmar senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <button className='new-account'>Cadastrar</button>
                            </form>
                        </div>

                        <div className={styles['others-login']}>
                            <p>ou continue com</p>
                            <a><FcGoogle className={styles['icon-google']}/>Google</a>
                            <p className={styles['no-account']}>Já tem uma conta?  <a href="/signIn"> Faça seu login</a></p>
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