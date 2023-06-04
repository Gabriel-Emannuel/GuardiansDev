import { RegistroTempoOnline } from "./RegistroTempoOnline";

class RegistroTempoOnlineRepository {
    private registros: {[key: string]: RegistroTempoOnline};
   
    public constructor() {
        this.registros = {};
    }

    public cadastraTempoOnline(disciplina: string, tempoOnlineEsperado?:number): boolean {
        if (this.registros[disciplina] !== undefined) return false;
        this.registros[disciplina] = new RegistroTempoOnline(disciplina, tempoOnlineEsperado); return true;
    }

    public adicionaTempoOnline(disciplina:string, tempo: number): void {
        if (this.registros[disciplina] === undefined) throw new Error('Disciplina não cadastrada');
        this.registros[disciplina].adicionaTempoOnline(tempo);
    }

    public atingiuMetaTempoOnline(disciplina: string): boolean {
        if (this.registros[disciplina] === undefined) throw new Error('Disciplina não cadastrada');
        return this.registros[disciplina].atingiuMeta();
    }

    public pegarRegistroTempoOnline(disciplina: string): {[key: string]: string|number} {
        if (this.registros[disciplina] === undefined) throw new Error('Disciplina não cadastrada');
        return this.registros[disciplina].RegistroTempoOnline();
    }
}

export {RegistroTempoOnlineRepository} ;