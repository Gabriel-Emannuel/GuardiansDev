"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroTempoOnlineRepository = void 0;
var RegistroTempoOnline_1 = require("./RegistroTempoOnline");
var RegistroTempoOnlineRepository = /** @class */ (function () {
    function RegistroTempoOnlineRepository() {
        this.registros = {};
    }
    RegistroTempoOnlineRepository.prototype.cadastraTempoOnline = function (disciplina, tempoOnlineEsperado) {
        if (this.registros[disciplina] !== undefined)
            return false;
        this.registros[disciplina] = new RegistroTempoOnline_1.RegistroTempoOnline(disciplina, tempoOnlineEsperado);
        return true;
    };
    RegistroTempoOnlineRepository.prototype.adicionaTempoOnline = function (disciplina, tempo) {
        if (this.registros[disciplina] === undefined)
            throw new Error('Disciplina não cadastrada');
        this.registros[disciplina].adicionaTempoOnline(tempo);
    };
    RegistroTempoOnlineRepository.prototype.atingiuMetaTempoOnline = function (disciplina) {
        if (this.registros[disciplina] === undefined)
            throw new Error('Disciplina não cadastrada');
        return this.registros[disciplina].atingiuMeta();
    };
    RegistroTempoOnlineRepository.prototype.pegarRegistroTempoOnline = function (disciplina) {
        if (this.registros[disciplina] === undefined)
            throw new Error('Disciplina não cadastrada');
        return this.registros[disciplina].RegistroTempoOnline();
    };
    return RegistroTempoOnlineRepository;
}());
exports.RegistroTempoOnlineRepository = RegistroTempoOnlineRepository;
