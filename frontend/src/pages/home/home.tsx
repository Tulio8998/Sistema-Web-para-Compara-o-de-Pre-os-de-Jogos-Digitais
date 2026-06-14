import '../../styles/home.css'
import { FaArrowRight } from "react-icons/fa";

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

            <section className="releases">
                <div className='container'>
                    <div className='release-subtitle'>
                        <h2>Jogos</h2>
                        <a href="">Ver todos <FaArrowRight className='right-icon'/> </a>
                    </div>
                    <div className='card-games'>
                        <p>cards aqui</p>
                    </div>
                </div>  
            </section>

            <section className="best-prices">
                <div className='container'>
                    <h1>Teste</h1>
                </div>  
            </section>

            <section className="features">
                <div className='container'>
                    <h1>Teste</h1>
                </div>  
            </section>

            <section className="create-account">
                <div className='container'>
                    <h1>Teste</h1>
                </div>  
            </section>
        </main>
    )
}