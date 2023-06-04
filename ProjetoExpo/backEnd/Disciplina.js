"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
var Disciplina = /** @class */ (function () {
    function Disciplina(nome, quantasNotas) {
        this.nomeDisciplina = nome;
        this.notas = new Array(quantasNotas);
        this.horas = 0;
    }
    Disciplina.prototype.cadastraHoras = function (horas) {
        this.horas += horas;
    };
    Disciplina.prototype.cadastraNota = function (nota, qualNota) {
        this.notas[qualNota] = nota;
    };
    Disciplina.prototype.aprovado = function () {
        var soma = 0;
        this.notas.forEach(function (nota) { return soma += nota; });
        return (soma / this.notas.length) >= 7;
    };
    Disciplina.prototype.disciplina = function () {
        return {
            nome: this.nomeDisciplina,
            horas: this.horas,
            notas: this.notas
        };
    };
    return Disciplina;
}());
exports.Disciplina = Disciplina;
