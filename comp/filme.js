"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
class Filme {
    constructor(nome, anoLancamento, atores, sinopse, genero, duração, metragem) {
        this.nome = nome;
        this.anoLancamento = anoLancamento;
        this.atores = atores;
        this.sinopse = sinopse;
        this.genero = genero;
        this.duração = duração;
        this.metragem = metragem;
    }
    filmelLog() {
        console.log(`Dados do filme
-------------------------------------------------------------------------------------------------
Nome: ${this.nome}
Atores: ${this.atores}
Lançamento: ${this.anoLancamento}
Sinopse: ${this.sinopse}
Genero: ${this.genero}
Duração: ${this.duração}
Metragem: ${this.metragem}
-------------------------------------------------------------------------------------------------
        `);
    }
}
exports.Filme = Filme;
