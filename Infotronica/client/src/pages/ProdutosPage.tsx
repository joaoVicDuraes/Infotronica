import { useLocation } from 'wouter'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import SectionTitle from '../components/common/SectionTitle/SectionTitle'
import TabelaDados from '../components/common/TabelaDados/TabelaDados'
import { braprobData } from '../data/braprobData'
import styles from './ProdutosPage.module.css'

export default function ProdutosPage() {
  const [, navigate] = useLocation()

  const colunasProdutos = [
    { chave: 'id', titulo: 'ID' },
    { chave: 'nome', titulo: 'Nome' },
    { chave: 'categoria', titulo: 'Categoria' },
    { chave: 'descricao', titulo: 'Descrição' },
    { chave: 'preco', titulo: 'Preço', formatar: (v: number) => `R$ ${v.toFixed(2)}` },
    { chave: 'estoque', titulo: 'Estoque' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className={styles.lojaContainer}>
        <h1 className={styles.lojaTitulo}>Nossos <span className={styles.destaque}>Produtos</span></h1>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
          <SectionTitle titulo="TABELA DE PRODUTOS - BRAPROB" />
          <p style={{ textAlign: 'center', marginBottom: '20px', color: '#ccc' }}>
            Dados importados do banco de dados BRAPROB
          </p>
          <TabelaDados dados={braprobData.produtos} colunas={colunasProdutos} />
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
