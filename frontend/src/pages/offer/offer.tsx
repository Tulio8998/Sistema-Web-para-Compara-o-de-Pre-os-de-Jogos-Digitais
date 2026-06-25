import { useState } from 'react';
import styles from '../../styles/offer.module.css'
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { PriceFilter } from '../../utils/offer';


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
                                    <label> <input type="checkbox"/>RPG </label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>Ação </label>
                                </li>

                                <li>
                                    <label> <input type="checkbox"/>Aventura </label>
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
                                    <label> <input type="checkbox"/>Steam</label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>GOG</label>
                                </li>

                                <li>
                                    <label> <input type="checkbox"/>Epic</label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>Humble</label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>Nuuvem</label>
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
                                    <label> <input type="checkbox"/>RPG </label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>Ação </label>
                                </li>

                                <li>
                                    <label> <input type="checkbox"/>Aventura </label>
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
                                    <label> <input type="checkbox"/>RPG </label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>Ação </label>
                                </li>

                                <li>
                                    <label> <input type="checkbox"/>Aventura </label>
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
                                    <label> <input type="checkbox"/>Windows </label>
                                </li>
                                <li>
                                    <label> <input type="checkbox"/>macOS </label>
                                </li>

                                <li>
                                    <label> <input type="checkbox"/>Linux </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles['offer-main']}`}>
                        <div className={`${styles['container-card']}`}>
                            <div className={`${styles['card-game']}`}>
                                Teste
                            </div>
                            <div className={`${styles['card-game']}`}>
                                Teste
                            </div>
                            <div className={`${styles['card-game']}`}>
                                Teste
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </section>
    );
}