class RegistroTempoOnline {
    
    private nomeDisciplina: string;
    private tempoOnlineEsperado: number;
    private tempoOnline: number;

    public constructor(disciplina: string, tempo?: number) {
        this.nomeDisciplina = disciplina;
        this.tempoOnlineEsperado = tempo || 120;
        this.tempoOnline = 0;
    }

    public adicionaTempoOnline(tempo: number): void {
        this.tempoOnline += tempo;
    }

    public atingiuMeta(): boolean {
        return this.tempoOnline > this.tempoOnlineEsperado;
    }

    public RegistroTempoOnline(): {[key: string]: string|number} {
        return {
            nomeDisciplina: this.nomeDisciplina,
            tempoOnlineEsperado: this.tempoOnlineEsperado,
            tempoOnline: this.tempoOnline
        };
    }
}

export {RegistroTempoOnline} ;