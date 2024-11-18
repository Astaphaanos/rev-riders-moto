
import './Banner.css';

const Banner = () => {
    return(
        <section className='banner-container'>

            <div className='banner-info'>
                <h2>O lugar das motos mais poderosas do mundo</h2>
                <p>Ride Rivers é muito mais do que você espera!</p>
                <button type='button'><a href="#comprar">Comprar Agora</a></button>
            </div>

            <div className='banner-img'>
                <img src='/images/banner/banner.png' alt='Moto'/>
            </div>

        </section>
    )
}

export default Banner;