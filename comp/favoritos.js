"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favoritos = void 0;
const filme_1 = require("./filme");
class Favoritos extends filme_1.Filme {
    constructor(nome, ano, atores, sinopse, genero, duração, favoritos, metragem) {
        super(nome, ano, atores, sinopse, genero, duração, metragem);
        this.favoritos = favoritos;
        this.metragem = metragem;
    }
    listaFavoritos() {
        console.log(`${this.favoritos.forEach(p => p.filmelLog())}}`);
    }
}
exports.Favoritos = Favoritos;
