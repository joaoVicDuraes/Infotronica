import styles from './SobreNos.module.css';
import img from '../../assets/nootebook moderno.jpg';

export default function SobreNos() {
  return (
    <section id="secao-sobre-nos-nav" className={`${styles.secaoPagina} ${styles.secaoSobreNos}`}>
      <div className={styles.logoISuperiorDireito}>I</div>

      <div className={styles.wrapperConteudoSobreNos}>
        <div className={styles.conteudoTexto}>
          <h2 className={styles.tituloSecao}>SOBRE NÓS</h2>
          <p>
            Na Infotrônica, acreditamos que a tecnologia deve simplificar a vida. Desde 1997, entregamos soluções
            inovadoras para você, seu negócio e sua equipe.
          </p>
          <p>
            Nossa dedicação é impulsionada pela busca constante por excelência e inovação. Com produtos de alta
            qualidade e serviços especializados, garantimos que você tenha sempre o melhor suporte técnico e as
            soluções mais avançadas.
          </p>
        </div>

        <div className={styles.containerImagem}>
          <img
            src={img}
            alt="Pessoa a usar um laptop com luz ambiente roxa"
          />
        </div>
      </div>
    </section>
  );
}
