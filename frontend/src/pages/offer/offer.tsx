import styles from '../../styles/offer.module.css'
import { FaChevronRight } from "react-icons/fa6";

export function Offer() {
    
    return(
        <section className={styles['offer-page']}>
            <div className={`container ${styles.container}`}>
                <div className={`${styles['horizontal-border']}`}>
                    <div className={`${styles['link-border']}`}>
                        <a href="">Início</a>
                        <span><FaChevronRight className={`${styles['icon-right']}`}/></span>
                        <a href="">Ofertas</a>
                    </div>

                    <div className={`${styles['show-border']}`}>

                    </div>
                </div>

                <div className={`${styles['offer-container']}`}>
                    <div className={`${styles['aside-bar']}`}>

                    </div>

                    <div className={`${styles['offer-main']}`}>

                    </div>
                </div>
            </div>

        </section>
    );
}