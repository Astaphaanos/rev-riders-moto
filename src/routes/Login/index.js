import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './Login.css';


const Login =  () => {
    const navigate = useNavigate();

    return (
        <section className='section-form' id='login'>
            
            <form className='login-form'>
                <span 
                    style={{ cursor: 'pointer', fontSize: '1rem', color: '#fff' }}
                    title="Carrinho de Compras"  onClick={() => navigate('/')}>
                    <FaArrowLeft/>
                    <a href="#Voltar">
                        Voltar
                    </a>
                </span>
            
            <h2>Faça o Login ou Cadastre-se</h2>
                <div className='login-form-container'>
                    <div className='email-senha-form'>
                        <span>E-mail</span>
                        <input type='email' name='email' placeholder='Seu e-mail'></input>
                    
                        <span>Senha</span>
                        <input type='text' name='email' placeholder='Sua senha'></input>
                    </div>
                </div>

                <div className='forget-form'>
                    <p><a href="#forget">Esqueceu a senha?</a></p>
                    
                    <label>
                        <input type='checkbox'></input>
                        Lembrar
                    </label>
                </div>

                <div className='btn-form'>
                    <button type='submit'>Entrar</button>
                </div>

                <div className='casdastro-links'>
                    <p>
                        Ainda não tem conta? 
                        <a href="#cadastro" onClick={() => navigate('/cadastro')}>
                            Cadastre-se
                        </a>
                    </p>
                </div>
            </form>
        </section>
    );
}

export default Login;