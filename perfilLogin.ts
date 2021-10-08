import { Favorito } from './favoritos';
import { Filme } from './filme';

export class PerfilLogin {
    constructor(protected idPerfil: number, public nickname: string, protected favoritos: Array<Filme>) {
    }

    get getIdPerfil() {
        return this.idPerfil;
    }

    get getNome() {
        return this.nickname
    }

    set setNome(nome: string) {
        this.nickname = nome;
    }

    get getFavoritos() {
        return this.favoritos;;
    }

    listaFavoritos() {
        this.getFavoritos
    }

    addFimlme(filme: Filme) {
        this.favoritos.push(filme)
    }

    removeFilme(filme: Filme) {
        let index = this.favoritos.indexOf(filme)
        this.favoritos.splice(index,1);
    }

  

}

