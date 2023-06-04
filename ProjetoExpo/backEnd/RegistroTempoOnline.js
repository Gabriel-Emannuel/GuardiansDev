"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroTempoOnline = void 0;
var RegistroTempoOnline = /** @class */ (function () {
    function RegistroTempoOnline(disciplina, tempo) {
        this.nomeDisciplina = disciplina;
        this.tempoOnlineEsperado = tempo || 120;
        this.tempoOnline = 0;
    }
    RegistroTempoOnline.prototype.adicionaTempoOnline = function (tempo) {
        this.tempoOnline += tempo;
    };
    RegistroTempoOnline.prototype.atingiuMeta = function () {
        return this.tempoOnline > this.tempoOnlineEsperado;
    };
    RegistroTempoOnline.prototype.RegistroTempoOnline = function () {
        return {
            nomeDisciplina: this.nomeDisciplina,
            tempoOnlineEsperado: this.tempoOnlineEsperado,
            tempoOnline: this.tempoOnline
        };
    };
    return RegistroTempoOnline;
}());
exports.RegistroTempoOnline = RegistroTempoOnline;
