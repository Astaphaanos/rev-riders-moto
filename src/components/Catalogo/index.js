import "./Catalogo.css";

const Catalogo = () => {
  return (
    <section className="catalogo-container" id='motos-catalogo'>
      <div className='catologo-intro'>
        <h2>O DNA de Moto</h2>
        <p>Explore os nossos modelos! Escolha o melhor do mundo das motos</p>
      </div>

      <div className="catalogo-card">
      
      <div className="moto-card">
          <div className="moto-img">
            <img src="/images/motos/breakout.png" alt="breakout" />
          </div>

          <div className="moto-title">
            <h3>Breakout 117</h3>
          </div>

          <div className='moto-especificacoes'>
            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVR4nMVUy0oDQRDcqOQvnKqMt6AiRNDPUOOPiZ6MVyPoWUFEvXozQjBek56s4EHBx8GLkd7MLrshm8QoONCw9FQV/aidIPiP0wU2NH4lIuSBkPXQmIoAD0K22tauCnnkgNpEIs1yuaikXhDMOfLKkb2cuFSMYpvlcjFXUAGe8JIih4489RGm8hEmNKaSK+gri4ACvAr55YCV1H2hA2w6sutFn5UzTKigcxHgwgO7bWOsA24ceT2I71prYlFRDlBTjYygLiBuR4yp+sWs+SpPhNyTUmk5WRqwlWr/cNT8wl4QzGquY+2iAz6FvHVAQ8gPzfkiZuKZhoNzVI+pLXwL53HeATsqpORIAGg4sumAYw0BniIO2cr49AeCdxMJjms5qqzf8vtAy4/KUW4weDJLKZW2oxywniwF2O1Yu5TgjakmeLI+zjZhe35+Ic82IYl4IdK3zX7GNjnGfhtmbK0+blWxvWHGHvPrKfnMRywU/SW585v2cVD/NUc9DumTeb7IlpD3/ruudxOJ5J0/eWCnPd/UQ3elrphnowAAAABJRU5ErkJggg==" alt="engineering"/>
              1.923 cm³ CC
              </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2UMU7DQBBFVwotoiOh8f/jJj1FTmO3zim4AUhwCRqQaEhDwQVAFPQIlJkIB+4Qo0G25OAIbCtIFKw00vrP+K32z2pC+K31DIyUTJXMOkaaiwybMODNyKJPKLBcg/opfWFWQUWSOjDbWEQ+GHBqwIWRl753TcnVhtrsO+C1AXcvUXRQ5ZWc+t41zxk5aws8cm0uMnFvq5pFFB2+j8e77pXnXPNaawG8LULYqTftKY73lLyqa0UIAwVuWl1ZyeP6z0qeG3D2RTtp7aGSq9L8ewMey6cx9+8yGo3RH5rS/dnwH2h/3cN0q8MhFxn6COoNA/LXON5fm4mfUJGk84AVSRqwba4PQxFIw5YDxwcAAAAASUVORK5CYII=" alt="scale"/>
              296kg
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nL3UsUoDQRAG4IkpUgRsk+bun81uKeQh8gIptMsTpLBLLQo2NlZapExnHsHCJ0iROk0gM8EiKQJaKXIinuFYD/F2xR+m/fhnFpboPyPGHCswLc4a6IeDzDNlzry5DMIeW62mAK8+uOp0joJATdPet3bAPAj7iDKflaw7otAIcF/EhPlNrU2CsIyorsDOa/cQ3o65W3K/iRpzsp8qbRUYltzPn+sq4PhHDHhZWet+D1qbFNcT5lvvgW4oJgJc7DHgaQm0Y8G7AnhOsVFgnmObrXOHUVhGVBPm5/x2p/HtrE1ybLlwrhEPpp+fhBgziMa+GgpwlREd/AlYNe9Kz8oLHI74oAAAAABJRU5ErkJggg==" alt="lightning-bolt--v1"/>
              168Nm TORQUE
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDUlEQVR4nK1UO2sUYRT9fKGdiBYSwz3n+wgBBQWNjfHRCKIgiEQUEQQhWFhIQMFG0FTWmlokKPgDLHyBv2BLFSPEuHO/3UIbRRR8jtxxd5yZndFFvHCrmXu+c859ODdEdMbHNySjo5vc/wolz0YyjWRXyVsdkR3/BNSamFhlzAqAxbzfJTEUUAIctQIFvirZagBMFXgbRSYbgeLIyHoFHpWKyFYkjyvwvg40Au+SELbWGq/AQg2LtpKnjUkU2R/JJwP/kM9ejo2tzsFS55Yp8LiWQTkXo/eHFbhaw/Tcb3bkkZpXf0RgXoFDHZHdCsxEQJX8boyVvFlR8iJ1bnkGqMDDATDyhH1bAjYm3k8XPDZbPqn32xT4UKxrh7DTCtZE4HOF/nzeKGC7ikylzq3M1ISwp8doVsm7FSLnXVskVOUmwMFIXs7AyG89gLmE3GeZSTdVwJneWGUZgQuuK7KlCmieZVaITBVYP+izVvK5Aq9tPtVmFNiVN6Qtsq5mVGb6m2LMjI15lv8PfKnUXCzNoL1Y8VCtASY73x7vp61BEbgxoMj7veUNIa/UsFywBpSU1IApuZSPSz8WQ1irwJuG1dJIPq2R+YsdcLJ2jzvkATsGQ2xL8bHbtmUNp8E59f6Ykh+HBLxT2t+m6AKbFbjXBKTkq0Tk1F+BBiwIQXp38FoErit5yS5O6tyKPxX+BPME+iO4dpt/AAAAAElFTkSuQmCC" alt="brake-discs"/>
              ABS
            </span>
          </div>

          <div className='moto-btn'>
            <div className='price'>
              <p>R$120.000</p>
              <span>R$129.900</span>
            </div>

            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>            
            </button>
          </div>
        </div>


        <div className="moto-card">
        <div className="moto-img">
            <img src="/images/motos/fat-bob.png" alt="breakout" />
          </div>

          <div className="moto-title">
            <h3>Fat-Bob 114</h3>
          </div>

          <div className='moto-especificacoes'>
            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVR4nMVUy0oDQRDcqOQvnKqMt6AiRNDPUOOPiZ6MVyPoWUFEvXozQjBek56s4EHBx8GLkd7MLrshm8QoONCw9FQV/aidIPiP0wU2NH4lIuSBkPXQmIoAD0K22tauCnnkgNpEIs1yuaikXhDMOfLKkb2cuFSMYpvlcjFXUAGe8JIih4489RGm8hEmNKaSK+gri4ACvAr55YCV1H2hA2w6sutFn5UzTKigcxHgwgO7bWOsA24ceT2I71prYlFRDlBTjYygLiBuR4yp+sWs+SpPhNyTUmk5WRqwlWr/cNT8wl4QzGquY+2iAz6FvHVAQ8gPzfkiZuKZhoNzVI+pLXwL53HeATsqpORIAGg4sumAYw0BniIO2cr49AeCdxMJjms5qqzf8vtAy4/KUW4weDJLKZW2oxywniwF2O1Yu5TgjakmeLI+zjZhe35+Ic82IYl4IdK3zX7GNjnGfhtmbK0+blWxvWHGHvPrKfnMRywU/SW585v2cVD/NUc9DumTeb7IlpD3/ruudxOJ5J0/eWCnPd/UQ3elrphnowAAAABJRU5ErkJggg==" alt="engineering"/>
              1.868 cm³ CC
              </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2UMU7DQBBFVwotoiOh8f/jJj1FTmO3zim4AUhwCRqQaEhDwQVAFPQIlJkIB+4Qo0G25OAIbCtIFKw00vrP+K32z2pC+K31DIyUTJXMOkaaiwybMODNyKJPKLBcg/opfWFWQUWSOjDbWEQ+GHBqwIWRl753TcnVhtrsO+C1AXcvUXRQ5ZWc+t41zxk5aws8cm0uMnFvq5pFFB2+j8e77pXnXPNaawG8LULYqTftKY73lLyqa0UIAwVuWl1ZyeP6z0qeG3D2RTtp7aGSq9L8ewMey6cx9+8yGo3RH5rS/dnwH2h/3cN0q8MhFxn6COoNA/LXON5fm4mfUJGk84AVSRqwba4PQxFIw5YDxwcAAAAASUVORK5CYII=" alt="scale"/>
              296kg
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nL3UsUoDQRAG4IkpUgRsk+bun81uKeQh8gIptMsTpLBLLQo2NlZapExnHsHCJ0iROk0gM8EiKQJaKXIinuFYD/F2xR+m/fhnFpboPyPGHCswLc4a6IeDzDNlzry5DMIeW62mAK8+uOp0joJATdPet3bAPAj7iDKflaw7otAIcF/EhPlNrU2CsIyorsDOa/cQ3o65W3K/iRpzsp8qbRUYltzPn+sq4PhHDHhZWet+D1qbFNcT5lvvgW4oJgJc7DHgaQm0Y8G7AnhOsVFgnmObrXOHUVhGVBPm5/x2p/HtrE1ybLlwrhEPpp+fhBgziMa+GgpwlREd/AlYNe9Kz8oLHI74oAAAAABJRU5ErkJggg==" alt="lightning-bolt--v1"/>
              155Nm TORQUE
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDUlEQVR4nK1UO2sUYRT9fKGdiBYSwz3n+wgBBQWNjfHRCKIgiEQUEQQhWFhIQMFG0FTWmlokKPgDLHyBv2BLFSPEuHO/3UIbRRR8jtxxd5yZndFFvHCrmXu+c859ODdEdMbHNySjo5vc/wolz0YyjWRXyVsdkR3/BNSamFhlzAqAxbzfJTEUUAIctQIFvirZagBMFXgbRSYbgeLIyHoFHpWKyFYkjyvwvg40Au+SELbWGq/AQg2LtpKnjUkU2R/JJwP/kM9ejo2tzsFS55Yp8LiWQTkXo/eHFbhaw/Tcb3bkkZpXf0RgXoFDHZHdCsxEQJX8boyVvFlR8iJ1bnkGqMDDATDyhH1bAjYm3k8XPDZbPqn32xT4UKxrh7DTCtZE4HOF/nzeKGC7ikylzq3M1ISwp8doVsm7FSLnXVskVOUmwMFIXs7AyG89gLmE3GeZSTdVwJneWGUZgQuuK7KlCmieZVaITBVYP+izVvK5Aq9tPtVmFNiVN6Qtsq5mVGb6m2LMjI15lv8PfKnUXCzNoL1Y8VCtASY73x7vp61BEbgxoMj7veUNIa/UsFywBpSU1IApuZSPSz8WQ1irwJuG1dJIPq2R+YsdcLJ2jzvkATsGQ2xL8bHbtmUNp8E59f6Ykh+HBLxT2t+m6AKbFbjXBKTkq0Tk1F+BBiwIQXp38FoErit5yS5O6tyKPxX+BPME+iO4dpt/AAAAAElFTkSuQmCC" alt="brake-discs"/>
              ABS
            </span>
          </div>

          <div className='moto-btn'>
            <div className='price'>
              <p>R$120.000</p>
              <span>R$123.900</span>
            </div>

            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>            
            </button>
          </div>
        </div>


        <div className="moto-card">
        <div className="moto-img">
            <img src="/images/motos/harley.png" alt="breakout" />
          </div>

          <div className="moto-title">
            <h3>Sportster™ S</h3>
          </div>

          <div className='moto-especificacoes'>
            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVR4nMVUy0oDQRDcqOQvnKqMt6AiRNDPUOOPiZ6MVyPoWUFEvXozQjBek56s4EHBx8GLkd7MLrshm8QoONCw9FQV/aidIPiP0wU2NH4lIuSBkPXQmIoAD0K22tauCnnkgNpEIs1yuaikXhDMOfLKkb2cuFSMYpvlcjFXUAGe8JIih4489RGm8hEmNKaSK+gri4ACvAr55YCV1H2hA2w6sutFn5UzTKigcxHgwgO7bWOsA24ceT2I71prYlFRDlBTjYygLiBuR4yp+sWs+SpPhNyTUmk5WRqwlWr/cNT8wl4QzGquY+2iAz6FvHVAQ8gPzfkiZuKZhoNzVI+pLXwL53HeATsqpORIAGg4sumAYw0BniIO2cr49AeCdxMJjms5qqzf8vtAy4/KUW4weDJLKZW2oxywniwF2O1Yu5TgjakmeLI+zjZhe35+Ic82IYl4IdK3zX7GNjnGfhtmbK0+blWxvWHGHvPrKfnMRywU/SW585v2cVD/NUc9DumTeb7IlpD3/ruudxOJ5J0/eWCnPd/UQ3elrphnowAAAABJRU5ErkJggg==" alt="engineering"/>
              1.252 cm³ CC
              </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2UMU7DQBBFVwotoiOh8f/jJj1FTmO3zim4AUhwCRqQaEhDwQVAFPQIlJkIB+4Qo0G25OAIbCtIFKw00vrP+K32z2pC+K31DIyUTJXMOkaaiwybMODNyKJPKLBcg/opfWFWQUWSOjDbWEQ+GHBqwIWRl753TcnVhtrsO+C1AXcvUXRQ5ZWc+t41zxk5aws8cm0uMnFvq5pFFB2+j8e77pXnXPNaawG8LULYqTftKY73lLyqa0UIAwVuWl1ZyeP6z0qeG3D2RTtp7aGSq9L8ewMey6cx9+8yGo3RH5rS/dnwH2h/3cN0q8MhFxn6COoNA/LXON5fm4mfUJGk84AVSRqwba4PQxFIw5YDxwcAAAAASUVORK5CYII=" alt="scale"/>
              221kg
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nL3UsUoDQRAG4IkpUgRsk+bun81uKeQh8gIptMsTpLBLLQo2NlZapExnHsHCJ0iROk0gM8EiKQJaKXIinuFYD/F2xR+m/fhnFpboPyPGHCswLc4a6IeDzDNlzry5DMIeW62mAK8+uOp0joJATdPet3bAPAj7iDKflaw7otAIcF/EhPlNrU2CsIyorsDOa/cQ3o65W3K/iRpzsp8qbRUYltzPn+sq4PhHDHhZWet+D1qbFNcT5lvvgW4oJgJc7DHgaQm0Y8G7AnhOsVFgnmObrXOHUVhGVBPm5/x2p/HtrE1ybLlwrhEPpp+fhBgziMa+GgpwlREd/AlYNe9Kz8oLHI74oAAAAABJRU5ErkJggg==" alt="lightning-bolt--v1"/>
              125Nm TORQUE
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDUlEQVR4nK1UO2sUYRT9fKGdiBYSwz3n+wgBBQWNjfHRCKIgiEQUEQQhWFhIQMFG0FTWmlokKPgDLHyBv2BLFSPEuHO/3UIbRRR8jtxxd5yZndFFvHCrmXu+c859ODdEdMbHNySjo5vc/wolz0YyjWRXyVsdkR3/BNSamFhlzAqAxbzfJTEUUAIctQIFvirZagBMFXgbRSYbgeLIyHoFHpWKyFYkjyvwvg40Au+SELbWGq/AQg2LtpKnjUkU2R/JJwP/kM9ejo2tzsFS55Yp8LiWQTkXo/eHFbhaw/Tcb3bkkZpXf0RgXoFDHZHdCsxEQJX8boyVvFlR8iJ1bnkGqMDDATDyhH1bAjYm3k8XPDZbPqn32xT4UKxrh7DTCtZE4HOF/nzeKGC7ikylzq3M1ISwp8doVsm7FSLnXVskVOUmwMFIXs7AyG89gLmE3GeZSTdVwJneWGUZgQuuK7KlCmieZVaITBVYP+izVvK5Aq9tPtVmFNiVN6Qtsq5mVGb6m2LMjI15lv8PfKnUXCzNoL1Y8VCtASY73x7vp61BEbgxoMj7veUNIa/UsFywBpSU1IApuZSPSz8WQ1irwJuG1dJIPq2R+YsdcLJ2jzvkATsGQ2xL8bHbtmUNp8E59f6Ykh+HBLxT2t+m6AKbFbjXBKTkq0Tk1F+BBiwIQXp38FoErit5yS5O6tyKPxX+BPME+iO4dpt/AAAAAElFTkSuQmCC" alt="brake-discs"/>
              ABS
            </span>
          </div>

          <div className='moto-btn'>
            <div className='price'>
              <p>R$120.000</p>
              <span>R$125.900</span>
            </div>

            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>            
            </button>
          </div>
        </div>

        <div className="moto-card">
        <div className="moto-img">
            <img src="/images/motos/low-ride.png" alt="breakout" />
          </div>

          <div className="moto-title">
            <h3>Low Rider™ S</h3>
          </div>

          <div className='moto-especificacoes'>
            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVR4nMVUy0oDQRDcqOQvnKqMt6AiRNDPUOOPiZ6MVyPoWUFEvXozQjBek56s4EHBx8GLkd7MLrshm8QoONCw9FQV/aidIPiP0wU2NH4lIuSBkPXQmIoAD0K22tauCnnkgNpEIs1yuaikXhDMOfLKkb2cuFSMYpvlcjFXUAGe8JIih4489RGm8hEmNKaSK+gri4ACvAr55YCV1H2hA2w6sutFn5UzTKigcxHgwgO7bWOsA24ceT2I71prYlFRDlBTjYygLiBuR4yp+sWs+SpPhNyTUmk5WRqwlWr/cNT8wl4QzGquY+2iAz6FvHVAQ8gPzfkiZuKZhoNzVI+pLXwL53HeATsqpORIAGg4sumAYw0BniIO2cr49AeCdxMJjms5qqzf8vtAy4/KUW4weDJLKZW2oxywniwF2O1Yu5TgjakmeLI+zjZhe35+Ic82IYl4IdK3zX7GNjnGfhtmbK0+blWxvWHGHvPrKfnMRywU/SW585v2cVD/NUc9DumTeb7IlpD3/ruudxOJ5J0/eWCnPd/UQ3elrphnowAAAABJRU5ErkJggg==" alt="engineering"/>
              1.923 cm³ CC
              </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2UMU7DQBBFVwotoiOh8f/jJj1FTmO3zim4AUhwCRqQaEhDwQVAFPQIlJkIB+4Qo0G25OAIbCtIFKw00vrP+K32z2pC+K31DIyUTJXMOkaaiwybMODNyKJPKLBcg/opfWFWQUWSOjDbWEQ+GHBqwIWRl753TcnVhtrsO+C1AXcvUXRQ5ZWc+t41zxk5aws8cm0uMnFvq5pFFB2+j8e77pXnXPNaawG8LULYqTftKY73lLyqa0UIAwVuWl1ZyeP6z0qeG3D2RTtp7aGSq9L8ewMey6cx9+8yGo3RH5rS/dnwH2h/3cN0q8MhFxn6COoNA/LXON5fm4mfUJGk84AVSRqwba4PQxFIw5YDxwcAAAAASUVORK5CYII=" alt="scale"/>
              295kg
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nL3UsUoDQRAG4IkpUgRsk+bun81uKeQh8gIptMsTpLBLLQo2NlZapExnHsHCJ0iROk0gM8EiKQJaKXIinuFYD/F2xR+m/fhnFpboPyPGHCswLc4a6IeDzDNlzry5DMIeW62mAK8+uOp0joJATdPet3bAPAj7iDKflaw7otAIcF/EhPlNrU2CsIyorsDOa/cQ3o65W3K/iRpzsp8qbRUYltzPn+sq4PhHDHhZWet+D1qbFNcT5lvvgW4oJgJc7DHgaQm0Y8G7AnhOsVFgnmObrXOHUVhGVBPm5/x2p/HtrE1ybLlwrhEPpp+fhBgziMa+GgpwlREd/AlYNe9Kz8oLHI74oAAAAABJRU5ErkJggg==" alt="lightning-bolt--v1"/>
              168Nm TORQUE
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDUlEQVR4nK1UO2sUYRT9fKGdiBYSwz3n+wgBBQWNjfHRCKIgiEQUEQQhWFhIQMFG0FTWmlokKPgDLHyBv2BLFSPEuHO/3UIbRRR8jtxxd5yZndFFvHCrmXu+c859ODdEdMbHNySjo5vc/wolz0YyjWRXyVsdkR3/BNSamFhlzAqAxbzfJTEUUAIctQIFvirZagBMFXgbRSYbgeLIyHoFHpWKyFYkjyvwvg40Au+SELbWGq/AQg2LtpKnjUkU2R/JJwP/kM9ejo2tzsFS55Yp8LiWQTkXo/eHFbhaw/Tcb3bkkZpXf0RgXoFDHZHdCsxEQJX8boyVvFlR8iJ1bnkGqMDDATDyhH1bAjYm3k8XPDZbPqn32xT4UKxrh7DTCtZE4HOF/nzeKGC7ikylzq3M1ISwp8doVsm7FSLnXVskVOUmwMFIXs7AyG89gLmE3GeZSTdVwJneWGUZgQuuK7KlCmieZVaITBVYP+izVvK5Aq9tPtVmFNiVN6Qtsq5mVGb6m2LMjI15lv8PfKnUXCzNoL1Y8VCtASY73x7vp61BEbgxoMj7veUNIa/UsFywBpSU1IApuZSPSz8WQ1irwJuG1dJIPq2R+YsdcLJ2jzvkATsGQ2xL8bHbtmUNp8E59f6Ykh+HBLxT2t+m6AKbFbjXBKTkq0Tk1F+BBiwIQXp38FoErit5yS5O6tyKPxX+BPME+iO4dpt/AAAAAElFTkSuQmCC" alt="brake-discs"/>
              ABS
            </span>
          </div>

          <div className='moto-btn'>
            <div className='price'>
              <p>R$100.000</p>
              <span>R$116.900</span>
            </div>

            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>            
            </button>
          </div>
        </div>


        <div className="moto-card">
        <div className="moto-img">
            <img src="/images/motos/pam.png" alt="breakout" />
          </div>

          <div className="moto-title">
            <h3>Pan America™ 1250 Special</h3>
          </div>

          <div className='moto-especificacoes'>
            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVR4nMVUy0oDQRDcqOQvnKqMt6AiRNDPUOOPiZ6MVyPoWUFEvXozQjBek56s4EHBx8GLkd7MLrshm8QoONCw9FQV/aidIPiP0wU2NH4lIuSBkPXQmIoAD0K22tauCnnkgNpEIs1yuaikXhDMOfLKkb2cuFSMYpvlcjFXUAGe8JIih4489RGm8hEmNKaSK+gri4ACvAr55YCV1H2hA2w6sutFn5UzTKigcxHgwgO7bWOsA24ceT2I71prYlFRDlBTjYygLiBuR4yp+sWs+SpPhNyTUmk5WRqwlWr/cNT8wl4QzGquY+2iAz6FvHVAQ8gPzfkiZuKZhoNzVI+pLXwL53HeATsqpORIAGg4sumAYw0BniIO2cr49AeCdxMJjms5qqzf8vtAy4/KUW4weDJLKZW2oxywniwF2O1Yu5TgjakmeLI+zjZhe35+Ic82IYl4IdK3zX7GNjnGfhtmbK0+blWxvWHGHvPrKfnMRywU/SW585v2cVD/NUc9DumTeb7IlpD3/ruudxOJ5J0/eWCnPd/UQ3elrphnowAAAABJRU5ErkJggg==" alt="engineering"/>
              1.252 cm³ CC
              </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2UMU7DQBBFVwotoiOh8f/jJj1FTmO3zim4AUhwCRqQaEhDwQVAFPQIlJkIB+4Qo0G25OAIbCtIFKw00vrP+K32z2pC+K31DIyUTJXMOkaaiwybMODNyKJPKLBcg/opfWFWQUWSOjDbWEQ+GHBqwIWRl753TcnVhtrsO+C1AXcvUXRQ5ZWc+t41zxk5aws8cm0uMnFvq5pFFB2+j8e77pXnXPNaawG8LULYqTftKY73lLyqa0UIAwVuWl1ZyeP6z0qeG3D2RTtp7aGSq9L8ewMey6cx9+8yGo3RH5rS/dnwH2h/3cN0q8MhFxn6COoNA/LXON5fm4mfUJGk84AVSRqwba4PQxFIw5YDxwcAAAAASUVORK5CYII=" alt="scale"/>
              229kg
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nL3UsUoDQRAG4IkpUgRsk+bun81uKeQh8gIptMsTpLBLLQo2NlZapExnHsHCJ0iROk0gM8EiKQJaKXIinuFYD/F2xR+m/fhnFpboPyPGHCswLc4a6IeDzDNlzry5DMIeW62mAK8+uOp0joJATdPet3bAPAj7iDKflaw7otAIcF/EhPlNrU2CsIyorsDOa/cQ3o65W3K/iRpzsp8qbRUYltzPn+sq4PhHDHhZWet+D1qbFNcT5lvvgW4oJgJc7DHgaQm0Y8G7AnhOsVFgnmObrXOHUVhGVBPm5/x2p/HtrE1ybLlwrhEPpp+fhBgziMa+GgpwlREd/AlYNe9Kz8oLHI74oAAAAABJRU5ErkJggg==" alt="lightning-bolt--v1"/>
              128Nm TORQUE
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDUlEQVR4nK1UO2sUYRT9fKGdiBYSwz3n+wgBBQWNjfHRCKIgiEQUEQQhWFhIQMFG0FTWmlokKPgDLHyBv2BLFSPEuHO/3UIbRRR8jtxxd5yZndFFvHCrmXu+c859ODdEdMbHNySjo5vc/wolz0YyjWRXyVsdkR3/BNSamFhlzAqAxbzfJTEUUAIctQIFvirZagBMFXgbRSYbgeLIyHoFHpWKyFYkjyvwvg40Au+SELbWGq/AQg2LtpKnjUkU2R/JJwP/kM9ejo2tzsFS55Yp8LiWQTkXo/eHFbhaw/Tcb3bkkZpXf0RgXoFDHZHdCsxEQJX8boyVvFlR8iJ1bnkGqMDDATDyhH1bAjYm3k8XPDZbPqn32xT4UKxrh7DTCtZE4HOF/nzeKGC7ikylzq3M1ISwp8doVsm7FSLnXVskVOUmwMFIXs7AyG89gLmE3GeZSTdVwJneWGUZgQuuK7KlCmieZVaITBVYP+izVvK5Aq9tPtVmFNiVN6Qtsq5mVGb6m2LMjI15lv8PfKnUXCzNoL1Y8VCtASY73x7vp61BEbgxoMj7veUNIa/UsFywBpSU1IApuZSPSz8WQ1irwJuG1dJIPq2R+YsdcLJ2jzvkATsGQ2xL8bHbtmUNp8E59f6Ykh+HBLxT2t+m6AKbFbjXBKTkq0Tk1F+BBiwIQXp38FoErit5yS5O6tyKPxX+BPME+iO4dpt/AAAAAElFTkSuQmCC" alt="brake-discs"/>
              ABS
            </span>
          </div>

          <div className='moto-btn'>
            <div className='price'>
              <p>R$100.000</p>
              <span>R$119.900</span>
            </div>

            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>            
            </button>
          </div>
        </div>

        <div className="moto-card">
        <div className="moto-img">
            <img src="/images/motos/road-king.png" alt="breakout" />
          </div>

          <div className="moto-title">
            <h3>Road King™ Special</h3>
          </div>

          <div className='moto-especificacoes'>
            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABk0lEQVR4nMVUy0oDQRDcqOQvnKqMt6AiRNDPUOOPiZ6MVyPoWUFEvXozQjBek56s4EHBx8GLkd7MLrshm8QoONCw9FQV/aidIPiP0wU2NH4lIuSBkPXQmIoAD0K22tauCnnkgNpEIs1yuaikXhDMOfLKkb2cuFSMYpvlcjFXUAGe8JIih4489RGm8hEmNKaSK+gri4ACvAr55YCV1H2hA2w6sutFn5UzTKigcxHgwgO7bWOsA24ceT2I71prYlFRDlBTjYygLiBuR4yp+sWs+SpPhNyTUmk5WRqwlWr/cNT8wl4QzGquY+2iAz6FvHVAQ8gPzfkiZuKZhoNzVI+pLXwL53HeATsqpORIAGg4sumAYw0BniIO2cr49AeCdxMJjms5qqzf8vtAy4/KUW4weDJLKZW2oxywniwF2O1Yu5TgjakmeLI+zjZhe35+Ic82IYl4IdK3zX7GNjnGfhtmbK0+blWxvWHGHvPrKfnMRywU/SW585v2cVD/NUc9DumTeb7IlpD3/ruudxOJ5J0/eWCnPd/UQ3elrphnowAAAABJRU5ErkJggg==" alt="engineering"/>
              1.868 cm³ CC
              </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2UMU7DQBBFVwotoiOh8f/jJj1FTmO3zim4AUhwCRqQaEhDwQVAFPQIlJkIB+4Qo0G25OAIbCtIFKw00vrP+K32z2pC+K31DIyUTJXMOkaaiwybMODNyKJPKLBcg/opfWFWQUWSOjDbWEQ+GHBqwIWRl753TcnVhtrsO+C1AXcvUXRQ5ZWc+t41zxk5aws8cm0uMnFvq5pFFB2+j8e77pXnXPNaawG8LULYqTftKY73lLyqa0UIAwVuWl1ZyeP6z0qeG3D2RTtp7aGSq9L8ewMey6cx9+8yGo3RH5rS/dnwH2h/3cN0q8MhFxn6COoNA/LXON5fm4mfUJGk84AVSRqwba4PQxFIw5YDxwcAAAAASUVORK5CYII=" alt="scale"/>
              366kg
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nL3UsUoDQRAG4IkpUgRsk+bun81uKeQh8gIptMsTpLBLLQo2NlZapExnHsHCJ0iROk0gM8EiKQJaKXIinuFYD/F2xR+m/fhnFpboPyPGHCswLc4a6IeDzDNlzry5DMIeW62mAK8+uOp0joJATdPet3bAPAj7iDKflaw7otAIcF/EhPlNrU2CsIyorsDOa/cQ3o65W3K/iRpzsp8qbRUYltzPn+sq4PhHDHhZWet+D1qbFNcT5lvvgW4oJgJc7DHgaQm0Y8G7AnhOsVFgnmObrXOHUVhGVBPm5/x2p/HtrE1ybLlwrhEPpp+fhBgziMa+GgpwlREd/AlYNe9Kz8oLHI74oAAAAABJRU5ErkJggg==" alt="lightning-bolt--v1"/>
              158Nm TORQUE
            </span>

            <span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDUlEQVR4nK1UO2sUYRT9fKGdiBYSwz3n+wgBBQWNjfHRCKIgiEQUEQQhWFhIQMFG0FTWmlokKPgDLHyBv2BLFSPEuHO/3UIbRRR8jtxxd5yZndFFvHCrmXu+c859ODdEdMbHNySjo5vc/wolz0YyjWRXyVsdkR3/BNSamFhlzAqAxbzfJTEUUAIctQIFvirZagBMFXgbRSYbgeLIyHoFHpWKyFYkjyvwvg40Au+SELbWGq/AQg2LtpKnjUkU2R/JJwP/kM9ejo2tzsFS55Yp8LiWQTkXo/eHFbhaw/Tcb3bkkZpXf0RgXoFDHZHdCsxEQJX8boyVvFlR8iJ1bnkGqMDDATDyhH1bAjYm3k8XPDZbPqn32xT4UKxrh7DTCtZE4HOF/nzeKGC7ikylzq3M1ISwp8doVsm7FSLnXVskVOUmwMFIXs7AyG89gLmE3GeZSTdVwJneWGUZgQuuK7KlCmieZVaITBVYP+izVvK5Aq9tPtVmFNiVN6Qtsq5mVGb6m2LMjI15lv8PfKnUXCzNoL1Y8VCtASY73x7vp61BEbgxoMj7veUNIa/UsFywBpSU1IApuZSPSz8WQ1irwJuG1dJIPq2R+YsdcLJ2jzvkATsGQ2xL8bHbtmUNp8E59f6Ykh+HBLxT2t+m6AKbFbjXBKTkq0Tk1F+BBiwIQXp38FoErit5yS5O6tyKPxX+BPME+iO4dpt/AAAAAElFTkSuQmCC" alt="brake-discs"/>
              ABS
            </span>
          </div>

          <div className='moto-btn'>
            <div className='price'>
              <p>R$140.000</p>
              <span>R$145.900</span>
            </div>

            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>            
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Catalogo;
