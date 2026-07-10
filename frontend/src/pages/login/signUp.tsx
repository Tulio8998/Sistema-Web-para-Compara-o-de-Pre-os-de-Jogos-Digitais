import styles from '../../styles/signUp.module.css';
import { FaLock, FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaGhost } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from 'react-icons/md';
import { MdAlternateEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { useState } from 'react';
import { calculatePasswordStrength, validateUsername, validateEmail, passwordsMatch } from '../../utils/login';
import { createAccount, login } from '../../services/authService';

export function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [formError, setFormError] = useState('');

    const usernameValidation: any = validateUsername(username);
    const emailValidation: any = validateEmail(email);
    const passwordStrength: any = calculatePasswordStrength(password);
    const passwordIsEqual: any = passwordsMatch(password, confirmPassword);

    const validationUsernameClass = username === '' 
        ? '' 
        : (usernameValidation.valid ? styles.success : styles.error);

    const validationEmailClass = email === '' 
        ? '' 
        : (emailValidation.valid ? styles.success : styles.error);

    const validationPasswordClass = confirmPassword === ''
        ? ''
        : (passwordIsEqual.valid ? styles.success : styles.error);

    async function handleRegisterSubmit(event: React.FormEvent) {
        event.preventDefault();
        
        const submitData = [username, email, password, confirmPassword];
        const allFieldsFilled = submitData.every(field => field.trim() !== '');

        if (!allFieldsFilled) {
            setFormError("Por favor, preencha todos os campos antes de cadastrar!");
            return;
        }

        if (!usernameValidation.valid || !emailValidation.valid || !passwordIsEqual.valid) {
            setFormError("Existem campos com erros. Corrija-os antes de continuar.");
            return;
        }

        setFormError('');

        try {
            const data = await createAccount(username, email, password);

            console.log('Usuário criado!');
            console.log(data);
        } catch (error) {
            if (error instanceof Error) {
                setFormError(error.message);
            } else {
                setFormError('Erro ao criar usuario.');
            }
        }
    }

    return(
        <section className={styles['create-page']}>
            <div className={styles['slogan-create']}>
                <div className={styles.container}>
                    <div className={styles.init}>
                        <p className={styles.logo}>Logo</p>
                        <h1 className={styles.title}>Nome</h1>
                        <h2 className={styles.subtitle}>COMPARE . ECONOMIZE . JOGUE</h2>
                        <h3 className={styles['sub-subtitle']}>COMEÇAR É FÁCIL</h3>
                    </div>

                    <div className={styles['circles']}>
                        <div className={styles['circle-one']}>
                            <p>1</p>
                            <p>Criar Conta</p>
                        </div>
                        <div className={styles.line1}></div>
                        <div className={styles['circle-two']}>
                            <p>2</p>
                            <p>Definir preferências</p>
                        </div>
                        <div className={styles.line2}></div>
                        <div className={styles['circle-three']}>
                            <p>3</p>
                            <p>Começar a economizar</p>
                        </div>
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
                            <form onSubmit={handleRegisterSubmit}>
                                <div>
                                    <p>Nome de usuário</p>
                                    <div className={`${styles['icon-group']} ${validationUsernameClass}`}>
                                        <MdAlternateEmail className={styles['icon-user']}/>
                                        <input type="text" placeholder='nome' value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                    <p className={`${styles['name-label']} ${validationUsernameClass}`}> {usernameValidation.message || '\u00A0'}</p>

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
                                    <p className={styles['password-label']}> {passwordStrength.label || '\u00A0'}</p>

                                    <p>Confirmar senha</p>
                                    <div className={`${styles['icon-group']} ${validationPasswordClass}`}>
                                        <FaLock className={styles['icon-password']}/>
                                        <input type="password" placeholder='confirmar senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    </div>
                                    <p className={`${styles['password-label']} ${validationPasswordClass}`}> {passwordIsEqual.message || '\u00A0'} </p>
                                </div>
                                <p className={styles['form-submit-error']}>{formError || '\u00A0'}</p>
                                <div>

                                </div>
                                <div className={styles['terms-service-box']}>
                                    <input type="checkbox" name="" id="" />
                                    <p>Eu concordo com os <a href="" className={styles['link-term-box']}>Termos e Serviços</a> e <a href="" className={styles['link-poli-box']}>Politicas de Privicidade</a></p>
                                </div>
                                <button type="submit" className='new-account'><FaUserPlus className={styles['icon-create']}/>Cadastrar</button>
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