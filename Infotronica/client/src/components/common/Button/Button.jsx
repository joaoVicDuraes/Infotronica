import styles from './Button.module.css'

export default function Button(props) {
    const content = (
        <>
            <svg width="180px" height="60px" viewBox="0 0 180 60" className={styles.border}>
                <polyline points="179,1 179,59 1,59 1,1 179,1" className={styles.bgLine} />
                <polyline points="179,1 179,59 1,59 1,1 179,1" className={styles.hlLine} />
            </svg>
            <span>{props.texto}</span>
        </>
    );

    if (props.href) {
        return (
            <a href={props.href} className={styles.btn}>
                {content}
            </a>
        );
    }

    return (
        <button className={styles.btn} onClick={props.onClick}>
            {content}
        </button>
    );
}