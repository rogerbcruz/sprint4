import { PerfilLogin } from './perfilLogin';
import { Filme } from "./filme";

type genero = "Ação" | "Romance" | "Terror" | "Comédia" | "Documentário";

export class Favoritos extends Filme {

    constructor(public codFilme:number, nome: string, ano: number, atores: string, sinopse: string, genero: genero, duração: string, protected favoritos: Array<Filme>, public metragem: string) {
        super(codFilme,nome, ano, atores, sinopse, genero,duração, metragem)
    }
        
}