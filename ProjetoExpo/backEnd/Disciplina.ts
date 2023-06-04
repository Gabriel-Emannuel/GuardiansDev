class Disciplina {
    private nomeDisciplina: string;
    private horas: number;
    private notas: number[];

    constructor(nome: string, quantasNotas: number) {
        this.nomeDisciplina = nome;
        this.notas = new Array(quantasNotas);
        this.horas = 0;
    }

    public cadastraHoras(horas: number) {
        this.horas += horas;
    }

    public cadastraNota(nota: number, qualNota: number): void {
        this.notas[qualNota] = nota;
    }

    public aprovado(): boolean {
        let soma:number = 0;
        this.notas.forEach(nota => soma += nota)
        return (soma/this.notas.length) >= 7;
    }

    public disciplina(): {[key: string]: string|number|number[]} {
        return {
            nome: this.nomeDisciplina,
            horas: this.horas,
            notas: this.notas
        }
    } 
}

export {Disciplina} ;