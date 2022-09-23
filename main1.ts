import { Pessoa1 } from "./Banco/pessoa1";
import { Pessoa2 } from "./Banco/pessoa2";
import { Servicos } from "./Banco/servicos";

let pessoaUm = new Pessoa1 ("12312312", "1234", 9, "013", "Antônio", "123.123.123-12", "12.123.123-0", 100, 500)
let pessoaDois = new Pessoa2 ("32132132", "4321", 8, "013", "Jorge", "321.321.321-32", "32.321.321-0", 400, 100)
let servicosUm = new Servicos (5000, "Antônio", "3253643", "231412", 5000)

pessoaUm.verDados ();
console.log ("\n")
pessoaDois.verDados ();
console.log ("\n")
pessoaUm.verSaldo();
pessoaUm.valorTransferir();
let resultado = (saldo: number, quantidadeTransferir: number) => saldo - quantidadeTransferir
console.log("O seu saldo ATUAL agora é de R$ " + resultado(500,100))
console.log ("\n")
let extrato = ["TRANFÊRENCIA PIX DE ANTÔNIO PARA JORGE NO VALOR DE R$ 100,00 REALIZADA COM SUCESSO!"]
console.log(extrato[0])
console.log ("\n")
console.log ("VOCÊ RECEBEU UM PIX!")
pessoaDois.verSaldo();
pessoaDois.reeceber();
let resultado2 = (saldo2: number, quantidadeTransferir: number) => saldo2 + quantidadeTransferir
console.log("Agora seu Saldo Atual é de: " + resultado2(400,100))
console.log ("\n")
servicosUm.oferecerCartao ();
servicosUm.oferecerSeguro ();
servicosUm.oferecerOdonto ();