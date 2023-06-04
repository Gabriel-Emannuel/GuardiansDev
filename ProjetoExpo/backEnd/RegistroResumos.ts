class RegistroResumos {
    private resumos: {[key: string]: string}
    
    public constructor() {
        this.resumos = {};
    }

    public adicionaTema(tema: string, resumo: string): void {
        if (this.resumos[tema] !== undefined) throw new Error('Tema já cadastrado');
        this.resumos[tema] = resumo; 
    }

    public deletaTema(tema: string): void {
        if (this.resumos[tema] === undefined) throw new Error('Tema não cadastrado');
        delete this.resumos[tema];
    }

    public pegaResumos(): {[key:string]: string}{
        return this.resumos;
    }

    public conta(): number {
        return Object.keys(this.resumos).length;
    }

    public temResumo(tema: string): boolean {
        return this.resumos[tema] !== undefined;
    }

    public busca(chaveDeBusca: string): {[key: string]: string} {
        let retorno: {[key: string]: string} = {};
        let temas = Object.keys(this.resumos);
        let resumos = Object.values(this.resumos);
        resumos.forEach((resumo, indice) => resumo.includes(chaveDeBusca) ? retorno[temas[indice]] = resumo : false);
        return retorno;
    }
}

export {RegistroResumos} ;