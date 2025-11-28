import { Link } from 'wouter'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import styles from './PerifericosPage.module.css'

const perifericos = [
  { id: 1, nome: "Mouse Gamer RGB 12000 DPI", img: "https://lojagoldentec.vteximg.com.br/arquivos/ids/166761-1000-1000/image-224acc37069842568a859bd4cdd15ab8.jpg?v=638590603445700000", preco: "R$ 149,90" },
  { id: 2, nome: "Teclado Mecânico Switch Blue", img: "https://blogdomaisvendido.com/wp-content/uploads/2024/02/Teclado-de-membrana-800x533.jpg", preco: "R$ 349,90" },
  { id: 3, nome: "Headset 7.1 Surround", img: "https://cms-assets.xboxservices.com/assets/09/04/090478a4-5a5d-4a0e-9140-5b5184f46ffe.jpg?n=465582_Image-Hero-768_1920x831.jpg", preco: "R$ 279,90" },
  { id: 4, nome: "Monitor Gamer 144Hz 24pol", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDD5wnvq7e1pzioFUyKyfhDp1nbiQ47_ELQ&s", preco: "R$ 1.199,00" },
  { id: 5, nome: "Mousepad Extra Grande XXL", img: "https://d1br4h274rc9sc.cloudfront.net/content/Mousepad_Gamer_01_banner_image_2700_x_1530_53733146ee.webp", preco: "R$ 89,90" },
  { id: 6, nome: "Webcam Full HD 1080p", img: "https://m.media-amazon.com/images/I/61DRyuOB3vL.jpg", preco: "R$ 219,00" },
  { id: 7, nome: "Microfone Condensador USB", img: "https://img.kalunga.com.br/fotosdeprodutos/672334z.jpg", preco: "R$ 399,00" },
  { id: 8, nome: "Controle Sem Fio PC/Console", img: "https://static.kadri.com.br/produto/102142-MAIN.png", preco: "R$ 259,90" },
];

export default function PerifericosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className={styles.lojaContainerPerifericos}>
        <h1 className={styles.lojaTitulo}>Nossos <span className={styles.destaque}>Periféricos</span></h1>
        
        <div className={styles.gridProdutos}>
          {perifericos.map((item) => (
            <div key={item.id} className={styles.cardProduto}>
              <div className={styles.imgWrapper}>
                <img src={item.img} alt={item.nome} />
              </div>
              <h3>{item.nome}</h3>
              
              <div style={{flexGrow: 1}}></div>

              <div className={styles.precoContainer}>
                <span className={styles.preco}>{item.preco}</span>
                <button className={styles.btnComprar}>Ver Detalhes</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }}>
          <Link href="/">
            <a className={styles.botaoVoltar}>← Voltar para Home</a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
