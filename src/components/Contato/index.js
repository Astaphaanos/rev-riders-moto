import "./Contato.css";

const Contato = () => {
  return (
    <section className="form-container" id='comprar'>
      <h2>Reserve sua moto</h2>
      <p>
        A nossa equipa responderá rapidamente ao seu pedido, garantindo que a
        sua bicicleta está em excelentes condições. Para qualquer dúvida,
        proposta ou assistência adicional, não hesite em entrar em contato
        conosco. Estamos aqui para ajudar!
      </p>

      <div className="form">
        <form>  
            <select>
                <option>Selecione a sua moto</option>
                <option>Breakout 117</option>
                <option>Fat-bob 114</option>
                <option>Sportster S</option>
                <option>Low Ride S</option>
                <option>Pan America 1250 Special</option>
                <option>Road King Special</option>
            </select>
          
          <input type="text" placeholder="Nome Completo"></input>
          <input type="email" placeholder="E-mail"></input>
          <input type="text" placeholder="Número de Telefone"></input>
          <input type="text" placeholder="Endereço"></input>

          <select>
            <option>Selecione o seu método de pagamento</option>
            <option>À vista</option>
            <option>Cartão</option>
            <option>Pix</option>
            <option>Boleto</option>
          </select>

          <button type="button">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
