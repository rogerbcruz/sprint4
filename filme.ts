import { CategoriaFilme } from "./categoriaFilme";

type genero = "Ação" | "Romance" | "Terror" | "Comédia" | "Documentário";

export class Filme implements CategoriaFilme {


    constructor(private codFilme:number, private nome: string, private anoLancamento: number, private atores: string, private sinopse: string, public genero: genero, public duração: string, public metragem:string) {}
    

    get getCodfilme(){
        return this.codFilme
    }
    
    get getNome(){
        return this.nome
    }
    
    get getAno(){
        return this.anoLancamento
    }
    
    get getAtores(){
        return this.atores
    }
    
    get getSinopse(){
        return this.sinopse
    }
    
    get getGenero(){
        return this.genero
    }

    get getDuracao(){
        return this.duração
    }

    get getMetragem(){
        return this.metragem
    }
}