import { Disciplina } from "./Disciplina";

class DisciplinaRepository {
    private disciplinas: {[key: string]: Disciplina}

    public constructor() {
        this.disciplinas = {};
    }

    public cadastraDisciplina(nome: string, quantasNotas?: number): boolean {
        if (this.disciplinas[nome] !== undefined) return false;
        this.disciplinas[nome] = new Disciplina(nome, quantasNotas||4); return true;
    }

    public cadastraHoraDisciplina(disciplina: string, horas: number): void {
        if (this.disciplinas[disciplina] === undefined) throw new Error('Disciplina não cadastrada');
        this.disciplinas[disciplina].cadastraHoras(horas);
    }

    public cadastraNotaDisciplina(disciplina: string, nota: number, qualNota: number):void {
        if (this.disciplinas[disciplina] === undefined) throw new Error('Disciplina não cadastrada');
        this.disciplinas[disciplina].cadastraNota(nota, qualNota);
    }

    public aprovadoDisciplina(disciplina: string): boolean {
        if (this.disciplinas[disciplina] === undefined) throw new Error('Disciplina não cadastrada');
        return this.disciplinas[disciplina].aprovado();
    }

    public PegarDisciplina(disciplina: string): {[key: string]: string|number|number[]} {
        if (this.disciplinas[disciplina] === undefined) throw new Error('Disciplina não cadastrada');
        return this.disciplinas[disciplina].disciplina();
    }
}

export {DisciplinaRepository};