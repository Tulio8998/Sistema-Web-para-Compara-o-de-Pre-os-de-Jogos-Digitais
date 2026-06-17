import '../../styles/home.css'
import { FaArrowRight } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { gamesMock } from '../../mocks/game';

export function Home() {
    return(
        <main className="home-page">
            <section className="start">
                <div className='container'>
                    <h1 className="title">Encontre o<span className="color-title"> melhor preço </span>para qualquer jogo</h1>
                    <p>Compare preços da Steam, Epic, GOG, e muito mais</p>
                    <p>Economize mais, jogue mais</p>
                </div>
            </section>

            <section className="preferences">
                <div className='container'>
                    <div className='preference-subtitle'>
                        <h2>Suas preferâncias</h2>
                        <a href="">Ver todos <FaArrowRight className='right-icon'/> </a>
                    </div>
                    <div className='card-games'>
                        {gamesMock.map((game) => (
                            <div className='cards'>
                            <div className='card-top'>
                                <p className='porcent-discount'>44%</p>
                                <img className='image-game' src={game.deal.assets.boxart} alt="" />
                            </div>
                            <div className='card-bottom'>
                                <p className='title-game'>{game.title}</p>
                                <p className='store-game'><FaSteam className='store-icon'/>{game.deal.shop.name}</p>
                                <div className='prices-game'>
                                    <p className='descount-game'>R${game.deal.price.amount}</p>
                                    <p className='price-game'>R${game.deal.regular.amount}</p>
                                </div>
                            </div> 
                        </div>
                        ))}
                    </div>
                </div>  
            </section>

            <section className="deals">
                <div className='container'>
                    <div className='deals-subtitle'>
                        <h2>Melhores ofertas</h2>
                        <a href="">Ver todos <FaArrowRight className='right-icon'/> </a>
                    </div>
                    <div className='card-games'>
                        {gamesMock.map((game) => (
                            <div className='cards'>
                            <div className='card-top'>
                                <p className='porcent-discount'>44%</p>
                                <img className='image-game' src={game.deal.assets.boxart} alt="" />
                            </div>
                            <div className='card-bottom'>
                                <p className='title-game'>{game.title}</p>
                                <p className='store-game'><FaSteam className='store-icon'/>{game.deal.shop.name}</p>
                                <div className='prices-game'>
                                    <p className='descount-game'>R${game.deal.price.amount}</p>
                                    <p className='price-game'>R${game.deal.regular.amount}</p>
                                </div>
                            </div> 
                        </div>
                        ))}
                    </div>
                </div>  
            </section>

            <section className="best-prices">
                <div className='container'>
                    <div className='best-subtitle'>
                        <h2>Melhores preços</h2>
                        <a href="">Ver todos <FaArrowRight className='right-icon'/> </a>
                    </div>
                    <div className='card-games'>
                        {gamesMock.map((game) => (
                            <div className='cards'>
                            <div className='card-top'>
                                <p className='porcent-discount'>44%</p>
                                <img className='image-game' src={game.deal.assets.boxart} alt="" />
                            </div>
                            <div className='card-bottom'>
                                <p className='title-game'>{game.title}</p>
                                <p className='store-game'><FaSteam className='store-icon'/>{game.deal.shop.name}</p>
                                <div className='prices-game'>
                                    <p className='descount-game'>R${game.deal.price.amount}</p>
                                    <p className='price-game'>R${game.deal.regular.amount}</p>
                                </div>
                            </div> 
                        </div>
                        ))}
                    </div>
                </div>  
            </section>

            <section className="create-account">
                <div className='container'>
                    <h1 className="title">Nunca mais pague <span className="color-title"> caro </span>novamente</h1>
                    <p>Crie uma conta de graça</p>
                    <p>E fique por dentro dos melhores preços, acompanhando </p>
                    <p>de perto seus jogos favoritos mais baratos</p>
                    <div className='button-area'>
                        <button type="submit"className='button-create'>Inscreva-se de graça</button>
                        <button type="submit" className='button-about'>Veja as ofertas</button>
                    </div>
                </div>
            </section>
        </main>
    )
}