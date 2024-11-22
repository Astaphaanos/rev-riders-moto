import { FaShoppingCart } from 'react-icons/fa';
import "./Catalogo.css";

const Catalogo = ( {adicionarAoCarrinho} ) => {

  const motos = [
    {
      id: 1,
      nome: 'Breakout 117',
      preco: '129.000',
      desconto: '120.000',
      imagem: "/images/motos/breakout.png",
      cilindrada: '1.923 cm³',
      peso: '296kg',
      torque: '168Nm TORQUE',
      frenagem: 'ABS',
    },

    {
      id: 2,
      nome: 'Fat-Bob 114',
      preco: '123.000',
      desconto: '190.000',
      imagem: "/images/motos/fat-bob.png",
      cilindrada: '1.868 cm³',
      peso: '296kg',
      torque: '155Nm TORQUE',
      frenagem: 'ABS',
    },

    {
      id: 3,
      nome: 'Sportster™ S',
      preco: '125.000',
      desconto: '120.000',
      imagem: "/images/motos/harley.png",
      cilindrada: '1.252 cm³',
      peso: '221kg',
      torque: '125Nm TORQUE',
      frenagem: 'ABS',
    },

    {
      id: 4,
      nome: 'Low Rider™ S',
      preco: '116.000',
      desconto: '100.000',
      imagem: "/images/motos/low-ride.png",
      cilindrada: '1.923 cm³',
      peso: '295kg',
      torque: '168Nm TORQUE',
      frenagem: 'ABS',
    },

    {
      id: 5,
      nome: 'Pan America™ 1250 Special',
      preco: '119.900',
      desconto: '100.900',
      imagem: "/images/motos/pam.png",
      cilindrada: '1.252 cm³',
      peso: '229kg',
      torque: '128Nm TORQUE',
      frenagem: 'ABS',
    },

    {
      id: 6,
      nome: 'Road King™ Special',
      preco: '145.250',
      desconto: '140.200',
      imagem: "/images/motos/pam.png",
      cilindrada: '1.868 cm³',
      peso: '351kg',
      torque: '158Nm TORQUE',
      frenagem: 'ABS',
    },
  ]

  return (
    <section className="catalogo-container" id='motos-catalogo'>
      <div className='catologo-intro'>
        <h2>O DNA de Moto</h2>
        <p>Explore os nossos modelos! Escolha o melhor do mundo das motos</p>
      </div>

      <div className="catalogo-card">
      {motos.map((moto) => (
      <div className="moto-card" key={moto.id}>
          <div className="moto-img">
            <img src={moto.imagem} alt={moto.nome} />
          </div>

          <div className="moto-title">
            <h3>{moto.nome}</h3>
          </div>

          <div className='moto-especificacoes'>
            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVR4nMVUy0oDQRDcqOQvnKqMt6AiRNDPUOOPiZ6MVyPoWUFEvXozQjBek56s4EHBx8GLkd7MLrshm8QoONCw9FQV/aidIPiP0wU2NH4lIuSBkPXQmIoAD0K22tauCnnkgNpEIs1yuaikXhDMOfLKkb2cuFSMYpvlcjFXUAGe8JIih4489RGm8hEmNKaSK+gri4ACvAr55YCV1H2hA2w6sutFn5UzTKigcxHgwgO7bWOsA24ceT2I71prYlFRDlBTjYygLiBuR4yp+sWs+SpPhNyTUmk5WRqwlWr/cNT8wl4QzGquY+2iAz6FvHVAQ8gPzfkiZuKZhoNzVI+pLXwL53HeATsqpORIAGg4sumAYw0BniIO2cr49AeCdxMJjms5qqzf8vtAy4/KUW4weDJLKZW2oxywniwF2O1Yu5TgjakmeLI+zjZhe35+Ic82IYl4IdK3zX7GNjnGfhtmbK0+blWxvWHGHvPrKfnMRywU/SW585v2cVD/NUc9DumTeb7IlpD3/ruudxOJ5J0/eWCnPd/UQ3elrphnowAAAABJRU5ErkJggg==" alt="engineering"/>
              {moto.cilindrada}
              </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2UMU7DQBBFVwotoiOh8f/jJj1FTmO3zim4AUhwCRqQaEhDwQVAFPQIlJkIB+4Qo0G25OAIbCtIFKw00vrP+K32z2pC+K31DIyUTJXMOkaaiwybMODNyKJPKLBcg/opfWFWQUWSOjDbWEQ+GHBqwIWRl753TcnVhtrsO+C1AXcvUXRQ5ZWc+t41zxk5aws8cm0uMnFvq5pFFB2+j8e77pXnXPNaawG8LULYqTftKY73lLyqa0UIAwVuWl1ZyeP6z0qeG3D2RTtp7aGSq9L8ewMey6cx9+8yGo3RH5rS/dnwH2h/3cN0q8MhFxn6COoNA/LXON5fm4mfUJGk84AVSRqwba4PQxFIw5YDxwcAAAAASUVORK5CYII=" alt="scale"/>
              {moto.peso}
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nL3UsUoDQRAG4IkpUgRsk+bun81uKeQh8gIptMsTpLBLLQo2NlZapExnHsHCJ0iROk0gM8EiKQJaKXIinuFYD/F2xR+m/fhnFpboPyPGHCswLc4a6IeDzDNlzry5DMIeW62mAK8+uOp0joJATdPet3bAPAj7iDKflaw7otAIcF/EhPlNrU2CsIyorsDOa/cQ3o65W3K/iRpzsp8qbRUYltzPn+sq4PhHDHhZWet+D1qbFNcT5lvvgW4oJgJc7DHgaQm0Y8G7AnhOsVFgnmObrXOHUVhGVBPm5/x2p/HtrE1ybLlwrhEPpp+fhBgziMa+GgpwlREd/AlYNe9Kz8oLHI74oAAAAABJRU5ErkJggg==" alt="lightning-bolt--v1"/>
              {moto.torque}
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDUlEQVR4nK1UO2sUYRT9fKGdiBYSwz3n+wgBBQWNjfHRCKIgiEQUEQQhWFhIQMFG0FTWmlokKPgDLHyBv2BLFSPEuHO/3UIbRRR8jtxxd5yZndFFvHCrmXu+c859ODdEdMbHNySjo5vc/wolz0YyjWRXyVsdkR3/BNSamFhlzAqAxbzfJTEUUAIctQIFvirZagBMFXgbRSYbgeLIyHoFHpWKyFYkjyvwvg40Au+SELbWGq/AQg2LtpKnjUkU2R/JJwP/kM9ejo2tzsFS55Yp8LiWQTkXo/eHFbhaw/Tcb3bkkZpXf0RgXoFDHZHdCsxEQJX8boyVvFlR8iJ1bnkGqMDDATDyhH1bAjYm3k8XPDZbPqn32xT4UKxrh7DTCtZE4HOF/nzeKGC7ikylzq3M1ISwp8doVsm7FSLnXVskVOUmwMFIXs7AyG89gLmE3GeZSTdVwJneWGUZgQuuK7KlCmieZVaITBVYP+izVvK5Aq9tPtVmFNiVN6Qtsq5mVGb6m2LMjI15lv8PfKnUXCzNoL1Y8VCtASY73x7vp61BEbgxoMj7veUNIa/UsFywBpSU1IApuZSPSz8WQ1irwJuG1dJIPq2R+YsdcLJ2jzvkATsGQ2xL8bHbtmUNp8E59f6Ykh+HBLxT2t+m6AKbFbjXBKTkq0Tk1F+BBiwIQXp38FoErit5yS5O6tyKPxX+BPME+iO4dpt/AAAAAElFTkSuQmCC" alt="brake-discs"/>
              {moto.frenagem}
            </span>
          </div>

          <div className='moto-btn'>
            <div className='price'>
              <p>R${moto.preco}</p>
              <span>R${moto.desconto}</span>
            </div>

            <button type='button'  onClick={() => adicionarAoCarrinho(moto)}>
              <FaShoppingCart size={24}/>
            </button>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
