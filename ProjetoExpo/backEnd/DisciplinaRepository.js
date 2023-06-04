"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisciplinaRepository = void 0;
var Disciplina_1 = require("./Disciplina");
var DisciplinaRepository = /** @class */ (function () {
    function DisciplinaRepository() {
        this.disciplinas = {};
    }
    DisciplinaRepository.prototype.cadastraDisciplina = function (nome, quantasNotas) {
        if (this.disciplinas[nome] !== undefined)
            return false;
        this.disciplinas[nome] = new Disciplina_1.Disciplina(nome, quantasNotas || 4);
        return true;
    };
    DisciplinaRepository.prototype.cadastraHoraDisciplina = function (disciplina, horas) {
        if (this.disciplinas[disciplina] === undefined)
            throw new Error('Disciplina não cadastrada');
        this.disciplinas[disciplina].cadastraHoras(horas);
    };
    DisciplinaRepository.prototype.cadastraNotaDisciplina = function (disciplina, nota, qualNota) {
        if (this.disciplinas[disciplina] === undefined)
            throw new Error('Disciplina não cadastrada');
        this.disciplinas[disciplina].cadastraNota(nota, qualNota);
    };
    DisciplinaRepository.prototype.aprovadoDisciplina = function (disciplina) {
        if (this.disciplinas[disciplina] === undefined)
            throw new Error('Disciplina não cadastrada');
        return this.disciplinas[disciplina].aprovado();
    };
    DisciplinaRepository.prototype.PegarDisciplina = function (disciplina) {
        if (this.disciplinas[disciplina] === undefined)
            throw new Error('Disciplina não cadastrada');
        return this.disciplinas[disciplina].disciplina();
    };
    return DisciplinaRepository;
}());
exports.DisciplinaRepository = DisciplinaRepository;
