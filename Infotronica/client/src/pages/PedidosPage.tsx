import { useLocation } from 'wouter'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import SectionTitle from '../components/common/SectionTitle/SectionTitle'
import TabelaDados from '../components/common/TabelaDados/TabelaDados'
import { braprobData } from '../data/braprobData'
import styles from './PedidosPage.module.css'

export default function PedidosPage() {
  const [, navigate] = useLocation()

  const colunasPedidos = [
    { chave: 'id', titulo: 'ID' },
    { chave: 'cliente_id', titulo: 'ID Cliente' },
    { chave: 'data', titulo: 'Data', formatar: (v: string) => new Date(v).toLocaleDateString('pt-BR') },
    { chave: 'total', titulo: 'Total', formatar: (v: number) => `R$ ${v.toFixed(2)}` },
    { chave: 'status', titulo: 'Status' },
    { chave: 'produtos', titulo: 'Itens', formatar: (v: any[]) => `${v.length} itens` }
  ];

  const colunasClientes = [
    { chave: 'id', titulo: 'ID' },
    { chave: 'nome', titulo: 'Nome' },
    { chave: 'email', titulo: 'E-mail' },
    { chave: 'telefone', titulo: 'Telefone' },
    { chave: 'endereco', titulo: 'Endereço', formatar: (v: any) => `${v.rua}, ${v.numero} - ${v.cidade}/${v.estado}` }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className={styles.lojaContainer}>
        <h1 className={styles.lojaTitulo}>Nossos <span className={styles.destaque}>Pedidos</span></h1>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
          <SectionTitle titulo="TABELA DE PEDIDOS - BRAPROB" />
          <p style={{ textAlign: 'center', marginBottom: '20px', color: '#ccc' }}>
            Dados importados do banco de dados BRAPROB
          </p>
          <TabelaDados dados={braprobData.pedidos} colunas={colunasPedidos} />

          <SectionTitle titulo="TABELA DE CLIENTES - BRAPROB" />
          <p style={{ textAlign: 'center', marginBottom: '20px', color: '#ccc' }}>
            Dados importados do banco de dados BRAPROB
          </p>
          <TabelaDados dados={braprobData.clientes} colunas={colunasClientes} />
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }}>
          <button 
            className={styles.botaoVoltar}
            onClick={() => navigate('/')}
          >
            ← Voltar para Home
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
