import styles from '../../styles/home.module.css';
import { FaArrowRight } from "react-icons/fa";
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
                        {gamesMock.slice(0,5).map((game, index) => (
                            <div className={styles.cards} key={index}>
                                <div className={styles['card-top']}>
                                    <p className={styles['porcent-discount']}>44%</p>
                                    <img className={styles['image-game']} src={game.deal.assets.boxart} alt="" />
                                </div>
                                <div className={styles['card-bottom']}>
                                    <p className={styles['title-game']}>{game.title}</p>
                                    <p className={styles['store-game']}><FaSteam className={styles['store-icon']}/>{game.deal.shop.name}</p>
                                    <div className={styles['prices-game']}>
                                        <p className={styles['descount-game']}>R${game.deal.price.amount}</p>
                                        <p className={styles['price-game']}>R${game.deal.regular.amount}</p>
                                    </div>
                                </div> 
                            </div>
                        ))}
                    </div>
                </div>  
            </section>

            <section className={styles.deals}>
                <div className={`${styles.container}`}>
                    <div className={styles['deals-subtitle']}>
                        <h2>Melhores ofertas</h2>
                        <a href="">Ver todos <FaArrowRight className={styles['right-icon']}/> </a>
                    </div>
                    <div className={styles['card-games']}>
                        {gamesMock.slice(0,5).map((game, index) => (
                            <div className={styles.cards} key={index}>
                                <div className={styles['card-top']}>
                                    <p className={styles['porcent-discount']}>44%</p>
                                    <img className={styles['image-game']} src={game.deal.assets.boxart} alt="" />
                                </div>
                                <div className={styles['card-bottom']}>
                                    <p className={styles['title-game']}>{game.title}</p>
                                    <p className={styles['store-game']}><FaSteam className={styles['store-icon']}/>{game.deal.shop.name}</p>
                                    <div className={styles['prices-game']}>
                                        <p className={styles['descount-game']}>R${game.deal.price.amount}</p>
                                        <p className={styles['price-game']}>R${game.deal.regular.amount}</p>
                                    </div>
                                </div> 
                            </div>
                        ))}
                    </div>
                </div>  
            </section>

            <section className={styles['best-prices']}>
                <div className={`${styles.container}`}>
                    <div className={styles['best-subtitle']}>
                        <h2>Melhores preços</h2>
                        <a href="">Ver todos <FaArrowRight className={styles['right-icon']}/> </a>
                    </div>
                    <div className={styles['card-games']}>
                        {gamesMock.slice(0,5).map((game, index) => (
                            <div className={styles.cards} key={index}>
                                <div className={styles['card-top']}>
                                    <p className={styles['porcent-discount']}>44%</p>
                                    <img className={styles['image-game']} src={game.deal.assets.boxart} alt="" />
                                </div>
                                <div className={styles['card-bottom']}>
                                    <p className={styles['title-game']}>{game.title}</p>
                                    <p className={styles['store-game']}><FaSteam className={styles['store-icon']}/>{game.deal.shop.name}</p>
                                    <div className={styles['prices-game']}>
                                        <p className={styles['descount-game']}>R${game.deal.price.amount}</p>
                                        <p className={styles['price-game']}>R${game.deal.regular.amount}</p>
                                    </div>
                                </div> 
                            </div>
                        ))}
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