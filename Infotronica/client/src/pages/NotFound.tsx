import { useLocation } from "wouter";
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'

export default function NotFound() {
  const [, navigate] = useLocation();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #0F0C29, #302b63)',
        padding: '40px 20px'
      }}>
        <div style={{
          textAlign: 'center',
          color: '#fff',
          maxWidth: '600px'
        }}>
          <div style={{
            fontSize: '120px',
            fontWeight: 'bold',
            color: '#FFD700',
            marginBottom: '20px',
            textShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
          }}>
            404
          </div>

          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#fff'
          }}>
            Página Não Encontrada
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#ccc',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Desculpe, a página que você está procurando não existe.<br />
            Ela pode ter sido movida ou deletada.
          </p>

          <button
            onClick={handleGoHome}
            style={{
              padding: '12px 30px',
              backgroundColor: '#6A0DAD',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background 0.3s, color 0.3s',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD700';
              e.currentTarget.style.color = '#0F0C29';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#6A0DAD';
              e.currentTarget.style.color = 'white';
            }}
          >
            ← Voltar para Home
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
