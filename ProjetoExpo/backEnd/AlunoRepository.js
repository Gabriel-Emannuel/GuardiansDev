"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoRepository = void 0;
var Aluno_1 = require("./Aluno");
var AlunoRepository = /** @class */ (function () {
    function AlunoRepository() {
        this.alunos = {};
        this.senhas = {};
        this.emails = {};
    }
    AlunoRepository.prototype.Login = function (matricula, senha) {
        if (this.alunos[matricula] === undefined)
            throw new Error('Aluno não cadastrado');
        else if (this.senhas[matricula] !== senha)
            throw new Error('Senha Incorreta');
        return this.alunos[matricula];
    };
    AlunoRepository.prototype.Cadastro = function (matricula, email, senha) {
        if (this.alunos[matricula] !== undefined)
            throw new Error('Aluno já cadastrado!');
        else if (this.emails[matricula] !== undefined)
            throw new Error('Email já em uso');
        else if (!email.includes('@'))
            throw new Error('Insira um email válido');
        else if (senha.length < 8)
            throw new Error('No mínimo 8 digitos para sua senha');
        this.alunos[matricula] = new Aluno_1.Aluno(matricula, email);
        this.senhas[matricula] = senha;
        this.emails[matricula] = email;
        return this.alunos[matricula];
    };
    AlunoRepository.prototype.NovaSenha = function (matricula, email, senha) {
        if (this.alunos[matricula] === undefined)
            throw new Error('Matricula não cadastrada');
        else if (!(this.emails[matricula] === email))
            throw new Error('Email inválido!');
        else if (this.senhas[matricula] === senha)
            throw new Error('Senha já cadastrada!');
        this.senhas[matricula] = senha;
        return this.alunos[matricula];
    };
    return AlunoRepository;
}());
exports.AlunoRepository = AlunoRepository;
