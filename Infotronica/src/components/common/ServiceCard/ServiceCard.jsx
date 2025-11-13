import Button from "../Button/Button"
import style from './ServiceCard.module.css'
import computadores from '../../../assets/computadores.png'
import reparos from '../../../assets/reparos.png'
import perifericos from '../../../assets/perifericos.png'
import SectionTitle from "../SectionTitle/SectionTitle"

export default function ServiceCard() {
    return(
        <>
        <section id="produtos-e-servicos-nav" className={style.prodservicos}>
                <SectionTitle titulo="PRODUTOS E SERVIÇOS" />
            <div className={style.containerCards}>
                <div className={style.cardProduto}>
                    <img src={computadores} alt="Imagem de Computadores" className={style.imgcard}/>
                    <h3>COMPUTADORES</h3>
                    <Button texto='VER OPÇÕES' href="#computadores"/>
                </div>
                <div className={style.cardProduto}>
                    <img src={perifericos} alt="Imagem de Periféricos" className={style.imgcard}/>
                    <h3>PERIFÉRICOS</h3>
                    <Button texto='VER OPÇÕES' href="#perifericos"/>
                </div>
                <div className={style.cardProduto}>
                    <img src={reparos} alt="Imagem de Serviços de TI" className={style.imgcard}/>
                    <h3>MANUTENÇÃO</h3>
                    <Button texto='VER OPÇÕES'/>
                </div>
            </div>
        </section>
        </>
    )
}