import styles from '../../styles/gameDetail.module.css'
import { FaExternalLinkAlt, FaStar, FaTrophy } from "react-icons/fa";
import { PriceHistory } from '../../utils/details';
import { GoGraph } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { MdAccessTime, MdFavorite, MdStorage } from 'react-icons/md';
import { BiLike } from 'react-icons/bi';
import { LiaAwardSolid } from 'react-icons/lia';
import { RiShareBoxLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../services/apiService';

export function GameDetail() {
    const { id } = useParams();
    const [game, setGame] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGame() {
            try {
                if (id) {
                    const data = await getGameById(id);
                    setGame(data);

                    const savedRecent = JSON.parse(localStorage.getItem('recentGames') || '[]');
                    const filteredRecent = savedRecent.filter((g: any) => 
                        (g.externalApiId || g.id) !== (data.externalApiId || data.id)
                    );
                    
                    filteredRecent.unshift(data); 
                    localStorage.setItem('recentGames', JSON.stringify(filteredRecent.slice(0, 10)));
                }
            } catch (error) {
                console.error("Erro ao carregar jogo:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchGame();
    }, [id]);

    if (loading) return <div style={{ textAlign: 'center', marginTop: '100px', color: '#fff' }}>Carregando Jogo...</div>;
    if (!game) return <div style={{ textAlign: 'center', marginTop: '100px', color: '#fff' }}>Jogo não encontrado!</div>;

    const developers = game.developers?.map((d: any) => d.name).join(', ') || 'Desconhecido';
    const releaseDate = game.releaseDate ? new Date(game.releaseDate).toLocaleDateString('pt-BR') : 'Data não informada';
    const currentPrice = game.deal?.price?.amount || 0;
    const regularPrice = game.deal?.regular?.amount || 0;
    const discountPercent = regularPrice > 0 ? Math.round(((regularPrice - currentPrice) / regularPrice) * 100) : 0;
    
    const coverImage = game.assets?.banner600  || game.assets?.banner400 || '/assets/NoCape.png';

    return (
        <section className={styles['detail-page']}>
            <div className={`${styles.container}`}>
                <div className={`${styles['start-container']}`}>
                    <div className={`${styles['game-detail']}`}> 
                        <div className={`${styles['game-cover']}`}>
                            <img src={coverImage} onError={(e) => { e.currentTarget.src = '/assets/NoCape.png'; }} alt={game.title} />
                        </div> 
                        
                        <div className={`${styles['game-description']}`}>
                            <p className={`${styles['owner-game']}`}>De - {developers} - Lançamento: {releaseDate} <span> PC/Windows</span></p>
                            <h2>{game.title}</h2>
                            <div className={styles['rating-game']}>
                                <span className={styles['critic-game']}>
                                    <p className={styles['color-note']}>{game.reviews?.[0]?.score || '--'}</p>
                                    <span className={styles['critic-color']}>
                                        <p>{game.reviews?.[0]?.source || 'Metacritic'}</p>
                                        <p>Score Geral</p>
                                    </span>
                                </span>
                                <span className={styles['line-separate']}></span>
                                <p className={styles['avaliation-game']}>
                                    <FaStar className={styles['icon-star']}/>
                                    <FaStar className={styles['icon-star']}/>
                                    <FaStar className={styles['icon-star']}/>
                                    <FaStar className={styles['icon-star']}/>
                                    <FaStar className={styles['icon-star']}/> 
                                    <span className={styles['span1']}> 5.0</span> 
                                    <span className={styles['span2']}> ({game.player?.recent || 0} jogando)</span>
                                </p>
                            </div>
                            
                            <ul className={styles['tags-game']}>
                                {game.tags?.slice(0, 5).map((tag: string, index: number) => (
                                    <li key={index} className={styles['tag']}>{tag}</li>
                                ))}
                            </ul>
                            
                            <p className={styles['text-description']}>
                                {game.description || `Confira as melhores ofertas para ${game.title}. Compare preços e economize na sua próxima aventura!`}
                            </p>
                            
                            <span className={styles['button-options']}>
                                <button> <MdFavorite className={styles['icon-favorite']}/>Adicionar aos Favoritos</button>
                                <button> <RiShareBoxLine className={styles['icon-share']}/>Compartilhar</button>
                            </span>
                            
                            <div className={styles['prices']}>
                                <span className={styles['span1']}>
                                    <p>MELHOR PREÇO HOJE</p>
                                    <p>R${currentPrice.toFixed(2).replace('.', ',')}</p>
                                </span>
                                <span className={styles['line-separate']}></span>
                                <span className={styles['span2']}>
                                    <p>{discountPercent}% OFF</p>
                                    <p>De R${regularPrice.toFixed(2).replace('.', ',')}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${styles['detail-container']}`}>
                    <div className={`${styles['div-detail']}`}>
                        <div className={`${styles['across-store']}`}>
                            <div className={`${styles['title']}`}>
                                <p className={`${styles['price-store']}`}>Melhor Oferta Disponível</p>
                                <p className={`${styles['last-update']}`}>Atualizado <span> Hoje</span></p>
                            </div>
                            <div className={`${styles['table']}`}>
                                <table>
                                    <thead>
                                        <tr className={`${styles['tr-table']}`}>
                                            <th className={`${styles['title-table']}`}>LOJA</th>
                                            <th className={`${styles['title-table']}`}>EDIÇÃO</th>
                                            <th className={`${styles['title-table']}`}>PREÇO ORIGINAL</th>
                                            <th className={`${styles['title-table']}`}>PREÇO COM DESCONTO</th>
                                            <th className={`${styles['title-table']}`}>LINK</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {game.offers && game.offers.length > 0 ? (
                                            game.offers.map((offer: any, index: number) => {
                                                const offerCurrentPrice = offer.price?.amount || 0;
                                                const offerRegularPrice = offer.regular?.amount || 0;
                                                const offerDiscount = offerRegularPrice > 0 ? Math.round(((offerRegularPrice - offerCurrentPrice) / offerRegularPrice) * 100) : 0;

                                                return (
                                                    <tr key={index} className={`${styles['tr-table']}`}>
                                                        <td>{offer.shop?.name || 'Loja Desconhecida'} <p>PC Digital</p></td>
                                                        <td>Edição Padrão</td>
                                                        <td className={`${styles['real-price']}`}>R${offerRegularPrice.toFixed(2).replace('.', ',')}</td>
                                                        <td className={`${styles['discount-price']}`}>
                                                            R${offerCurrentPrice.toFixed(2).replace('.', ',')} 
                                                            {offerDiscount > 0 && <span>-{offerDiscount}%</span>}
                                                        </td>
                                                        <td className={`${styles['buy-link']}`}>
                                                            <a href={offer.url || '#'} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                                                                <span>Compre Agora <FaExternalLinkAlt className={`${styles['icon-link']}`}/></span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr className={`${styles['tr-table']}`}>
                                                <td colSpan={5} style={{ padding: '2rem', color: '#9CA3AF' }}>
                                                    Nenhuma oferta disponível no momento.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>                             
                        </div>
                        
                        <div className={`${styles['price-history']}`}>
                            <div className={`${styles['title']}`}>
                                <p className={`${styles['history']}`}><GoGraph className={`${styles['icon']} ${styles['icon-graph']}`}/> Histórico de Preço</p>
                            </div>
                            <PriceHistory deal={game.deal} />
                        </div>
                    </div>
                    
                    <div className={`${styles['aside-status']}`}>
                        <div className={`${styles['game-status']}`}>
                            <p className={`${styles['title-status']}`}>Status do Jogo</p>
                            <span>
                                <p><IoPerson className={`${styles['icon-status']}`}/>Pico de Jogadores</p>
                                <p className={`${styles['data-calor']}`}>{game.player?.peak || '--'}</p>
                            </span>  
                            <span>
                                <p><MdAccessTime className={`${styles['icon-status']}`}/>Jogadores (Semana)</p>
                                <p className={`${styles['data-calor']}`}>{game.player?.week || '--'}</p>
                            </span>
                            <span>
                                <p><BiLike className={`${styles['icon-status']}`}/>Conquistas</p>
                                <p className={`${styles['rating-color']}`}>{game.achievements ? 'Sim' : 'Não'}</p>
                            </span>
                            <span>
                                <p><LiaAwardSolid className={`${styles['icon-status']}`}/>Cartas Colecionáveis</p>
                                <p className={`${styles['awards-color']}`}>{game.tradingCards ? 'Sim' : 'Não'}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}