import { PerfilLogin } from "./perfilLogin";

export class Login {

    constructor(readonly idlogin: number, protected nome:string, protected email: string, protected senha: string, protected cpf: string, protected perfis: Array<PerfilLogin>) { }

    get getIdlogin() {
        return this.idlogin;
    }
    
    get getNome(){
        return this.nome;
    }
    
        get getEmail() {
            return this.email
        }

    set setEmail(email: string) {
        this.email = email;
    }

    set setSenha(senha: string) {
        this.senha = senha;
    }

    get getCpf() {
        return this.cpf;
    }

    get getPerfis() {
        return this.perfis.forEach(f => console.log(f));
    }

    addPerfil(perfil: PerfilLogin) {
        this.perfis.push(perfil);
    }

    delPerfil(perfil: PerfilLogin) {
        if (this.idlogin == perfil.getIdPerfil) {
            this.perfis.splice(perfil.getIdPerfil)
        }
        else {
            console.log("Perfil não encontrado");

        }
    }

    entrar(email:string, senha:string) {
        if(this.email === email && this.senha === senha){
            console.log(`Bem vindo ao netflix ${this.getNome}`);
            
        }
        else{
            console.log("Usuario ou senha incorreto. Verifique os dados e tente novamente!");
            
        }

    }


}