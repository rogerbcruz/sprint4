"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
class Login {
    constructor(idlogin, nome, email, senha, cpf, perfis) {
        this.idlogin = idlogin;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.perfis = perfis;
    }
    get getIdlogin() {
        return this.idlogin;
    }
    get getEmail() {
        return this.email;
    }
    get getNome() {
        return this.nome;
    }
    set setEmail(email) {
        this.email = email;
    }
    set setSenha(senha) {
        this.senha = senha;
    }
    get getCpf() {
        return this.cpf;
    }
    get getPerfis() {
        return this.perfis.forEach(f => console.log(f));
    }
    addPerfil(perfil) {
        this.perfis.push(perfil);
    }
    delPerfil(perfil) {
        if (this.idlogin == perfil.getIdPerfil) {
            this.perfis.splice(perfil.getIdPerfil);
        }
        else {
            console.log("Perfil não encontrado");
        }
    }
    entrar(email, senha) {
        if (this.email === email && this.senha === senha) {
            console.log(`Bem vindo ao netflix ${this.getNome}`);
        }
        else {
            console.log("Usuario ou senha incorreto. Verifique os dados e tente novamente!");
        }
    }
}
exports.Login = Login;
