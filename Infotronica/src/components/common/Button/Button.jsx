import styles from './Button.module.css'

export default function Button( props ) {
    return(
        <>
            <a href="#secao-computadores-nav">
            <button className={styles.btn}>
            <svg width="180px" height="60px" viewBox="0 0 180 60" className={styles.border}>
                <polyline points="179,1 179,59 1,59 1,1 179,1" className={styles.bgLine} />
                <polyline points="179,1 179,59 1,59 1,1 179,1" className={styles.hlLine} />
            </svg>
            <span>{props.texto}</span>
            </button>
            </a>
        </>
    )
}