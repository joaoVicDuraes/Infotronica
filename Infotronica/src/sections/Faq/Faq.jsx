import styles from './Faq.module.css';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function Faq() {
  return (
    <section id="secao-faq-nav" className={`${styles.secaoPagina} ${styles.secaoFaq}`}>
        <SectionTitle titulo="PERGUNTAS FREQUENTES" />

      <div className={styles.wrapperConteudoFaq}>
        <div className={styles.itemFaq}>
          <svg className={styles.iconeFaq} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <h4>Onde fica a loja física?</h4>
          <p>Estamos localizados em Bragança Paulista, SP, na Av. Antônio Pires Pimentel 1648. Visite-nos para atendimento personalizado e conheça nossos produtos e serviços de perto.</p>
        </div>

        <div className={styles.itemFaq}>
          <svg className={styles.iconeFaq} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.57.64 1.48 1 2.45 1V6c-2.28 0-4.24-1.23-5.35-3.07L3.41 1H1v2h2l3.6 7.59L5.25 14.03A1.988 1.988 0 007 17h10v-2H7.42c-.14-.27-.25-.56-.25-.87V14h9.25l3.58-6.48A.996.996 0 0020.25 6H12.79c-.2-.63-.48-1.21-.82-1.73L10.93 2H18v2H9.42l1.63 3.07c.58.03 1.15.13 1.7.3L17 10h-4.25l-.94 2h4.64c.34 0 .66.1.93.27zM12 6V3.26C12 3.12 11.88 3 11.74 3c-.07 0-.13.03-.18.07L5.35 9.07c.05.16.08.33.08.5V10h6.57L12 6z" />
          </svg>
          <h4>Como faço para comprar?</h4>
          <p>Você pode navegar por nossas seções de produtos e serviços. Para finalizar, entre em contato conosco via WhatsApp ou e-mail para um atendimento personalizado.</p>
        </div>

        <div className={styles.itemFaq}>
          <svg className={styles.iconeFaq} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.75-2.7 1.75-2.25 0-2.86-.91-2.96-2.14H6.05c.14 1.91 1.55 3.43 3.95 3.89V21h3v-2.15c2.05-.41 3.5-1.7 3.5-3.67.01-2.24-1.74-3.48-4.7-4.14z" />
          </svg>
          <h4>É cobrado por orçamento?</h4>
          <p>Não, a Infotrônica oferece orçamentos sem compromisso para todos os nossos serviços e produtos. Entre em contato e saiba mais!</p>
        </div>
      </div>

    </section>
  );
}
