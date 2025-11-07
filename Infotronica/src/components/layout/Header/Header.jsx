import Logo from '../../../../public/logo2certo.png'
import style from './Header.module.css'
import Button from '../../common/Button/Button'

export default function Header() {
    return(
        <>
        <div className='cabecalho'>
            <header>
                <ul>
                    <li>INÍCIO</li>
                    <li>SERVIÇOS</li>
                </ul>
                <img src={Logo} alt="Logo da Infotrônica" className={style.logoDireita} />
                <ul>
                    <li>INÍCIO</li>
                    <li>SERVIÇOS</li>
                </ul>
            </header>
        </div>
            <div className={style.conteudoPrincipal}>
                <h1 className={style.tituloHero}>INFOTRÔNICA</h1>
                <p className={style.subtituloHero}>INOVAÇÃO & TECNOLOGIA DESDE 1997</p>
            </div>
        </>
    ) 
}