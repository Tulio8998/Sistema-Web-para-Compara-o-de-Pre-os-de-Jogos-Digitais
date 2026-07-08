import { useState } from 'react';
import styles from '../../styles/myAccount.module.css';
import { FaAngleDown, FaAngleUp, FaRegHeart, FaStar, FaSteam, FaHeart } from 'react-icons/fa';
import { gamesMock } from '../../mocks/game';

export function MyAccount() {
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <>
        <section className={styles['favorite-page']}>
            <div className={styles.container}>
                <div className={styles['favorite-start']}>
                    <p>Meus jogos favoritos</p>

                    <div className={`${styles['dropdown-bar']}`}>
                        <button className={styles['show-bar-header']} onClick={() => setIsOpen(!isOpen)}>
                            Ordenar por
                            { isOpen ? <FaAngleUp className={styles['icon-up']} /> : <FaAngleDown className={styles['icon-down']} /> }
                        </button>
                        <ul className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                            <li>Menor Preço</li>
                            <li>Maior Preço</li>
                            <li>Melhor Desconto</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles['save-game']}`}>
                    <div className={`${styles['container-card']}`}>
                        {gamesMock.slice(0,12).map((game, index) => {
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
                    
                    <div className={`${styles['select-button']}`}>
                        <button className={`${styles['previous-button']}`}>Anterior</button>
                        <button className={`${styles['number-button']}`}>1</button>
                        <button className={`${styles['number-button']}`}>2</button>
                        <button className={`${styles['number-button']}`}>3</button>
                        <button className={`${styles['number-button-etc']}`}>...</button>
                        <button className={`${styles['number-button']}`}>49</button>
                        <button className={`${styles['number-button']}`}>50</button>
                        <button className={`${styles['next-button']}`}>Próximo</button>
                    </div>
                </div> 
            </div>
        </section> 
        </>
    );
}