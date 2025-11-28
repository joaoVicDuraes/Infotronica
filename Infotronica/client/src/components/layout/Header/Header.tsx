import { useState } from 'react'
import { Link } from 'wouter'
import Logo from '/logo2certo.png'
import style from './Header.module.css'
import Button from '../../common/Button/Button'
import SectionTitle from '../../common/SectionTitle/SectionTitle'

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false)
    const [braprobAberto, setBraprobAberto] = useState(false)

    const toggleMenu = () => setMenuAberto(!menuAberto)
    const toggleBraprob = () => setBraprobAberto(!braprobAberto)

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
                    <Link href="/">
                        <div className={style.logoDireita}>
                            <img src={Logo} alt="Logo da Infotrônica" />
                        </div>
                    </Link>

                    {/* MENU DESKTOP / MOBILE COMBINADO */}
                    <ul className={menuAberto ? style.menuMobileAberto : style.menuDesktop}>
                        <Link href="/">
                            <Button texto="INICIO" />
                        </Link>
                        <Link href="/loja-computadores">
                            <Button texto="COMPUTADORES" />
                        </Link>
                        <Link href="/loja-perifericos">
                            <Button texto="PERIFÉRICOS" />
                        </Link>

                        {/* DROPDOWN REGISTROS */}
                        <div className={style.dropdownContainer}>
                            <button 
                                className={style.dropdownToggle}
                                onClick={toggleBraprob}
                            >
                                REGISTROS ▼
                            </button>
                            {braprobAberto && (
                                <div className={style.dropdownMenu}>
                                    <Link href="/produtos">
                                        <a className={style.dropdownItem}>Produtos</a>
                                    </Link>
                                    <Link href="/pedidos">
                                        <a className={style.dropdownItem}>Pedidos</a>
                                    </Link>
                                </div>
                            )}
                        </div>

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
