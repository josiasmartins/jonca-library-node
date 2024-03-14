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

    static downloadCsv(headers: Array<string>, paths: Array<string>, object: any, filename: string) {
        /** converte os dados em csv */
        const csvData = CsvUtil.covertObjectInCsv(headers, paths, object);

        /** cria um objeto Blob para CSV */
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

        /** cria um URL temporário para o Blob */
        const url = URL.createObjectURL(blob);

        /** cria um link <a> para o download */
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        
        /** simula um clique no link para iniciar o donwload */
        document.body.appendChild(link);
        link.click();

        /** limpa o link e o URL temporário */
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }



}