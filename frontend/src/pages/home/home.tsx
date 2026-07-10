import styles from '../../styles/home.module.css';
import { FaArrowRight, FaRegHeart, FaStar } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getGamesDeals } from '../../services/apiService';
import { formatGamesDeals } from '../../utils/gameAdapter';
import { Link } from 'react-router-dom';

export function Home() {
    const [bestDeals, setBestDeals] = useState<any[]>([]);
    const [recentGames, setRecentGames] = useState<any[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);

        const savedRecent = JSON.parse(localStorage.getItem('recentGames') || '[]');
        setRecentGames(savedRecent.slice(0, 4));

        async function fetchDeals() {
            try {
                const response = await getGamesDeals(50, 0);
                const formatted = formatGamesDeals(response);
                
                formatted.sort((a, b) => {
                    const pctA = a.deal?.regular?.amount ? ((a.deal.regular.amount - a.deal.price.amount) / a.deal.regular.amount) : 0;
                    const pctB = b.deal?.regular?.amount ? ((b.deal.regular.amount - b.deal.price.amount) / b.deal.regular.amount) : 0;
                    return pctB - pctA;
                });

                setBestDeals(formatted.slice(0, 4));
            } catch (error) {
                console.error("Erro ao carregar melhores ofertas:", error);
            }
        }
        fetchDeals();
    }, []);

    const renderGameCard = (game: any, index: number) => {
        if (!game || !game.deal) return null;
        
        const currentPrice = game.deal.price?.amount || 0;
        const regularPrice = game.deal.regular?.amount || 0;
        const discountPercent = regularPrice > 0 ? Math.round(((regularPrice - currentPrice) / regularPrice) * 100) : 0;
        const coverImage = game.assets?.banner600 || game.assets?.banner400 || game.assets?.boxart || '/assets/NoCape.png';

        return (
            <div key={game.id || index} className={`${styles['card-game']}`}>
                <div className={`${styles['cards']}`}>
                    <div className={styles['card-top']}>
                        <p className={styles['porcent-discount']}>-{discountPercent}%</p>
                        <p><FaRegHeart className={styles['icon-heart']}/></p>
                        <img
                            className={styles['image-game']}
                            src={coverImage}
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
                        <p>{game.deal.shop?.name || 'Várias Lojas'}</p>
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
                    <Link to={`/gameDetail/${game.externalApiId || game.id}`} style={{ textDecoration: 'none' }}>
                        <button>Ver oferta</button>
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <main className={styles['home-page']}>
            <section className={styles.start}>
                <div className={`container ${styles.container}`}>
                    <h1 className={styles.title}>Encontre o<span className={styles['color-title']}> melhor preço </span>para qualquer jogo</h1>
                    <p>Compare preços da Steam, Epic, GOG, e muito mais</p>
                    <p>Economize mais, jogue mais</p>
                </div>
            </section>

            {recentGames.length > 0 && (
                <section className={styles.preferences}>
                    <div className={`${styles.container}`}>
                        <div className={styles['preference-subtitle']}>
                            <h2>Suas preferências</h2>
                        </div>
                        <div className={styles['card-games']}>
                            {recentGames.map(renderGameCard)}
                        </div>
                    </div>
                </section>
            )}

            <section className={styles.deals}>
                <div className={`${styles.container}`}>
                    <div className={styles['deals-subtitle']}>
                        <h2>Melhores ofertas</h2>
                        <a href="/offers">Ver todos <FaArrowRight className={styles['right-icon']}/> </a>
                    </div>
                    <div className={styles['card-games']}>
                        {bestDeals.length > 0 ? bestDeals.map(renderGameCard) : <p style={{ color: '#9CA3AF' }}>Carregando as melhores ofertas...</p>}
                    </div>
                </div>
            </section>

            {!isAuthenticated && (
                <section className={styles['create-account']}>
                    <div className={`container ${styles.container}`}>
                        <h1 className={styles.title}>Nunca mais pague <span className={styles['color-title']}> caro </span>novamente</h1>
                        <p>Crie uma conta de graça</p>
                        <p>E fique por dentro dos melhores preços, acompanhando </p>
                        <p>de perto seus jogos favoritos mais baratos</p>
                        <div className={styles['button-area']}>
                            <Link className={styles['button-create']} to="/signUp">Inscreva-se de graça</Link>
                            <Link className={styles['button-about']} to="/offers">Veja as ofertas</Link>
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}