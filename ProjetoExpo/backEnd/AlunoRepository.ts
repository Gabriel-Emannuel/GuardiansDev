import {Aluno} from './Aluno'

class AlunoRepository {
    private alunos: {[key: number]: Aluno};
    private senhas: {[key: number]: string};
    private emails: {[key: number]: string};

    public constructor() {
        this.alunos = {};
        this.senhas = {};
        this.emails = {};
    }

    public Login(matricula: number, senha: string): Aluno {
        if (this.alunos[matricula] === undefined) throw new Error('Aluno não cadastrado');
        else if (this.senhas[matricula] !== senha) throw new Error('Senha Incorreta')
        return this.alunos[matricula];
    }

    public Cadastro(matricula: number, email: string, senha: string): Aluno {
        if (this.alunos[matricula] !== undefined) throw new Error('Aluno já cadastrado!');
        else if (this.emails[matricula] !== undefined) throw new Error('Email já em uso');
        else if (!email.includes('@')) throw new Error('Insira um email válido');
        else if (senha.length < 8) throw new Error('No mínimo 8 digitos para sua senha');
        this.alunos[matricula] = new Aluno(matricula, email);
        this.senhas[matricula] = senha;
        this.emails[matricula] = email;
        return this.alunos[matricula];
    }

    public NovaSenha(matricula: number,email: string,senha: string): Aluno {
        if (this.alunos[matricula] === undefined) throw new Error('Matricula não cadastrada')
        else if (!(this.emails[matricula] === email)) throw new Error('Email inválido!');
        else if (this.senhas[matricula] === senha) throw new Error('Senha já cadastrada!')
        this.senhas[matricula] = senha;
        return this.alunos[matricula];
    }
}

export {AlunoRepository} ;