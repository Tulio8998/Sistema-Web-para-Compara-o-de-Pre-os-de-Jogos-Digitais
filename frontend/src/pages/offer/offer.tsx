import { useState } from 'react';
import styles from '../../styles/offer.module.css'
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { PriceFilter } from '../../utils/offer';
import { FaStar } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";

export function Offer() {
    const [isOpen, setIsOpen] = useState(false);
    const [genreOpen, setGenreOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false);
    const [storeOpen, setStoreOpen] = useState(false);
    const [discountOpen, setDiscountOpen] = useState(false);
    const [ratingOpen, setRatingOpen] = useState(false);
    const [releaseOpen, setReleaseOpen] = useState(false);
    const [compatOpen, setCompatOpen] = useState(false);
    
    return(
        <section className={styles['offer-page']}>
            <div className={`${styles.container}`}>
                <div className={`${styles['horizontal-border']}`}>
                    <div className={`${styles['link-border']}`}>
                        <a href="\">Início</a>
                        <span><FaChevronRight className={`${styles['icon-right']}`}/></span>
                        <a href="\offers">Ofertas</a>
                    </div>

                    <div className={`${styles['show-border']}`}>
                        <div className={`${styles['show-result']}`}>    
                            <p>Mostrando <span>1500</span> resultados</p>
                        </div>

                        <div className={`${styles['show-tags']}`}>
                            <a href="">RPF Ação</a>
                            <a href="">Menor que R$30</a>
                        </div>

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
                </div>

                <div className={`${styles['offer-container']}`}>
                    <div className={`${styles['aside-bar']}`}>
                        <div className={`${styles['aside-filter']}`}>
                            <p><FaFilter className={`${styles['icon-filter']}`}/>Filtros</p>
                            <button>Limpar tudo</button>
                        </div>

                        <div className={styles['aside-genre']}>
                            <button className={styles['aside-header']} onClick={() => setGenreOpen(!genreOpen)}>
                                <p>Gênero</p>
                                {genreOpen
                                    ? <FaAngleUp className={styles['icon-up-filter']} />
                                    : <FaAngleDown className={styles['icon-down-filter']} />
                                }
                            </button>

                            <ul className={`${styles['dropdown-filter']} ${genreOpen ? styles.openFilter : ''}`}>
                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>RPG </label>
                                </li>
                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>Ação </label>
                                </li>

                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>Aventura </label>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles['aside-price']}`}>
                            <button className={styles['aside-header']} onClick={() => setPriceOpen(!priceOpen)}>
                                <p>Faixa de Preço</p>
                                {priceOpen
                                    ? <FaAngleUp className={styles['icon-up-filter']} />
                                    : <FaAngleDown className={styles['icon-down-filter']} />
                                }
                            </button>

                            <ul className={`${styles['dropdown-filter']} ${priceOpen ? styles.openFilter : ''}`}>
                                <li>
                                    <PriceFilter/>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles['aside-store']}`}>
                            <button className={styles['aside-header']} onClick={() => setStoreOpen(!storeOpen)}>
                                <p>Lojas</p>
                                {storeOpen
                                    ? <FaAngleUp className={styles['icon-up-filter']} />
                                    : <FaAngleDown className={styles['icon-down-filter']} />
                                }
                            </button>

                            <ul className={`${styles['dropdown-filter']} ${storeOpen ? styles.openFilter : ''}`}>
                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>Steam</label>
                                </li>
                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>GOG</label>
                                </li>

                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>Epic</label>
                                </li>
                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>Humble</label>
                                </li>
                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>Nuuvem</label>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles['aside-discount']}`}>
                            <button className={styles['aside-header']} onClick={() => setDiscountOpen(!discountOpen)}>
                                <p>Descontos</p>
                                {discountOpen
                                    ? <FaAngleUp className={styles['icon-up-filter']} />
                                    : <FaAngleDown className={styles['icon-down-filter']} />
                                }
                            </button>

                            <ul className={`${styles['dropdown-filter']} ${discountOpen ? styles.openFilter : ''}`}>
                                <li>
                                    <label> <input type="checkbox"/>Qualquer Desconto </label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>25%</label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>50%</label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>75%</label>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles['aside-rating']}`}>
                            <button className={styles['aside-header']} onClick={() => setRatingOpen(!ratingOpen)}>
                                <p>Avaliações</p>
                                {ratingOpen
                                    ? <FaAngleUp className={styles['icon-up-filter']} />
                                    : <FaAngleDown className={styles['icon-down-filter']} />
                                }
                            </button>

                            <ul className={`${styles['dropdown-filter']} ${ratingOpen ? styles.openFilter : ''}`}>
                                <li>
                                    <label><input className={`${styles['input-checkbox']}`} type="checkbox"/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span>5+ Estrelas</span></label>
                                </li>
                                <li>
                                    <label><input className={`${styles['input-checkbox']}`} type="checkbox"/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star-void']}/><span>4+ Estrelas</span></label>
                                </li>
                                <li>
                                    <label><input className={`${styles['input-checkbox']}`} type="checkbox"/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star-void']}/><FaStar className={styles['icon-star-void']}/><span>3+ Estrelas</span></label>
                                </li>
                                <li>
                                    <label><input className={`${styles['input-checkbox']}`} type="checkbox"/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star-void']}/><FaStar className={styles['icon-star-void']}/><FaStar className={styles['icon-star-void']}/><span>2+ Estrelas</span></label>
                                </li>
                                <li>
                                    <label><input className={`${styles['input-checkbox']}`} type="checkbox"/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star-void']}/><FaStar className={styles['icon-star-void']}/><FaStar className={styles['icon-star-void']}/><FaStar className={styles['icon-star-void']}/><span>1+ Estrelas</span></label>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles['aside-release']}`}>
                            <button className={styles['aside-header']} onClick={() => setReleaseOpen(!releaseOpen)}>
                                <p>Ano de Lançamento</p>
                                {releaseOpen
                                    ? <FaAngleUp className={styles['icon-up-filter']} />
                                    : <FaAngleDown className={styles['icon-down-filter']} />
                                }
                            </button>

                            <ul className={`${styles['dropdown-filter']} ${releaseOpen ? styles.openFilter : ''}`}>
                                <li>
                                    <label>2018 - 2022</label>
                                </li>
                                <li>
                                    <label>2022 - 2026</label>
                                </li>
                                <li>
                                    <label>2010 - 2014</label>
                                </li>
                                <li>
                                    <label>2014 - 2018</label>
                                </li>
                                <li>
                                    <label>2002 - 2006</label>
                                </li>
                                <li>
                                    <label>2006 - 2010</label>
                                </li>
                                <li>
                                    <label>1994 - 1998</label>
                                </li>
                                <li>
                                    <label>1998 - 2002</label>
                                </li>
                            </ul>
                        </div>

                        <div className={`${styles['aside-compati']}`}>
                            <button className={styles['aside-header']} onClick={() => setCompatOpen(!compatOpen)}>
                                <p>Compatibilidade</p>
                                {compatOpen
                                    ? <FaAngleUp className={styles['icon-up-filter']} />
                                    : <FaAngleDown className={styles['icon-down-filter']} />
                                }
                            </button>

                            <ul className={`${styles['dropdown-filter']} ${compatOpen ? styles.openFilter : ''}`}>
                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>Windows </label>
                                </li>
                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>macOS </label>
                                </li>

                                <li>
                                    <label> <input className={`${styles['input-checkbox']}`} type="checkbox"/>Linux </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles['offer-main']}`}>
                        <div className={`${styles['container-card']}`}>
                            <div className={`${styles['card-game']}`}>
                                <div className={`${styles['cards']}`}>
                                    <div className={styles['card-top']}>
                                        <p className={styles['porcent-discount']}>44%</p>
                                        <img className={styles['image-game']} src="https://assets.isthereanydeal.com/018d937f-1212-7232-b23f-a046f6fd4a57/boxart.jpg?t=1768305010" alt="" />
                                    </div>
                                </div>
                                <div className={`${styles['description']}`}>
                                    <p className={`${styles['game-name']}`}>Nome jogo</p>
                                    <span className={`${styles['tags']}`}>
                                        <p>RPG Ação</p>
                                        <p>Mundo aberto</p>
                                    </span>
                                    <span className={`${styles['stores']}`}>
                                        <p><FaSteam className={styles['steam-icon']}/></p>
                                    </span>
                                    <span className={`${styles['ratings']}`}>
                                        <p><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span> 5.0</span></p>
                                    </span>
                                </div>
                                <div className={`${styles['detail-price']}`}>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$69.99</p>
                                        <p className={`${styles['discount-price']}`}>R$48.99</p>
                                    </span>
                                    <button>Ver oferta</button>
                                </div>
                            </div>
                            <div className={`${styles['card-game']}`}>
                                <div className={`${styles['description']}`}>
                                    <p className={`${styles['game-name']}`}>Nome jogo</p>
                                    <span className={`${styles['tags']}`}>
                                        <p>RPG Ação</p>
                                        <p>Mundo aberto</p>
                                    </span>
                                    <span className={`${styles['stores']}`}>
                                        <p><FaSteam className={styles['steam-icon']}/></p>
                                    </span>
                                    <span className={`${styles['ratings']}`}>
                                        <p><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span> 5.0</span></p>
                                    </span>
                                </div>
                                <div className={`${styles['detail-price']}`}>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$69.99</p>
                                        <p className={`${styles['discount-price']}`}>R$48.99</p>
                                    </span>
                                    <button>Ver oferta</button>
                                </div>
                            </div>
                            <div className={`${styles['card-game']}`}>
                                <div className={`${styles['description']}`}>
                                    <p className={`${styles['game-name']}`}>Nome jogo</p>
                                    <span className={`${styles['tags']}`}>
                                        <p>RPG Ação</p>
                                        <p>Mundo aberto</p>
                                    </span>
                                    <span className={`${styles['stores']}`}>
                                        <p><FaSteam className={styles['steam-icon']}/></p>
                                    </span>
                                    <span className={`${styles['ratings']}`}>
                                        <p><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span> 5.0</span></p>
                                    </span>
                                </div>
                                <div className={`${styles['detail-price']}`}>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$69.99</p>
                                        <p className={`${styles['discount-price']}`}>R$48.99</p>
                                    </span>
                                    <button>Ver oferta</button>
                                </div>
                            </div>
                            <div className={`${styles['card-game']}`}>
                                <div className={`${styles['description']}`}>
                                    <p className={`${styles['game-name']}`}>Nome jogo</p>
                                    <span className={`${styles['tags']}`}>
                                        <p>RPG Ação</p>
                                        <p>Mundo aberto</p>
                                    </span>
                                    <span className={`${styles['stores']}`}>
                                        <p><FaSteam className={styles['steam-icon']}/></p>
                                    </span>
                                    <span className={`${styles['ratings']}`}>
                                        <p><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span> 5.0</span></p>
                                    </span>
                                </div>
                                <div className={`${styles['detail-price']}`}>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$69.99</p>
                                        <p className={`${styles['discount-price']}`}>R$48.99</p>
                                    </span>
                                    <button>Ver oferta</button>
                                </div>
                            </div>
                            <div className={`${styles['card-game']}`}>
                                <div className={`${styles['description']}`}>
                                    <p className={`${styles['game-name']}`}>Nome jogo</p>
                                    <span className={`${styles['tags']}`}>
                                        <p>RPG Ação</p>
                                        <p>Mundo aberto</p>
                                    </span>
                                    <span className={`${styles['stores']}`}>
                                        <p><FaSteam className={styles['steam-icon']}/></p>
                                    </span>
                                    <span className={`${styles['ratings']}`}>
                                        <p><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span> 5.0</span></p>
                                    </span>
                                </div>
                                <div className={`${styles['detail-price']}`}>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$69.99</p>
                                        <p className={`${styles['discount-price']}`}>R$48.99</p>
                                    </span>
                                    <button>Ver oferta</button>
                                </div>
                            </div>
                            <div className={`${styles['card-game']}`}>
                                <div className={`${styles['description']}`}>
                                    <p className={`${styles['game-name']}`}>Nome jogo</p>
                                    <span className={`${styles['tags']}`}>
                                        <p>RPG Ação</p>
                                        <p>Mundo aberto</p>
                                    </span>
                                    <span className={`${styles['stores']}`}>
                                        <p><FaSteam className={styles['steam-icon']}/></p>
                                    </span>
                                    <span className={`${styles['ratings']}`}>
                                        <p><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span> 5.0</span></p>
                                    </span>
                                </div>
                                <div className={`${styles['detail-price']}`}>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$69.99</p>
                                        <p className={`${styles['discount-price']}`}>R$48.99</p>
                                    </span>
                                    <button>Ver oferta</button>
                                </div>
                            </div>
                            <div className={`${styles['card-game']}`}>
                                <div className={`${styles['description']}`}>
                                    <p className={`${styles['game-name']}`}>Nome jogo</p>
                                    <span className={`${styles['tags']}`}>
                                        <p>RPG Ação</p>
                                        <p>Mundo aberto</p>
                                    </span>
                                    <span className={`${styles['stores']}`}>
                                        <p><FaSteam className={styles['steam-icon']}/></p>
                                    </span>
                                    <span className={`${styles['ratings']}`}>
                                        <p><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span> 5.0</span></p>
                                    </span>
                                </div>
                                <div className={`${styles['detail-price']}`}>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$69.99</p>
                                        <p className={`${styles['discount-price']}`}>R$48.99</p>
                                    </span>
                                    <button>Ver oferta</button>
                                </div>
                            </div>
                            <div className={`${styles['card-game']}`}>
                                <div className={`${styles['description']}`}>
                                    <p className={`${styles['game-name']}`}>Nome jogo</p>
                                    <span className={`${styles['tags']}`}>
                                        <p>RPG Ação</p>
                                        <p>Mundo aberto</p>
                                    </span>
                                    <span className={`${styles['stores']}`}>
                                        <p><FaSteam className={styles['steam-icon']}/></p>
                                    </span>
                                    <span className={`${styles['ratings']}`}>
                                        <p><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span> 5.0</span></p>
                                    </span>
                                </div>
                                <div className={`${styles['detail-price']}`}>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$69.99</p>
                                        <p className={`${styles['discount-price']}`}>R$48.99</p>
                                    </span>
                                    <button>Ver oferta</button>
                                </div>
                            </div>
                            <div className={`${styles['card-game']}`}>
                                <div className={`${styles['description']}`}>
                                    <p className={`${styles['game-name']}`}>Nome jogo</p>
                                    <span className={`${styles['tags']}`}>
                                        <p>RPG Ação</p>
                                        <p>Mundo aberto</p>
                                    </span>
                                    <span className={`${styles['stores']}`}>
                                        <p><FaSteam className={styles['steam-icon']}/></p>
                                    </span>
                                    <span className={`${styles['ratings']}`}>
                                        <p><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><FaStar className={styles['icon-star']}/><span> 5.0</span></p>
                                    </span>
                                </div>
                                <div className={`${styles['detail-price']}`}>
                                    <span>
                                        <p className={`${styles['real-price']}`}>R$69.99</p>
                                        <p className={`${styles['discount-price']}`}>R$48.99</p>
                                    </span>
                                    <button>Ver oferta</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}