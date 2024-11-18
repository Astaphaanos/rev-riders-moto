import './Produtos.css';

const Produtos = () => {
    return(
        <section className='produtos-container' id='acessorios'>
            <h3>Explore nossos acessórios</h3>
            <h2>Descubra o produto é ideal para você!</h2>

            <div className='produtos-card'>
                
                <div className='produtos'>
                    <img src='/images/produtos/calca.png' alt='Calça'/>
                    <h4>Calça Stella Y</h4>
                    <p>Calça impermeável e contém proteção contra impacto, graças à camada leve removível.  </p>
                    <div className='btn'>
                        <span>R$200</span>
                        <button type='button'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>
                        </button>
                    </div>
                </div>

                <div className='produtos'>
                    <img src='/images/produtos/capacete.png' alt='Capacete'/>
                    <h4>Capacete Moto-Z</h4>
                    <p>O capacete Moto-Z foi feito para quem passa muito tempo em cima da moto e precisa de um capacete leve e compacto</p>
                    <div className='btn'>
                        <span>R$200</span>
                        <button type='button'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>
                        </button>
                    </div>
                </div>

                <div className='produtos'>
                    <img src='/images/produtos/jaqueta.png' alt='Jaqueta'/>
                    <h4>Jaqueta Stella Y</h4>
                    <p>Desenvolvidas para quem busca uma jaqueta com a praticidade de uma construção à prova d'água</p>
                    <div className='btn'>
                        <span>R$200</span>
                        <button type='button'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>
                        </button>
                    </div>
                </div>

                <div className='produtos'>
                    <img src='/images/produtos/luvas.png' alt='Luvas'/>
                    <h4>Luvas Stella Y</h4>
                    <p>Qualidade elevada na respiração das suas mãos, dorso com tecido tratado e maleável, oferecendo mais qualiade</p>
                    <div className='btn'>
                        <span>R$200</span>
                        <button type='button'>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg==" alt="shopping-cart--v1"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Produtos;