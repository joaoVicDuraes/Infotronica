import Logo from '../../../assets/logo2certo.png'
import style from './Header.module.css'
import Button from '../../common/Button/Button'

export default function Header() {
    return(
        <>
        
        <div className='cabecalho'>
            <header> 
                <ul className='header'>
                    <Button texto="INICIO" href="#inicio"/>
                    <Button texto="SERVIÇOS" href="#servicos"/>
                    <Button texto="COMPUTADORES" href="#computadores"/>
                </ul>
                <img src={Logo} alt="Logo da Infotrônica" className={style.logoDireita} />
                <ul>
                    <Button texto="PERIFÉRICOS" href="#perifericos"/>
                    <a href='#contato'>
                    <Button texto="CONTATO" />
                    </a>
                    <a href='https://wa.me/5511971440699' target="_blank" rel="noopener noreferrer">
                    <Button texto="ORÇAMENTO" />
                    </a>
                </ul>
            </header>
        </div>
            <div className={style.conteudoPrincipal} id='inicio'>
                <h1 className={style.tituloHero}>INFOTRÔNICA</h1>
                <p className={style.subtituloHero} id='servicos'>INOVAÇÃO & TECNOLOGIA DESDE 1997</p>
            </div>
        </>
    ) 
}