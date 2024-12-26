import { FaShoppingCart } from 'react-icons/fa';
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
                            <span>{(produto.preco).toLocaleString
                            ("pt-br", {
                                style: "currency",
                                currency: "BRL"
                            })}</span>
                            <button onClick={() => adicionarAoCarrinho(produto)}>
                                <FaShoppingCart size={24}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Produtos;
