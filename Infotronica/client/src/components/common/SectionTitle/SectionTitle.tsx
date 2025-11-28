import styles from './SectionTitle.module.css';

interface SectionTitleProps {
    titulo: string;
}

export default function SectionTitle( props: SectionTitleProps ) {
    return (
        <>
        <div className={styles.barraTituloSecao}>
            <h2 className={styles.tituloSecao}>{props.titulo}</h2>
        </div>
        </>
    )
}
