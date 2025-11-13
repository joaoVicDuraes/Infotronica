import styles from "./Computadores.module.css"
import computador from '../../assets/computadores.png'
import SectionTitle from "../../components/common/SectionTitle/SectionTitle"
export default function Computadores() {
    return (
        <>
      <section id="computadores" className={`${styles.secaoPagina} ${styles.secaoComputadores}`}>
      <SectionTitle titulo="COMPUTADORES" />
      <div className={styles.wrapperConteudoComputadores}>
        <div className={styles.containerImagem}>
          <img src={computador} alt="Notebook moderno numa mesa" />
        </div>

        <div className={styles.conteudoTexto}>
          <div className={styles.itemTexto}>
            <h4>NOTEBOOKS</h4>
            <p>
              Desempenho e portabilidade para o seu dia a dia. Encontre o notebook ideal para trabalho, estudo ou lazer, com as melhores configurações e marcas do mercado.
            </p>
          </div>

          <div className={styles.itemTexto}>
            <h4>DESKTOPS</h4>
            <p>
              Estabilidade e potência para as tarefas mais exigentes. Montamos ou configuramos o seu PC, garantindo alta performance e durabilidade para uso profissional ou pessoal.
            </p>
          </div>

          <div className={styles.itemTexto}>
            <h4>GAMER</h4>
            <p>
              Experiência de jogo imersiva com gráficos e velocidade incomparáveis. Máquinas otimizadas para gamers, com componentes de última geração para alta competitividade.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.areaBotaoComprar}>
        <a href="https://wa.me/5511971440699" target="_blank" rel="noopener noreferrer">
          <button className={styles.botaoComprar}>SOLICITAR ORÇAMENTO</button>
        </a>
      </div>
    </section>
        </>
    )
}