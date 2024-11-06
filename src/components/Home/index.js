import './Home.css';

const Home = () => {
    return (
        <section className='home-container'>
            <div className='home-welcome'>
                <h1>A Potência e a Tradição das 
                    <span className="text-color"> Harley-Davidson.</span>
                </h1>
                <p>Experimente a liberdade sobre duas rodas</p>
                <button type='button'>Test Drive</button>
            </div>

            <div className='home-moto'>
                <img src='/images/motos/sportster.png' alt='Sportster'/>
            </div>
        </section>
    )
}

export default Home;