"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfilLogin = void 0;
class PerfilLogin {
    constructor(idPerfil, nickname, favoritos) {
        this.idPerfil = idPerfil;
        this.nickname = nickname;
        this.favoritos = favoritos;
    }
    get getIdPerfil() {
        return this.idPerfil;
    }
    get getNome() {
        return this.nickname;
    }
    set setNome(nome) {
        this.nickname = nome;
    }
    get getFavoritos() {
        return this.favoritos;
        ;
    }
    listaFavoritos() {
        this.getFavoritos;
    }
    addFimlme(filme) {
        this.favoritos.push(filme);
    }
    removeFilme(filme, favoritos) {
        let index = favoritos.indexOf(filme);
        favoritos.splice(index);
    }
}
exports.PerfilLogin = PerfilLogin;
