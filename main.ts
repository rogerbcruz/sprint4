import { PerfilLogin } from './perfilLogin';
import { Filme } from "./filme";
import { Login } from "./login";


let filme1 = new Filme("Como se fosse a primeira vez", 2004, "Drew Barymore, Adam Sandler, Rob Schneider", "Henry Roth é um veterinário paquerador, que vive no Havaí, e famoso pelo grande número de turistas que conquista. Seu novo alvo é Lucy Whitmore, que mora no local e por quem Henry se apaixona perdidamente. Mas Lucy sofre de falta de memória de curto prazo e, por isso, ela rapidamente se esquece de fatos que acabaram de acontecer. Assim, Henry é obrigado a conquistá-la, dia após dia, para ficar ao seu lado.", "Comédia", "1h39m" , "Metragem")

let filme2 = new Filme("Gladiado", 2000, "Russel Crowe, Joaquim Phenix, Connie Nielsen, Djimon Hounsou", "Maximus é um poderoso general romano, amado pelo povo e pelo imperador Marcus Aurelius. Antes de sua morte, o Imperador desperta a ira de seu filho Commodus ao tornar pública a sua predileção em deixar o trono para Maximus. Sedento pelo poder, Commodus mata seu pai, assume a coroa e ordena a morte de Maximus, que consegue fugir antes de ser pego, e passa a se esconder como um escravo e gladiador enquanto vai atrás de vingança.", "Ação", "2h35m", "Longa Metragem")


let usu1 = new Login(1,"Roger Cruz","rogerbelascruz@gmail.com","1234","12345678900",[])

usu1.entrar("rogerbelascruz@gmail.com","123")

usu1.entrar("rogerbelascruz@gmail.com","1234")

let perfil2 = new PerfilLogin(2,"BahGrace", []);

let perfil1 = new PerfilLogin(1,"Roger", []);

usu1.addPerfil(perfil1)

usu1.addPerfil(perfil2)

perfil1.addFimlme(filme1)

perfil1.addFimlme(filme2)

perfil2.addFimlme(filme2)

console.log(usu1.getPerfis)


