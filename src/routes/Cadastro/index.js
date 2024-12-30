import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./Cadastro.css";


const Cadastro = () => {
const navigate = useNavigate();

  return (
    <section className="cadastro-section" id="cadastro">
      <form className="cadastro-form-container">
      <h2>
          <span 
          style={{ cursor: 'pointer', fontSize: '1rem', color: '#fff' }}
          title="Carrinho de Compras" onClick={() => navigate('/login')}>
              <a href="#Voltar"><FaArrowLeft/></a>
          </span>
          Faça seu Cadastro
        </h2>
        <h3>Informe seus dados pessoais</h3>

        <div className="cadastro-dados-pessoais">
          <label>Nome Completo *</label>
          <input type="name" name="nome" placeholder="Nome Completo"></input>

          <label>E-mail *</label>
          <input type="email" name="email" placeholder="Seu E-mail"></input>

          <label>Data de Nascimento *</label>
          <input
            type="text"
            name="data-nascimento"
            placeholder="00/00/0000"
          ></input>

          <label>CPF*</label>
          <input type="text" name="cpf" placeholder="000.000.000-00"></input>

          <label>RG *</label>
          <input type="text" name="rg" placeholder="00.000.000-0"></input>

          <label>Telefone *</label>
          <input
            type="text"
            name="telefone"
            placeholder="(00) 0000-0000"
          ></input>
        </div>

        <div className="cadastro-faturamento">
          <h3>Informe seus dados de faturamento</h3>
          <p>
            Para comprar de motocicleta, o endereço para entrega deverá ser o
            residencial e o mesmo de faturamento
          </p>

          <label>CEP *</label>
          <input type="text" name="cep" placeholder="00000-000"></input>

          <label>Logradouro *</label>
          <input type="text" name="logradouro" placeholder="Logradouro"></input>

          <label>Complemento*</label>
          <input
            type="text"
            name="complemento"
            placeholder="Complemento"
          ></input>

          <label>Bairro *</label>
          <input type="text" name="bairro" placeholder="Bairro"></input>

          <label>UF *</label>
          <input type="text" name="uf" placeholder="UF"></input>

          <label>Cidade *</label>
          <input type="text" name="cidade" placeholder="Cidade"></input>
        </div>

        <div className="termos-container">
          <label>
            <input type="checkbox"></input>
            Quero receber atualizações por e-mail e SMS
          </label>

          <label>
            <input type="checkbox"></input>
            Li e concordo com os Termos de Uso
          </label>

          <label>
            <input type="checkbox"></input>
            Li e concordo com o Aviso de Privacidade
          </label>
        </div>

        <div className="cadastro-btn">
          <button type="submit">Cadastrar</button>
        </div>

      </form>
    </section>
  );
};

export default Cadastro;
