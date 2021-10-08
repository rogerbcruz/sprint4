type genero = "Ação" | "Romance" | "Terror" | "Comédia" | "Documentário";

export interface CategoriaFilme {
    genero: genero;
    duração:string;
    metragem:string;
    
}