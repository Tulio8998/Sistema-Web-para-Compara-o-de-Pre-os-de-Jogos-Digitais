import styles  from '../../styles/gameDetail.module.css'
import { FaExternalLinkAlt, FaStar, FaSteam, FaTrophy } from "react-icons/fa";
import { PriceHistory } from '../../utils/details';
import { GoGraph } from "react-icons/go";
import { gamesMock } from '../../mocks/game';
import { IoPerson } from "react-icons/io5";
import { MdAccessTime, MdFavorite, MdStorage } from 'react-icons/md';
import { BiLike } from 'react-icons/bi';
import { LiaAwardSolid } from 'react-icons/lia';
import { MdFavoriteBorder } from "react-icons/md";
import { RiShareBoxLine } from 'react-icons/ri';


export function GameDetail() {
    return (
        <>
        <section className={styles['detail-page']}>
            <div className={`${styles.container}`}>
                <div className={`${styles['start-container']}`}>
                    <div className={`${styles['game-detail']}`}> 
                        <div className={`${styles['game-cover']}`}>
                            <img src="https://assets.isthereanydeal.com/018d937f-1212-7232-b23f-a046f6fd4a57/boxart.jpg?t=1768305010" alt="" />
                        </div> 

                        <div className={`${styles['game-description']}`}>
                            <p className={`${styles['owner-game']}`}>De - CD Project - Lançando: Fev 25, 2015 - <span> PC/Windows</span></p>
                            <h2>The Witcher 3</h2>
                            <div className={styles['rating-game']}>
                                <span className={styles['critic-game']}>
                                    <p className={styles['color-note']}>96</p>
                                    <span className={styles['critic-color']}>
                                        <p>Metacritic</p>
                                        <p>Aclamado</p>
                                    </span>
                                </span>
                                <span className={styles['line-separate']}></span>
                                <p className={styles['avaliation-game']}>
                                    <FaStar className={styles['icon-star']}></FaStar>
                                    <FaStar className={styles['icon-star']}></FaStar>
                                    <FaStar className={styles['icon-star']}></FaStar>
                                    <FaStar className={styles['icon-star']}></FaStar>
                                    <FaStar className={styles['icon-star']}></FaStar> <span className={styles['span1']}>4.9</span> <span className={styles['span2']}> (144,122 reviews)</span></p>
                                <span className={styles['line-separate']}></span>
                                <p className={styles['awards']}> <FaTrophy className={styles['icon-trophy']}/> Jogo do ano 2015</p>
                            </div>
                            <ul className={styles['tags-game']}>
                                <li className={styles['tag']}>Ação RPG</li>
                                <li className={styles['tag']}>Ação RPG</li>
                                <li className={styles['tag']}>Ação RPG</li>
                                <li className={styles['tag']}>Ação RPG</li>
                                <li className={styles['tag']}>Ação RPG</li>
                            </ul>
                            <p className={styles['text-description']}>És Geralt of Rivia, um mercenário caçador de monstros. Perante ti, 
                                encontras um continente destruído e infestado por monstros, que podes explorar como quiseres. 
                                O teu contrato: encontrar Ciri, a Criança da Profecia, uma arma viva capaz de alterar a forma do mundo.</p>
                            <span className={styles['button-options']}>
                                <button> <MdFavorite className={styles['icon-favorite']}/>Adicionar aos Favoritos</button>
                                <button> <RiShareBoxLine className={styles['icon-share']}/>Compartilhar</button>
                            </span>
                            <div className={styles['prices']}>
                                <span className={styles['span1']}>
                                    <p>MELHOR PREÇO HOJE</p>
                                    <p>R$23.99</p>
                                </span>
                                <span className={styles['line-separate']}></span>
                                <span className={styles['span2']}>
                                    <p>60% OFF</p>
                                    <p>De R$59.99</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles['detail-container']}`}>
                    <div className={`${styles['div-detail']}`}>
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
                                            <td>Steam <p>PC Digital</p></td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>

                                        <tr className={`${styles['tr-table']}`}>
                                            <td>GOG <p>DRM-Free</p></td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>
                                    
                                        <tr className={`${styles['tr-table']}`}>
                                            <td>Epic <p>PC Digital</p></td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>
                                    
                                        <tr className={`${styles['tr-table']}`}>
                                            <td>Nuuvem <p>PC Digital</p></td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>
                                    
                                        <tr>
                                            <td>Huble <p>PC Digital</p></td>
                                            <td>Edição Padrão</td>
                                            <td className={`${styles['real-price']}`}>R$59.90</td>
                                            <td className={`${styles['discount-price']}`}>R$23.99 <span>-60%</span></td>
                                            <td className={`${styles['buy-link']}`}><span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>

                        <div className={`${styles['price-history']}`}>
                            <div className={`${styles['title']}`}>
                                <p className={`${styles['history']}`}><GoGraph className={`${styles['icon']} ${styles['icon-graph']}`}/> Histórico de Preço</p>
                                <ul>
                                    <li>1m</li>
                                    <li>3m</li>
                                    <li>6m</li>
                                    <li>1a</li>
                                    <li>Todos</li>
                                </ul>
                            </div>

                            <PriceHistory></PriceHistory>
                        </div>

                        <div className={`${styles['also-like']}`}>
                            <div className={`${styles['title']}`}>
                                <p className={`${styles['like']}`}>Você tambem pode gostar</p>
                            </div>

                            <div className={`${styles['container-card']}`}>
                                {gamesMock.slice(0,5).map((game, index) => {
                                    const discountPercent = Math.round(
                                        ((game.deal.regular.amount - game.deal.price.amount) / game.deal.regular.amount) * 100
                                    );
                                    return (
                                        <div key={index} className={`${styles['card-game']}`}>
                                            <div className={`${styles['cards']}`}>
                                                <div className={styles['card-top']}>
                                                    <p className={styles['porcent-discount']}>-{discountPercent}%</p>
                                                    
                                                    <img 
                                                        className={styles['image-game']} 
                                                        src={game.deal.assets.boxart} 
                                                        alt={`Capa do jogo ${game.title}`} 
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className={`${styles['description']}`}>
                                                <p className={`${styles['game-name']}`}>{game.title}</p>
                                            </div>
                                            
                                            <div className={`${styles['detail-price']}`}>
                                                <span>
                                                    <p className={`${styles['real-price']}`}>
                                                        R${game.deal.regular.amount.toFixed(2).replace('.', ',')}
                                                    </p>
                                                    <p className={`${styles['discount-price']}`}>
                                                        R${game.deal.price.amount.toFixed(2).replace('.', ',')}
                                                    </p>
                                                </span>
                                                <button>Ver oferta</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['aside-status']}`}>
                        <div className={`${styles['game-status']}`}>
                            <p className={`${styles['title-status']}`}>Status de Jogo</p>
                            <span>
                                <p className={`${styles['']}`}><IoPerson className={`${styles['icon-status']}`}/>Pico de Jogadores</p>
                                <p className={`${styles['data-calor']}`}>900.000</p>
                            </span>  
                            <span>
                                <p className={`${styles['']}`}><MdAccessTime className={`${styles['icon-status']}`}/>Média Tempo de Jogo</p>
                                <p className={`${styles['data-calor']}`}>83 horas</p>
                            </span>
                            <span>
                                <p className={`${styles['']}`}><BiLike className={`${styles['icon-status']}`}/>Avaliações</p>
                                <p className={`${styles['rating-color']}`}>Muito Positiva</p>
                            </span>
                            <span>
                                <p className={`${styles['']}`}><LiaAwardSolid className={`${styles['icon-status']}`}/>Prêmios GOTY</p>
                                <p className={`${styles['awards-color']}`}>6 Prêmios</p>
                            </span>
                            <span>
                                <p className={`${styles['']}`}><MdStorage className={`${styles['icon-status']}`}/>Armazenamento</p>
                                <p className={`${styles['data-calor']}`}>60 GB</p>
                            </span>
                        </div>

                        <div className={`${styles['game-dlc']}`}>                     
                            <p className={`${styles['']}`}>DLC Disponível</p>
                            <div className={`${styles['dlc']}`}>
                                <img className={`${styles['cover']}`} src="https://assets.isthereanydeal.com/018d937f-2077-7336-b125-3cd96189f579/boxart.jpg?t=1760635846" alt="" />
                                
                                <div className={`${styles['dlc-data']}`}>
                                    <p className={`${styles['title']}`}>Nome jogo</p>
                                    <p className={`${styles['subtitle']}`}>Tipo de DLC</p>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$39.90</p>
                                        <p className={`${styles['discount-price']}`}>R$31.99</p>
                                        <p className={`${styles['porcent-discount']}`}>-20%</p>
                                    </span>
                                </div>
                            </div>         
                        </div>
                    </div>
                    
                </div>               
            </div>
        </section></>
    );
}