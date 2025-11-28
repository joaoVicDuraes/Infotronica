import styles from './SectionTitle.module.css';

export default function SectionTitle(props) {
    return (
        <>
            <div className={styles.barraTituloSecao}>
                <h2 className={styles.tituloSecao}>{props.titulo}</h2>
            </div>
        </>
    )
}