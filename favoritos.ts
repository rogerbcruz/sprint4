import { PerfilLogin } from './perfilLogin';
import { Filme } from "./filme";

type genero = "Ação" | "Romance" | "Terror" | "Comédia" | "Documentário";

export class Favoritos extends Filme {

    constructor(nome: string, ano: number, atores: string, sinopse: string, genero: genero, duração: string, protected favoritos: Array<Filme>, public metragem: string) {
        super(nome, ano, atores, sinopse, genero,duração, metragem)
    }
        listaFavoritos(){
            console.log(`${this.favoritos.forEach(p => p.filmelLog())}}`);           
        
    }
}