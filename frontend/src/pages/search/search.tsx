import styles from '../../styles/offer.module.css'
import { FaChevronRight, FaAngleDown, FaAngleUp, FaFilter, FaRegHeart, FaStar } from "react-icons/fa6";
import { PriceFilter } from '../../utils/offer';
import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchGamesByTitle, getGamePrices } from '../../services/apiService';
import { FavoriteButton } from '../../components/FavoriteButton';

export function Search() {
    const { query } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false);
    const [storeOpen, setStoreOpen] = useState(false);
    const [discountOpen, setDiscountOpen] = useState(false);

    const [games, setGames] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const [sortOrder, setSortOrder] = useState('none');
    const [selectedStores, setSelectedStores] = useState<string[]>([]);
    const [minDiscount, setMinDiscount] = useState<number>(0);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

    const GAMES_PER_PAGE = 12;

    async function fetchSearchResults() {
        if (!query) return;
        try {
            setLoading(true);
            setGames([]); 
            
            const searchResults = await searchGamesByTitle(query);
            
            if (!Array.isArray(searchResults) || searchResults.length === 0) {
                setGames([]);
                return;
            }

            const gamesLimited = searchResults.slice(0, 60);
            const gameIds = gamesLimited.map((g: any) => g.id);
            
            const pricesData = await getGamePrices(gameIds);
            
            const pricesMap: Record<string, any> = {};
            if (Array.isArray(pricesData)) {
                pricesData.forEach((p: any) => {
                    pricesMap[p.id] = p;
                });
            }

            const mappedGames = gamesLimited.map((game: any) => {
                const priceInfo = pricesMap[game.id];
                
                let bestDeal = null;
                if (priceInfo && priceInfo.deals && priceInfo.deals.length > 0) {
                    const sortedDeals = priceInfo.deals.sort((a: any, b: any) => a.price.amount - b.price.amount);
                    bestDeal = sortedDeals[0];
                }

                return {
                    id: game.id,
                    title: game.title,
                    tags: [],
                    assets: game.assets,
                    deal: bestDeal ? {
                        shop: { name: bestDeal.shop.name },
                        price: { amount: bestDeal.price.amount, currency: bestDeal.price.currency },
                        regular: { amount: bestDeal.regular.amount, currency: bestDeal.regular.currency },
                        url: bestDeal.url
                    } : null
                };
            }).filter((g: any) => g.deal !== null);

            setGames(mappedGames);
        } catch (error) {
            console.error("Erro na busca", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSearchResults();
    }, [query]);

    const availableStores = useMemo(() => {
        const stores = new Set<string>();
        games.forEach(g => { if (g.deal?.shop?.name) stores.add(g.deal.shop.name); });
        return Array.from(stores).sort();
    }, [games]);

    const toggleFilter = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
        setList(prev => prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]);
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSelectedStores([]);
        setMinDiscount(0);
        setPriceRange([0, 500]);
        setSortOrder('none');
        setCurrentPage(1);
    };

    const processedGames = useMemo(() => {
        let result = [...games];

        if (selectedStores.length > 0) {
            result = result.filter(g => g.deal?.shop?.name && selectedStores.includes(g.deal.shop.name));
        }

        if (minDiscount > 0) {
            result = result.filter(g => {
                if (!g.deal?.regular || !g.deal?.price) return false;
                const pct = Math.round(((g.deal.regular.amount - g.deal.price.amount) / g.deal.regular.amount) * 100);
                return pct >= minDiscount;
            });
        }

        result = result.filter(g => {
            const price = g.deal?.price?.amount || 0;
            return price >= priceRange[0] && price <= priceRange[1];
        });

        if (sortOrder === 'lowest_price') {
            result.sort((a, b) => (a.deal?.price?.amount || 0) - (b.deal?.price?.amount || 0));
        } else if (sortOrder === 'highest_price') {
            result.sort((a, b) => (b.deal?.price?.amount || 0) - (a.deal?.price?.amount || 0));
        } else if (sortOrder === 'best_discount') {
            result.sort((a, b) => {
                const pctA = Math.round(((a.deal?.regular?.amount - a.deal?.price?.amount) / a.deal?.regular?.amount) * 100) || 0;
                const pctB = Math.round(((b.deal?.regular?.amount - b.deal?.price?.amount) / b.deal?.regular?.amount) * 100) || 0;
                return pctB - pctA;
            });
        }

        return result;
    }, [games, selectedStores, minDiscount, priceRange, sortOrder]);

    const startIndex = (currentPage - 1) * GAMES_PER_PAGE;
    const visibleGames = processedGames.slice(startIndex, startIndex + GAMES_PER_PAGE);
    const maxLoadedPages = Math.ceil(processedGames.length / GAMES_PER_PAGE);

    function changePage(page: number) {
        if (page >= 1 && page <= maxLoadedPages) setCurrentPage(page);
    }

    let startPage = Math.max(1, currentPage - 2);
    let endPage = startPage + 4;
    if (startPage === 1) endPage = Math.min(5, maxLoadedPages);
    else if (endPage > maxLoadedPages) {
        endPage = maxLoadedPages;
        startPage = Math.max(1, endPage - 4);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

    return (
        <section className={styles['offer-page']}>
            <div className={`${styles.container}`}>
                <div className={`${styles['horizontal-border']}`}>
                    <div className={`${styles['link-border']}`}>
                        <a href="/">Início</a>
                        <span><FaChevronRight className={`${styles['icon-right']}`}/></span>
                        <a href="/offers">Busca</a>
                    </div>

                    <div className={`${styles['show-border']}`}>
                        <div className={`${styles['show-result']}`}>    
                            <p>Buscando por: <span>"{query}"</span> ({processedGames.length} resultados)</p>
                        </div>

                        <div className={`${styles['show-tags']}`}>
                            {selectedStores.map(s => <a key={s} onClick={() => toggleFilter(selectedStores, setSelectedStores, s)}>{s}</a>)}
                        </div>

                        <div className={`${styles['dropdown-bar']}`}>
                            <button className={styles['show-bar-header']} onClick={() => setIsOpen(!isOpen)}>
                                Ordenar por
                                { isOpen ? <FaAngleUp className={styles['icon-up']} /> : <FaAngleDown className={styles['icon-down']} /> }
                            </button>
                            <ul className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                                <li onClick={() => { setSortOrder('lowest_price'); setIsOpen(false); }}>Menor Preço</li>
                                <li onClick={() => { setSortOrder('highest_price'); setIsOpen(false); }}>Maior Preço</li>
                                <li onClick={() => { setSortOrder('best_discount'); setIsOpen(false); }}>Melhor Desconto</li>
                                <li onClick={() => { setSortOrder('none'); setIsOpen(false); }}>Padrão</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`${styles['offer-container']}`}>
                    <div className={`${styles['aside-bar']}`}>
                        <div className={`${styles['aside-filter']}`}>
                            <p><FaFilter className={`${styles['icon-filter']}`}/>Filtros</p>
                            <button onClick={clearFilters} style={{ background: 'none', border: 'none', color: '#8B5CF6', cursor: 'pointer' }}>Limpar tudo</button>
                        </div>

                        <div className={`${styles['aside-price']}`}>
                            <button className={styles['aside-header']} onClick={() => setPriceOpen(!priceOpen)}>
                                <p>Faixa de Preço</p>
                                {priceOpen ? <FaAngleUp className={styles['icon-up-filter']} /> : <FaAngleDown className={styles['icon-down-filter']} />}
                            </button>
                            <ul className={`${styles['dropdown-filter']} ${priceOpen ? styles.openFilter : ''}`}>
                                <li><PriceFilter onPriceChange={(min, max) => { setPriceRange([min, max]); setCurrentPage(1); }}/></li>
                            </ul>
                        </div>

                        <div className={`${styles['aside-store']}`}>
                            <button className={styles['aside-header']} onClick={() => setStoreOpen(!storeOpen)}>
                                <p>Lojas Disponíveis</p>
                                {storeOpen ? <FaAngleUp className={styles['icon-up-filter']} /> : <FaAngleDown className={styles['icon-down-filter']} />}
                            </button>
                            <ul className={`${styles['dropdown-filter']} ${storeOpen ? styles.openFilter : ''}`}>
                                {availableStores.map(store => (
                                    <li key={store}>
                                        <label> 
                                            <input 
                                                className={`${styles['input-checkbox']}`} 
                                                type="checkbox"
                                                checked={selectedStores.includes(store)}
                                                onChange={() => toggleFilter(selectedStores, setSelectedStores, store)}
                                            />{store}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`${styles['aside-discount']}`}>
                            <button className={styles['aside-header']} onClick={() => setDiscountOpen(!discountOpen)}>
                                <p>Descontos</p>
                                {discountOpen ? <FaAngleUp className={styles['icon-up-filter']} /> : <FaAngleDown className={styles['icon-down-filter']} />}
                            </button>
                            <ul className={`${styles['dropdown-filter']} ${discountOpen ? styles.openFilter : ''}`}>
                                <li><label><input type="radio" name="discount" checked={minDiscount === 0} onChange={() => { setMinDiscount(0); setCurrentPage(1); }}/> Qualquer Desconto</label></li>
                                <li><label><input type="radio" name="discount" checked={minDiscount === 25} onChange={() => { setMinDiscount(25); setCurrentPage(1); }}/> 25% ou mais</label></li>
                                <li><label><input type="radio" name="discount" checked={minDiscount === 50} onChange={() => { setMinDiscount(50); setCurrentPage(1); }}/> 50% ou mais</label></li>
                                <li><label><input type="radio" name="discount" checked={minDiscount === 75} onChange={() => { setMinDiscount(75); setCurrentPage(1); }}/> 75% ou mais</label></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`${styles['offer-main']}`}>
                        {loading ? (
                            <div style={{ textAlign: 'center', padding: '2rem', color: '#9CA3AF' }}>Pesquisando...</div>
                        ) : visibleGames.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '2rem', color: '#9CA3AF' }}>Nenhum jogo encontrado com ofertas.</div>
                        ) : (
                            <div className={`${styles['container-card']}`}>
                                {visibleGames.map((game, index) => {
                                    if (!game.deal || !game.deal.regular || !game.deal.price) return null;
                                            
                                    const discountPercent = Math.round(
                                        ((game.deal.regular.amount - game.deal.price.amount) / game.deal.regular.amount) * 100
                                    ) || 0;
                                            
                                    return (
                                        <a key={game.id || index} className={`${styles['card-game']}`}>
                                            <div className={`${styles['cards']}`}>
                                                <div className={styles['card-top']}>
                                                    <p className={styles['porcent-discount']}>-{discountPercent}%</p>
                                                    <p className={styles['icon-heart']}><FavoriteButton gameId={game.externalApiId || game.id} /></p>
                                                    <img 
                                                        className={styles['image-game']} 
                                                        src={game.assets?.banner600 || game.assets?.banner400 || game.assets?.boxart || '/assets/NoCape.png'}
                                                        onError={(e) => { e.currentTarget.src = '/assets/NoCape.png'; }}
                                                        alt={`Capa do jogo ${game.title}`} 
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className={`${styles['description']}`}>
                                                <p className={`${styles['game-name']}`}>{game.title}</p>
                                                <span className={styles.stores}>
                                                    <p>{game.deal.shop.name}</p>
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
                                                <Link to={`/gameDetail/${game.id}`} style={{ textDecoration: 'none' }}>
                                                    <button>Ver oferta</button>
                                                </Link>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                        
                        {maxLoadedPages > 1 && !loading && (
                            <div className={`${styles['select-button']}`}>
                                <button
                                    className={styles['previous-button']}
                                    disabled={currentPage === 1}
                                    onClick={() => changePage(currentPage - 1)}
                                    style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                                >
                                    Anterior
                                </button>
                                {pageNumbers.map(page => (
                                    <button
                                        key={page}
                                        className={`${styles['number-button']} ${currentPage === page ? styles.activePage : ''}`}
                                        onClick={() => changePage(page)}
                                        style={currentPage === page ? { backgroundColor: '#8B5CF6', borderColor: '#8B5CF6', color: '#fff' } : {}}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    className={styles['next-button']}
                                    onClick={() => changePage(currentPage + 1)}
                                    disabled={currentPage === maxLoadedPages}
                                    style={{ opacity: currentPage === maxLoadedPages ? 0.5 : 1, cursor: currentPage === maxLoadedPages ? 'not-allowed' : 'pointer' }}
                                >
                                    Próximo
                                </button>
                            </div>
                        )}
                    </div>   
                </div>
            </div>
        </section>
    );
}