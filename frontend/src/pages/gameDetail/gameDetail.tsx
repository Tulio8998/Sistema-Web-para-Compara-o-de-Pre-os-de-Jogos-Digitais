import styles  from '../../styles/gameDetail.module.css'
import { FaExternalLinkAlt } from "react-icons/fa";

export function GameDetail() {
    return (
        <>
        <section className={styles['detail-page']}>
                <div className={`${styles['game-detail']}`}>
                    <div></div>
                    <div></div>
                </div>
            <div className={`${styles.container}`}>
                <div className={`${styles['detail-container']}`}>
                    <div>
                        <div className={`${styles['across-store']}`}>
                            <div className={`${styles['title']}`}>
                                <p className={`${styles['price-store']}`}>Preço de Todas as Loja</p>
                                <p className={`${styles['last-update']}`}>Última atualização <span> 3 min atrás</span></p>
                            </div>

                            <div className={`${styles['table']}`}>
                                <table>
                                    <thead>
                                        <tr className={`${styles['tr-table']}`}>
                                            <th className={`${styles['title-table']}`}>LOJA</th>
                                            <th className={`${styles['title-table']}`}>EDIÇÃO</th>
                                            <th className={`${styles['title-table']}`}>PREÇO ORIGINAL</th>
                                            <th className={`${styles['title-table']}`}>PREÇO ATUAL DESCONTADO</th>
                                            <th className={`${styles['title-table']}`}>LINK</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={`${styles['tr-table']}`}>
                                            <td>Steam</td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>

                                        <tr className={`${styles['tr-table']}`}>
                                            <td>GOG</td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>
                                    
                                        <tr className={`${styles['tr-table']}`}>
                                            <td>Epic</td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>
                                    
                                        <tr className={`${styles['tr-table']}`}>
                                            <td>Nuuvem</td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>
                                    
                                        <tr>
                                            <td>Huble</td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className={`${styles['title']}`}>
                                <p className={`${styles['price-history']}`}>Historíco de Preço</p>
                            </div>
                        </div>

                        <div className={`${styles['price-history']}`}>
                        
                        </div>

                        <div className={`${styles['discount-analysis']}`}>
                        
                        </div>
                    </div>

                    <div>
                        Teste
                    </div>
                    
                </div>               
            </div>
        </section></>
    );
}