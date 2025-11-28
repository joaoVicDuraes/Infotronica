import styles from './SobreNos.module.css';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'

export default function SobreNos() {
  return (
    <section id="secao-sobre-nos-nav" className={`${styles.secaoPagina} ${styles.secaoSobreNos}`}>
      <div className={styles.wrapperConteudoSobreNos}>
        <div className={styles.conteudoTexto}>
          <SectionTitle titulo="SOBRE NÓS"/>
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
            src="/logotipo.png"
            alt="Pessoa a usar um laptop com luz ambiente roxa"
          />
        </div>
      </div>
    </section>
  );
}
