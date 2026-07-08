import styles from '../../styles/home.module.css';
import { FaArrowRight, FaRegHeart, FaStar } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { gamesMock } from '../../mocks/game';

export function Home() {
    return(
        <main className={styles['home-page']}>
            <section className={styles.start}>
                <div className={`container ${styles.container}`}>
                    <h1 className={styles.title}>Encontre o<span className={styles['color-title']}> melhor preço </span>para qualquer jogo</h1>
                    <p>Compare preços da Steam, Epic, GOG, e muito mais</p>
                    <p>Economize mais, jogue mais</p>
                </div>
            </section>

            <section className={styles.preferences}>
                <div className={`${styles.container}`}>
                    <div className={styles['preference-subtitle']}>
                        <h2>Suas preferâncias</h2>
                        <a href="">Ver todos <FaArrowRight className={styles['right-icon']}/> </a>
                    </div>
                    <div className={styles['card-games']}>
                        {gamesMock.slice(0,5).map((game, index) => {
                            const discountPercent = Math.round(
                                ((game.deal.regular.amount - game.deal.price.amount) / game.deal.regular.amount) * 100
                            );
                            return (
                                <div key={index} className={`${styles['card-game']}`}>
                                    <div className={`${styles['cards']}`}>
                                        <div className={styles['card-top']}>
                                            <p className={styles['porcent-discount']}>-{discountPercent}%</p>
                                            <p ><FaRegHeart className={styles['icon-heart']}/></p>
                                            <img 
                                                className={styles['image-game']} 
                                                src={game.deal.assets.boxart} 
                                                alt={`Capa do jogo ${game.title}`} 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className={`${styles['description']}`}>
                                        <p className={`${styles['game-name']}`}>{game.title}</p>
                                        
                                        <span className={`${styles['tags']}`}>
                                            {game.tags.slice(0, 2).map((tag, tagIndex) => (
                                                <p key={tagIndex}>{tag}</p>
                                            ))}
                                        </span>
                                        
                                        <span className={`${styles['stores']}`}>
                                            <p><FaSteam className={styles['steam-icon']}/></p>
                                        </span>
                                        
                                        <span className={`${styles['ratings']}`}>
                                            <p>
                                                <FaStar className={styles['icon-star']}/>
                                                <FaStar className={styles['icon-star']}/>
                                                <FaStar className={styles['icon-star']}/>
                                                <FaStar className={styles['icon-star']}/>
                                                <FaStar className={styles['icon-star']}/>
                                                <span> 5.0</span>
                                            </p>
                                        </span>
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
                                        <a href="/gameDetail"><button>Ver oferta</button></a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>  
            </section>

            <section className={styles.deals}>
                <div className={`${styles.container}`}>
                    <div className={styles['deals-subtitle']}>
                        <h2>Melhores ofertas</h2>
                        <a href="/offers">Ver todos <FaArrowRight className={styles['right-icon']}/> </a>
                    </div>
                    <div className={styles['card-games']}>
                        {gamesMock.slice(0,5).map((game, index) => {
                            const discountPercent = Math.round(
                                ((game.deal.regular.amount - game.deal.price.amount) / game.deal.regular.amount) * 100
                            );
                            return (
                                <div key={index} className={`${styles['card-game']}`}>
                                    <div className={`${styles['cards']}`}>
                                        <div className={styles['card-top']}>
                                            <p className={styles['porcent-discount']}>-{discountPercent}%</p>
                                            <p ><FaRegHeart className={styles['icon-heart']}/></p>
                                            <img 
                                                className={styles['image-game']} 
                                                src={game.deal.assets.boxart} 
                                                alt={`Capa do jogo ${game.title}`} 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className={`${styles['description']}`}>
                                        <p className={`${styles['game-name']}`}>{game.title}</p>
                                        
                                        <span className={`${styles['tags']}`}>
                                            {game.tags.slice(0, 2).map((tag, tagIndex) => (
                                                <p key={tagIndex}>{tag}</p>
                                            ))}
                                        </span>
                                        
                                        <span className={`${styles['stores']}`}>
                                            <p><FaSteam className={styles['steam-icon']}/></p>
                                        </span>
                                        
                                        <span className={`${styles['ratings']}`}>
                                            <p>
                                                <FaStar className={styles['icon-star']}/>
                                                <FaStar className={styles['icon-star']}/>
                                                <FaStar className={styles['icon-star']}/>
                                                <FaStar className={styles['icon-star']}/>
                                                <FaStar className={styles['icon-star']}/>
                                                <span> 5.0</span>
                                            </p>
                                        </span>
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
                                        <a href="/gameDetail"><button>Ver oferta</button></a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>  
            </section>

            <section className={styles['create-account']}>
                <div className={`container ${styles.container}`}>
                    <h1 className={styles.title}>Nunca mais pague <span className={styles['color-title']}> caro </span>novamente</h1>
                    <p>Crie uma conta de graça</p>
                    <p>E fique por dentro dos melhores preços, acompanhando </p>
                    <p>de perto seus jogos favoritos mais baratos</p>
                    <div className={styles['button-area']}>
                        <a type="submit" className={styles['button-create']} href="/signUp">Inscreva-se de graça</a>
                        <a type="submit" className={styles['button-about']}>Veja as ofertas</a>
                    </div>
                </div>
            </section>
        </main>
    )
}