import { CategoriaFilme } from "./categoriaFilme";

type genero = "Ação" | "Romance" | "Terror" | "Comédia" | "Documentário";

export class Filme implements CategoriaFilme {


    constructor(public codFilme:number, public nome: string, public anoLancamento: number, public atores: string, public sinopse: string, public genero: genero, public duração: string, public metragem:string) {}

    
}