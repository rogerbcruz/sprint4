import { CategoriaFilme } from "./categoriaFilme";

type genero = "Ação" | "Romance" | "Terror" | "Comédia" | "Documentário";

export class Filme implements CategoriaFilme {


    constructor(public nome: string, public anoLancamento: number, public atores: string, public sinopse: string, public genero: genero, public duração: string, public metragem:string) {}

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