"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroResumos = void 0;
var RegistroResumos = /** @class */ (function () {
    function RegistroResumos() {
        this.resumos = {};
    }
    RegistroResumos.prototype.adicionaTema = function (tema, resumo) {
        if (this.resumos[tema] !== undefined)
            throw new Error('Tema já cadastrado');
        this.resumos[tema] = resumo;
    };
    RegistroResumos.prototype.deletaTema = function (tema) {
        if (this.resumos[tema] === undefined)
            throw new Error('Tema não cadastrado');
        delete this.resumos[tema];
    };
    RegistroResumos.prototype.pegaResumos = function () {
        return this.resumos;
    };
    RegistroResumos.prototype.conta = function () {
        return Object.keys(this.resumos).length;
    };
    RegistroResumos.prototype.temResumo = function (tema) {
        return this.resumos[tema] !== undefined;
    };
    RegistroResumos.prototype.busca = function (chaveDeBusca) {
        var retorno = {};
        var temas = Object.keys(this.resumos);
        var resumos = Object.values(this.resumos);
        resumos.forEach(function (resumo, indice) { return resumo.includes(chaveDeBusca) ? retorno[temas[indice]] = resumo : false; });
        return retorno;
    };
    return RegistroResumos;
}());
exports.RegistroResumos = RegistroResumos;
