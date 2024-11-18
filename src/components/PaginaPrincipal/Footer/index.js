import "./Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='contatos'>
      <div className="footer-container">

        <div className="sobre-container">
          <h3>Sobre nós</h3>
          <img src="/images/logo.png" alt="logo" />
          <p>
          Explore um universo de motocicletas de alto padrão e acessórios exclusivos. Transforme o estilo e o desempenho da sua moto com facilidade ou encontre a máquina dos seus sonhos em nossa coleção!
          </p>
          <div className='social-icons'>
            <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="facebook-new"/>
            <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/tiktok.png" alt="tiktok"/>
            <img width="10" height="10" src="https://img.icons8.com/material-outlined/50/FFFFFF/instagram-new.png" alt="instagram-new"/>
            <img width="10" height="10" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/youtube-play.png" alt="youtube-play"/>
          </div>
        </div>

        <div className="services-container">
          <h3>Serviços</h3>
          <ul>
            <li>Capacetes</li>
            <li>Proteção</li>
            <li>Peças</li>
            <li>Manutenção</li>
            <li>Rodas</li>
            <li>Lavagem</li>
          </ul>
        </div>

        <div className="links-container">
          <h3>Termos</h3>
          <ul>
            <li>Privacidade e Política</li>
            <li>Política de Reembolso </li>
            <li>Termos de Serviços</li>
            <li>Políticas de Envio</li>
            <li>Produtos</li>
            <li>Trabalhe Conosco</li>
          </ul>
        </div>

        <div className="contatos-container">
          <h3>Nos contate</h3>

          <div className="contatos">
            <h4>
              <FaPhone /> Telefone
            </h4>
            <p>+87 991278912</p>
          </div>
          <div className="contatos">
            <h4>
              <FaEnvelope /> Email
            </h4>
            <p>contato@revriders.com</p>
          </div>

          <div className="contatos">
            <h4>
              <FaMapMarkedAlt /> Endereço
            </h4>
            <p>
              1423 Rua das Flores, Bairro Alto Horizonte, Cidade Nova Esperança
              - RJ, CEP: 87654-321
            </p>
          </div>

        </div>
      </div>

      <div className="copyright-container">
        <p>
          © 2024 RevRiders. Made wit by
          <a href="https://www.linkedin.com/in/anna-clara-amorim/" target="-blank">
            Clara Amorim
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
