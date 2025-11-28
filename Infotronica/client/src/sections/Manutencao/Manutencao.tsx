import styles from './Manutencao.module.css';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
export default function Manutencao() {
  return (
    <section id="secao-servicos-nav" className={`${styles.secaoPagina} ${styles.secaoServicos}`}>
      <SectionTitle titulo="MANUTENÇÃO DE COMPUTADORES" />

      <div className={styles.wrapperConteudoServicos}>
        <div className={styles.itemServico}>
          <img
            src="/upgrade.jpg"
            alt="Mão a fazer upgrade de hardware num computador"
          />
          <h4>UPGRADES</h4>
          <p>
            Aumente a vida útil e o desempenho do seu equipamento com nossos serviços de upgrade de
            hardware. Modernize seu sistema sem precisar de um novo PC.
          </p>
        </div>

        <div className={styles.itemServico}>
          <img
            src="/limpeza-dos-computadores.jpg"
            alt="Pincel a limpar o interior de um computador"
          />
          <h4>LIMPEZA PROFUNDA</h4>
          <p>
            Remoção de poeira e otimização térmica para garantir a longevidade e o bom funcionamento
            do seu computador, prevenindo superaquecimento.
          </p>
        </div>

        <div className={styles.itemServico}>
          <img
            src="/reparo-de-computadores.png"
            alt="Mãos a reparar componentes eletrônicos de um computador"
          />
          <h4>REPAROS TÉCNICOS</h4>
          <p>
            Soluções rápidas e eficazes para problemas de software ou hardware, desde formatação até
            troca de componentes, com garantia de serviço.
          </p>
        </div>
      </div>
    </section>
  );
}
