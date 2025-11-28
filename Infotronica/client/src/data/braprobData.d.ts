export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  descricao: string;
  preco: number;
  estoque: number;
}

export interface Endereco {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: Endereco;
}

export interface ItemPedido {
  produto_id: number;
  quantidade: number;
  preco_unitario: number;
}

export interface Pedido {
  id: number;
  cliente_id: number;
  data: string;
  produtos: ItemPedido[];
  total: number;
  status: string;
}

export interface BraprobData {
  produtos: Produto[];
  clientes: Cliente[];
  pedidos: Pedido[];
}

export const braprobData: BraprobData;
export default braprobData;
