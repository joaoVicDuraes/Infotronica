import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import styles from './Perifericos.module.css';
import mouseImage from '../../../public/mouse.webp';
import tecladoImage from '../../../public/teclado3.jpg';
import headsetImage from '../../../public/headset.webp';

export default function Perifericos(){
    return(
        <>
        <section id="perifericos" className={styles.secaoPagina}>
            <SectionTitle titulo="PERIFÉRICOS" />
            <div className={styles.wrapperConteudoPerifericos}>
              <div className={styles.itemPeriferico}>
                <div className={styles.itemTexto}>
                    <h4>TECLADOS</h4>
                    <img src={tecladoImage} alt="Imagem de um teclado" className={styles.imgPerifericos} />
                    <p>
                        Teclados ergonômicos e mecânicos para máxima produtividade e conforto. Escolha entre uma variedade de estilos e funcionalidades para atender às suas necessidades diárias.
                    </p>
                </div>
                <div className={styles.itemTexto}>
                    <h4>MOUSES</h4>
                    <img src={mouseImage} alt="Imagem de um mouse" className={styles.imgPerifericos} /> 
                    <p>
                        Mouses precisos e responsivos para todas as tarefas, desde o trabalho até jogos. Descubra modelos com designs ergonômicos e recursos avançados para melhorar sua experiência.
                    </p>
                </div>
                <div className={styles.itemTexto}>
                    <h4>HEADSETS</h4>
                    <img src={headsetImage} alt="Imagem de um headset" className={styles.imgPerifericos} />
                    <p>
                        Headsets com som cristalino e microfones de alta qualidade para comunicação clara. Perfeitos para reuniões online, jogos e entretenimento, proporcionando conforto durante longas sessões.
                    </p>
                </div>
              </div>
            </div>
        </section>
        </>
    )
}