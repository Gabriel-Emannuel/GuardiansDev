import { Descanso } from "./Descanso";
import { DisciplinaRepository } from "./DisciplinaRepository";
import { RegistroTempoOnlineRepository } from "./RegistroTempoOnlineRepository";
import { RegistroResumos } from "./RegistroResumos";

class Aluno {
    private matricula: number;
    private rotinaDescanso: Descanso;
    private tempoOnline: RegistroTempoOnlineRepository;
    private disciplinas: DisciplinaRepository;
    private registroResumos: RegistroResumos;

    public constructor(matricula: number, email: string) {
        this.matricula = matricula;
        this.rotinaDescanso = new Descanso();
        this.tempoOnline = new RegistroTempoOnlineRepository();
        this.disciplinas = new DisciplinaRepository();
        this.registroResumos = new RegistroResumos();
    }

    public defineHorasDescanso(valor: number):void {
        this.rotinaDescanso.defineHorasDescanso(valor);
    }

    public defineSemanasDescanso(valor: number): void {
        this.rotinaDescanso.defineNumeroSemanas(valor);
    }

    public getStatusGeralDescanso(): string {
        return this.rotinaDescanso.getStatusGeral();
    }
 
    public cadastraTempoOnline(disciplina: string, tempoOnlineEsperado?): boolean {
        return this.tempoOnline.cadastraTempoOnline(disciplina, tempoOnlineEsperado);
    }

    public adicionaTempoOnline(disciplina: string, tempo: number):void {
        this.tempoOnline.adicionaTempoOnline(disciplina,tempo);
    }

    public atingiuMetaTempoOline(disciplina: string): boolean {
        return this.tempoOnline.atingiuMetaTempoOnline(disciplina);
    }

    public pegarRegistroTempoOnline(disciplina: string): {[key: string]: string|number} {
        return this.tempoOnline.pegarRegistroTempoOnline(disciplina);
    }

    public cadastraDisciplina(disciplina: string, quantasNotas?: number): boolean{
        return this.disciplinas.cadastraDisciplina(disciplina, quantasNotas);
    }

    public cadastraHorasDisciplina(disciplina: string, horas: number): void {
        this.disciplinas.cadastraHoraDisciplina(disciplina, horas);
    }

    public cadastraNotaDisciplina(disciplina: string, nota: number, qualNota: number): void {
        this.disciplinas.cadastraNotaDisciplina(disciplina, nota, qualNota);
    }

    public aprovadoDisciplina(disciplina: string): boolean {
        return this.disciplinas.aprovadoDisciplina(disciplina);
    } 

    public pegarDisciplina(disciplina: string): {[key: string]: string|number|number[]} {
        return this.disciplinas.PegarDisciplina(disciplina);
    }

    public adicionarResumo(tema: string, resumo: string): void {
        this.registroResumos.adicionaTema(tema, resumo);
    }

    public pegaResumos(): {[key: string]: string} {
        return this.registroResumos.pegaResumos();
    }

    public contaResumos(): number {
        return this.registroResumos.conta();
    }

    public temResumo(tema: string): boolean {
        return this.registroResumos.temResumo(tema);
    }

    public buscaResumo(chaveDeBusca: string): {[key: string]: string} {
        return this.registroResumos.busca(chaveDeBusca);
    }

}

export {Aluno} ;