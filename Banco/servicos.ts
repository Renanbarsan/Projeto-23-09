import { Banco } from "./banco";

export class Servicos extends Banco{
    rendaMensal: number;
    idade: number

    constructor(
        rendaMensal: number,
        nome: string,
        cpf: string,
        rg: string,
        saldo: number
       
    ){
       super(nome, cpf, rg, saldo);
        this.rendaMensal = rendaMensal ;
        this.idade = rendaMensal;
    }
    oferecerCartao(){
        if(this.rendaMensal >= 1500 && this.rendaMensal<= 2499){
            console.log(`Oferecer cartão nacional.`);
        }else if(this.rendaMensal >= 2500 && this.rendaMensal<=4999){
            console.log(`Oferecer cartão Gold Internacional.`);
        }else if(this.rendaMensal>= 5000){
            console.log(`Oferecer cartão Black Internacional.`);
        }
    }
    oferecerSeguro(){
        if(this.idade > 0 && this.idade >= 65){
            console.log(`Oferecer seguro de vida para o cliente.`);
        }else{
            console.log(`Ofercer seguro residencial para o cliente.`);
    
        }
    }
        oferecerOdonto(){
        if(this.idade > 0 && this.idade >=15 ){
            console.log(`Oferecer plano Odontoógico Start.`);
        }else if(this.idade >= 16 && this.idade >=64 ){
            console.log(`Ofercer plano Odontológico Plus.`);
            
         }else if(this.idade >65 && this.idade >=100 ){
         console.log(`Ofercer plano Odontológico Sênior.`);
         }
        }
}