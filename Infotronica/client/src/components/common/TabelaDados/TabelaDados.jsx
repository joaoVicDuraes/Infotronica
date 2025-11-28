import styles from './TabelaDados.module.css';

export default function TabelaDados({ dados, colunas }) {
    if (!dados || dados.length === 0) {
        return <div className={styles.semDados}>Nenhum dado disponível.</div>;
    }

    return (
        <div className={styles.containerTabela}>
            <table className={styles.tabela}>
                <thead>
                    <tr>
                        {colunas.map((coluna) => (
                            <th key={coluna.chave}>{coluna.titulo}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            {colunas.map((coluna) => (
                                <td key={`${index}-${coluna.chave}`}>
                                    {coluna.formatar 
                                        ? coluna.formatar(item[coluna.chave]) 
                                        : (typeof item[coluna.chave] === 'object' 
                                            ? JSON.stringify(item[coluna.chave]) 
                                            : item[coluna.chave])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}