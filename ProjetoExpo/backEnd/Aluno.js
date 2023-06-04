"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Descanso_1 = require("./Descanso");
var DisciplinaRepository_1 = require("./DisciplinaRepository");
var RegistroTempoOnlineRepository_1 = require("./RegistroTempoOnlineRepository");
var RegistroResumos_1 = require("./RegistroResumos");
var Aluno = /** @class */ (function () {
    function Aluno(matricula, email) {
        this.matricula = matricula;
        this.rotinaDescanso = new Descanso_1.Descanso();
        this.tempoOnline = new RegistroTempoOnlineRepository_1.RegistroTempoOnlineRepository();
        this.disciplinas = new DisciplinaRepository_1.DisciplinaRepository();
        this.registroResumos = new RegistroResumos_1.RegistroResumos();
    }
    Aluno.prototype.defineHorasDescanso = function (valor) {
        this.rotinaDescanso.defineHorasDescanso(valor);
    };
    Aluno.prototype.defineSemanasDescanso = function (valor) {
        this.rotinaDescanso.defineNumeroSemanas(valor);
    };
    Aluno.prototype.getStatusGeralDescanso = function () {
        return this.rotinaDescanso.getStatusGeral();
    };
    Aluno.prototype.cadastraTempoOnline = function (disciplina, tempoOnlineEsperado) {
        return this.tempoOnline.cadastraTempoOnline(disciplina, tempoOnlineEsperado);
    };
    Aluno.prototype.adicionaTempoOnline = function (disciplina, tempo) {
        this.tempoOnline.adicionaTempoOnline(disciplina, tempo);
    };
    Aluno.prototype.atingiuMetaTempoOline = function (disciplina) {
        return this.tempoOnline.atingiuMetaTempoOnline(disciplina);
    };
    Aluno.prototype.pegarRegistroTempoOnline = function (disciplina) {
        return this.tempoOnline.pegarRegistroTempoOnline(disciplina);
    };
    Aluno.prototype.cadastraDisciplina = function (disciplina, quantasNotas) {
        return this.disciplinas.cadastraDisciplina(disciplina, quantasNotas);
    };
    Aluno.prototype.cadastraHorasDisciplina = function (disciplina, horas) {
        this.disciplinas.cadastraHoraDisciplina(disciplina, horas);
    };
    Aluno.prototype.cadastraNotaDisciplina = function (disciplina, nota, qualNota) {
        this.disciplinas.cadastraNotaDisciplina(disciplina, nota, qualNota);
    };
    Aluno.prototype.aprovadoDisciplina = function (disciplina) {
        return this.disciplinas.aprovadoDisciplina(disciplina);
    };
    Aluno.prototype.pegarDisciplina = function (disciplina) {
        return this.disciplinas.PegarDisciplina(disciplina);
    };
    Aluno.prototype.adicionarResumo = function (tema, resumo) {
        this.registroResumos.adicionaTema(tema, resumo);
    };
    Aluno.prototype.pegaResumos = function () {
        return this.registroResumos.pegaResumos();
    };
    Aluno.prototype.contaResumos = function () {
        return this.registroResumos.conta();
    };
    Aluno.prototype.temResumo = function (tema) {
        return this.registroResumos.temResumo(tema);
    };
    Aluno.prototype.buscaResumo = function (chaveDeBusca) {
        return this.registroResumos.busca(chaveDeBusca);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
