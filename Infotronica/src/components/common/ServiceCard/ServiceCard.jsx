import Button from "../Button/Button"
import style from './ServiceCard.module.css'
import computadores from '../../../../public/computadores.png'
import reparos from '../../../../public/reparos.png'
import perifericos from '../../../../public/perifericos.png'

export default function ServiceCard() {
    return(
        <>
        <section id="produtos-e-servicos-nav" className={style.prodservicos}>
                <h2 className={style.tituloSecao}>SOLUÇÕES & SERVIÇOS</h2>
            <div className={style.containerCards}>
                <div className={style.cardProduto}>
                    <img src={computadores} alt="Imagem de Computadores" className={style.imgcard}/>
                    <h3>COMPUTADORES</h3>
                    <Button texto='VER OPÇÕES'/>
                </div>
                <div className={style.cardProduto}>
                    <img src={perifericos} alt="Imagem de Periféricos" className={style.imgcard}/>
                    <h3>PERIFÉRICOS</h3>
                    <Button texto='VER OPÇÕES'/>
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