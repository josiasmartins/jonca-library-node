export class CsvUtil {
    

    /**
     * Converte object complex in svg
     * @param headers 
     * @param paths 
     * @param object 
     * @returns 
     */
    static covertObjectInCsv(headers: Array<string>, paths: Array<string>, object: any) {
        const csvRows: any[] = [];

        /** adiciona o cabeçalho fornecido */
        csvRows.push(headers.join(','));
        
        /** Itera sobre cada objeto e transforma em linha CSV */
        for (const obj of object) {
            const values = paths.map(path => {
                const keys = path.split('.');
                let value = obj;
                /** percore os caminhos para obter o valor desejado */
                for (const key of keys) {
                    value = value[key];
                    if (value === undefined) break // se não houver valor, interrompe a busca
                }
                /** se o valor contiver virgulas, coloca entre aspas */
                if (typeof value === 'string' && value.includes(',')) {
                    return `"${value}"`;
                }

                return value;
            });

            csvRows.push(values.join(','))
        }

        /** junta todas as linhas em uma string csv */
        return csvRows.join('\n');
    }

    

}