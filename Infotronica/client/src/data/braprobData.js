// Dados exportados do banco de dados BRAPROB
export const braprobData = {
  "produtos": [
    {
      "id": 1,
      "nome": "Notebook Dell Inspiron 15",
      "categoria": "Notebooks",
      "descricao": "Notebook Dell com 8GB de RAM, 256GB SSD e processador Intel i5.",
      "preco": 3500.00,
      "estoque": 25
    },
    {
      "id": 2,
      "nome": "Mouse Gamer Logitech G502",
      "categoria": "Periféricos",
      "descricao": "Mouse gamer com 11 botões programáveis e sensibilidade ajustável até 16000 DPI.",
      "preco": 249.99,
      "estoque": 150
    },
    {
      "id": 3,
      "nome": "Teclado Mecânico Corsair K95",
      "categoria": "Periféricos",
      "descricao": "Teclado mecânico RGB com switches Cherry MX e 6 teclas macro.",
      "preco": 799.99,
      "estoque": 50
    },
    {
      "id": 4,
      "nome": "Placa de Vídeo NVIDIA RTX 3060",
      "categoria": "Componentes",
      "descricao": "Placa de vídeo com 12GB GDDR6, ideal para jogos em 4K e edição de vídeo.",
      "preco": 2899.99,
      "estoque": 10
    }
  ],
  "clientes": [
    {
      "id": 1,
      "nome": "João Silva",
      "email": "joao.silva@gmail.com",
      "telefone": "(11) 91234-5678",
      "endereco": {
        "rua": "Rua das Flores",
        "numero": "123",
        "bairro": "Centro",
        "cidade": "São Paulo",
        "estado": "SP",
        "cep": "01000-000"
      }
    },
    {
      "id": 2,
      "nome": "Maria Oliveira",
      "email": "maria.oliveira@yahoo.com.br",
      "telefone": "(21) 98765-4321",
      "endereco": {
        "rua": "Avenida Brasil",
        "numero": "456",
        "bairro": "Botafogo",
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "cep": "22010-000"
      }
    }
  ],
  "pedidos": [
    {
      "id": 1,
      "cliente_id": 1,
      "data": "2025-11-15",
      "produtos": [
        {
          "produto_id": 1,
          "quantidade": 1,
          "preco_unitario": 3500.00
        },
        {
          "produto_id": 2,
          "quantidade": 2,
          "preco_unitario": 249.99
        }
      ],
      "total": 3999.98,
      "status": "Em processo"
    },
    {
      "id": 2,
      "cliente_id": 2,
      "data": "2025-11-20",
      "produtos": [
        {
          "produto_id": 3,
          "quantidade": 1,
          "preco_unitario": 799.99
        },
        {
          "produto_id": 4,
          "quantidade": 1,
          "preco_unitario": 2899.99
        }
      ],
      "total": 3699.98,
      "status": "Enviado"
    }
  ]
};

export default braprobData;
