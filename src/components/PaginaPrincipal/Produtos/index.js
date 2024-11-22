import './Produtos.css';

const Produtos = ( {adicionarAoCarrinho}) => {

    const produtos = [
        {
            id: 1,
            nome: 'Calça Stella Y',
            descricao: 'Calça impermeável e contém proteção contra impacto, graças à camada leve removível.',
            preco: 200,
            imagem: '/images/produtos/calca.png',
        },
        {
            id: 2,
            nome: 'Capacete Moto-Z',
            descricao: 'O capacete Moto-Z foi feito para quem passa muito tempo em cima da moto e precisa de um capacete leve e compacto.',
            preco: 200,
            imagem: '/images/produtos/capacete.png',
        },
        {
            id: 3,
            nome: 'Jaqueta Stella Y',
            descricao: 'Desenvolvidas para quem busca uma jaqueta com a praticidade de uma construção à prova d\'água.',
            preco: 200,
            imagem: '/images/produtos/jaqueta.png',
        },
        {
            id: 4,
            nome: 'Luvas Stella Y',
            descricao: 'Qualidade elevada na respiração das suas mãos, dorso com tecido tratado e maleável, oferecendo mais qualidade.',
            preco: 200,
            imagem: '/images/produtos/luvas.png',
        },
    ];

    return (
        <section className='produtos-container' id='acessorios'>
            <h3>Explore nossos acessórios</h3>
            <h2>Descubra o produto ideal para você!</h2>

            <div className='produtos-card'>
                {produtos.map((produto) => (
                    <div key={produto.id} className='produtos'>
                        <img src={produto.imagem} alt={produto.nome} />
                        <h4>{produto.nome}</h4>
                        <p>{produto.descricao}</p>
                        <div className='btn'>
                            <span>R${produto.preco}</span>
                            <button onClick={() => adicionarAoCarrinho(produto)}>
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVR4nOWWOy9EURSFLxKiEUoFFSISDTEiUVLoFBTmB0g06FQKhUThF0im80q8foCgU4soJB6JRDMaDSrrfnImh7lm7sycc4cpWMnu9tpr73XuOfsGwb8EMAMs2VgGpmojLJ0ShnyF9AQ01UL45JuwCUj/uvAnzJRI2aImqg3pAmgJygFp9ceFw5yDfeWFoRPp3XZ6h7SWMHYjEx+XFY1MfWQJr0CbE6m4xqGtIWDAjQTjEYsWvEVhBCm0whkfYh3StSXeAPWe3HPLfQM6fLtejEw97sFLR852xUvUAGhFerEFjgIHAI1It5aTrXiFSgFpwxZ5ByaBsbIhrUdcmg2SAhhI+GBcAQ3VCM8lEM06X584AO1Iz7bYfe6KVbIaRoHmoBogZSLnNVFVMR8gPdhpLx0mLRWDP7MqQ+/zPvMXhn6kx5oLf+1n8+7W0moDoNssCWDa5V6aHJtrOF2V8mMBDOce+bxt+86rML8gUpU4RUDaifmL6CmZD70xZ7wV+AJpO0a4pH2mqRjhTX9hSBVYvefQ7EGB1UPewgZmQmDe/OC7/AyYHJs7n/jjCv4qPgAcvqvUIICeCgAAAABJRU5ErkJggg=="
                                    alt="shopping-cart--v1"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Produtos;
