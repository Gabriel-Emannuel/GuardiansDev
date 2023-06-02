class Descanso {
    private horasDescansadas: number;
    private semanas: number;
    private descansado: boolean;
    private emogi: String;

    constructor() {
        this.descansado = false;
        this.horasDescansadas = 0;
        this.semanas = -1;
        this.emogi = "";
    }

    public defineHorasDescanso(valor: number): void {
        this.horasDescansadas = valor;
    }
}