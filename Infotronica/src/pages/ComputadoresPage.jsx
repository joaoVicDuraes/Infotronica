import React from 'react';
import './ComputadoresPage.css'; 

const computadores = [
  {
    id: 1,
    nome: "PC Gamer Starter",
    img: "https://criticalhits.com.br/wp-content/uploads/2013/09/setup-01.jpg", 
    specs: ["Intel i3 12th", "8GB RAM", "SSD 480GB", "GTX 1650"],
    preco: "R$ 3.200,00"
  },
  {
    id: 2,
    nome: "PC Gamer Mid-Range",
    img: "https://rocketz.com.br/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBY3c9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--30dc0a3eeaf3b7393b8773396a91c9f8200d4266/pc-gamer-ad-astra-top-2.jpg",
    specs: ["Ryzen 5 5600", "16GB RAM", "SSD 1TB", "RTX 3060"],
    preco: "R$ 5.400,00"
  },
  {
    id: 3,
    nome: "PC High-End Ultra",
    img: "https://rocketz.com.br/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZWs9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8916d9ae78237ac39325bdd27aa2882768eab0ad/pc-gamer-tempest-1.jpg",
    specs: ["Intel i7 13th", "32GB RAM", "SSD 2TB NVMe", "RTX 4070"],
    preco: "R$ 9.800,00"
  },
  {
    id: 4,
    nome: "Workstation Pro",
    img: "https://t2.tudocdn.net/289913?w=1920",
    specs: ["Ryzen 9", "64GB RAM", "SSD 2TB + HD 4TB", "Quadro A4000"],
    preco: "R$ 15.000,00"
  },
];

const ComputadoresPage = () => {
  return (
    <div className="loja-container">
      <h1 className="loja-titulo">Nossos <span className="destaque">Computadores</span></h1>
      
      <div className="grid-produtos">
        {computadores.map((pc) => (
          <div key={pc.id} className="card-produto">
            <div className="img-wrapper">
              <img src={pc.img} alt={pc.nome} />
            </div>
            <h3>{pc.nome}</h3>
            <ul className="specs-lista">
              {pc.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <div className="preco-container">
              <span className="preco">{pc.preco}</span>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComputadoresPage;