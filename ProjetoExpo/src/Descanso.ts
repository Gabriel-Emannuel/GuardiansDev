class Descanso {
    private horasDescansadas: number;
    private semanas: number;

    constructor() {
        this.horasDescansadas = 0;
        this.semanas = -1;
    }

    public defineHorasDescanso(valor: number): void {
        this.horasDescansadas = valor;
    }

    public defineNumeroSemanas(valor: number): void {
        this.semanas = valor;
    }

    public getStatusGeral(): string {
        return this.horasDescansadas / this.semanas >= 26 ? 'Descansado' : 'Cansado';
    }
}