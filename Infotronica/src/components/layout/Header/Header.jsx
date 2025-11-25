import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../../../assets/logo2certo.png'
import style from './Header.module.css'
import Button from '../../common/Button/Button'
import SectionTitle from '../../common/SectionTitle/SectionTitle'

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const toggleMenu = () => setMenuAberto(!menuAberto)

    const navegarPara = (caminho) => {
        navigate(caminho)
        setMenuAberto(false)
    }

    return (
        <>
            <div className="cabecalho">
                <header className={style.header}>

                    <div className={style.hamburguer} onClick={toggleMenu}>
                        <span className={style.linha}></span>
                        <span className={style.linha}></span>
                        <span className={style.linha}></span>
                    </div>

                    <img 
                        src={Logo} 
                        alt="Logo da Infotrônica" 
                        className={style.logoDireita} 
                        onClick={() => navegarPara('/')}
                        style={{cursor: 'pointer'}}
                    />

                    <ul className={menuAberto ? style.menuMobileAberto : style.menuDesktop}>
                        
                        <div style={{display: 'contents', cursor: 'pointer'}} onClick={() => navegarPara('/')}>
                            <Button texto="INICIO" />
                        </div>

                        <Button texto="SERVIÇOS" href={location.pathname === '/' ? "#servicos" : "/"} />
                        
                        <div style={{display: 'contents', cursor: 'pointer'}} onClick={() => navegarPara('/loja-computadores')}>
                            <Button texto="COMPUTADORES" />
                        </div>
                        
                        <div style={{display: 'contents', cursor: 'pointer'}} onClick={() => navegarPara('/loja-perifericos')}>
                            <Button texto="Perifericos" />
                        </div>

                        <Button texto="CONTATO" href="#footer" />

                        <a href='https://wa.me/5511971440699'
                           target="_blank"
                           rel="noopener noreferrer">
                            <Button texto="ORÇAMENTO" />
                        </a>
                    </ul>

                </header>
            </div>

            {location.pathname === '/' && (
                <div className={style.conteudoPrincipal} id='inicio'>
                    <SectionTitle titulo="INFOTRÔNICA" />
                    <p className={style.subtituloHero} id='servicos'>
                        INOVAÇÃO & TECNOLOGIA DESDE 1997
                    </p>
                </div>
            )}
        </>
    )
}