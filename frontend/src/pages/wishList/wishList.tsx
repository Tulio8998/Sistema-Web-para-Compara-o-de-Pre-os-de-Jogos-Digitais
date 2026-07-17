import { useEffect, useState } from 'react';
import styles from '../../styles/myAccount.module.css';
import { FaAngleDown, FaAngleUp, FaStar, FaSteam } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getWishList } from '../../services/apiService';
import { FavoriteButton } from '../../components/FavoriteButton';

export function WishList() {
    const [isOpen, setIsOpen] = useState(false);
    const [favorites, setFavorites] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFavorites() {
            try {
                const data = await getWishList();
                const mappedGames = data.map((item: any) => ({
                    ...item.game, 
                    wishListId: item.id 
                }));
                setFavorites(mappedGames);
            } catch (error) {
                console.error("Erro ao carregar favoritos:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchFavorites();
    }, []);

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '100px', color: '#fff' }}>Carregando favoritos...</div>;
    }

    return (
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
                            <li>Adicionados Recentemente</li>
                            <li>A-Z</li>
                        </ul>
                    </div>
                </div>

                {favorites.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#9CA3AF', fontSize: '1.2rem' }}>
                        Você ainda não adicionou nenhum jogo aos favoritos.
                    </div>
                ) : (
                    <div className={`${styles['save-game']}`}>
                        <div className={`${styles['container-card']}`}>
                            {favorites.map((game, index) => {
                                const currentPrice = game.deal?.price?.amount || 0;
                                const regularPrice = game.deal?.regular?.amount || 0;
                                const discountPercent = regularPrice > 0 ? Math.round(((regularPrice - currentPrice) / regularPrice) * 100) : 0;
                                
                                return (
                                    <div key={index} className={`${styles['card-game']}`}>
                                        <div className={`${styles['cards']}`}>
                                            <div className={styles['card-top']}>
                                                <p className={styles['porcent-discount']}>-{discountPercent}%</p>
                                                <p className={styles['icon-heart']}><FavoriteButton gameId={game.externalApiId || game.id} /></p>
                                                <img 
                                                    className={styles['image-game']} 
                                                    src={game.assets?.banner600 || game.assets?.boxart || '/assets/NoCape.png'}
                                                    onError={(e) => { e.currentTarget.src = '/assets/NoCape.png'; }}
                                                    alt={`Capa do jogo ${game.title}`} 
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className={`${styles['description']}`}>
                                            <p className={`${styles['game-name']}`}>{game.title}</p>
                                            <span className={`${styles['tags']}`}>
                                                {game.tags?.slice(0, 2).map((tag: string, tagIndex: number) => (
                                                    <p key={tagIndex}>{tag}</p>
                                                ))}
                                            </span>
                                            <span className={`${styles['stores']}`}>
                                                <p><FaSteam className={styles['steam-icon']}/> {game.deal?.shop?.name || ''}</p>
                                            </span>
                                        </div>
                                        
                                        <div className={`${styles['detail-price']}`}>
                                            <span>
                                                <p className={`${styles['real-price']}`}>
                                                    R${regularPrice.toFixed(2).replace('.', ',')}
                                                </p>
                                                <p className={`${styles['discount-price']}`}>
                                                    R${currentPrice.toFixed(2).replace('.', ',')}
                                                </p>
                                            </span>
                                            <Link to={`/gameDetail/${game.externalApiId}`} style={{ textDecoration: 'none' }}>
                                                <button>Ver oferta</button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}