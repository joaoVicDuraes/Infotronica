import { useState } from 'react'
import Logo from '../../../assets/logo2certo.png'
import style from './Header.module.css'
import Button from '../../common/Button/Button'
import SectionTitle from '../../common/SectionTitle/SectionTitle'

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false)

    const toggleMenu = () => setMenuAberto(!menuAberto)

    return (
        <>
            <div className="cabecalho">
                <header className={style.header}>

                    {/* BOTÃO HAMBURGUER */}
                    <div className={style.hamburguer} onClick={toggleMenu}>
                        <span className={style.linha}></span>
                        <span className={style.linha}></span>
                        <span className={style.linha}></span>
                    </div>

                    {/* LOGO */}
                    <img src={Logo} alt="Logo da Infotrônica" className={style.logoDireita} />

                    {/* MENU DESKTOP / MOBILE COMBINADO */}
                    <ul className={menuAberto ? style.menuMobileAberto : style.menuDesktop}>
                        <Button texto="INICIO" href="#inicio" />
                        <Button texto="SERVIÇOS" href="#servicos" />
                        <Button texto="COMPUTADORES" href="#computadores" />
                        <Button texto="PERIFÉRICOS" href="#perifericos" />
                        <Button texto="CONTATO" href="#footer" />

                        <a href='https://wa.me/5511971440699'
                           target="_blank"
                           rel="noopener noreferrer">
                            <Button texto="ORÇAMENTO" />
                        </a>
                    </ul>

                </header>
            </div>

            <div className={style.conteudoPrincipal} id='inicio'>
                <SectionTitle titulo="INFOTRÔNICA" />
                <p className={style.subtituloHero} id='servicos'>
                    INOVAÇÃO & TECNOLOGIA DESDE 1997
                </p>
            </div>
        </>
    )
}
