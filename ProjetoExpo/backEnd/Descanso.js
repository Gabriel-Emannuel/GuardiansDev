"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descanso = void 0;
var Descanso = /** @class */ (function () {
    function Descanso() {
        this.horasDescansadas = 0;
        this.semanas = -1;
    }
    Descanso.prototype.defineHorasDescanso = function (valor) {
        this.horasDescansadas = valor;
    };
    Descanso.prototype.defineNumeroSemanas = function (valor) {
        this.semanas = valor;
    };
    Descanso.prototype.getStatusGeral = function () {
        return this.horasDescansadas / this.semanas >= 26 ? 'Descansado' : 'Cansado';
    };
    return Descanso;
}());
exports.Descanso = Descanso;
