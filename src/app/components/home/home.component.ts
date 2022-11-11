import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está  em promoção`;
  idProduto: number = 3;
  precoProduto: number = 2.5123;
  promocao: boolean = true;
  foto:string = 'assets/img/crud.png';
  dataValidade='31/12/2022'

  constructor() {
    //this.anuncio = 'O ' + this.nomeProduto + 'está em promoção';
    console.log('Nome do produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('Id: ', this.idProduto);
    console.log('Preço : ', this.precoProduto);
    console.log('Promoção : ', this.promocao);
    var variavel1;
    let varave2;
    const variavel3 : number = 10;
    var idade = 15;
    console.log('Minha idade é: ', idade);
    let idadeLet = 20 ;
    console.log('Minha idade é: ', idadeLet);

    function imprimeIdade(){
      var idade = 20;
      console.log('sua idade é : ',idade);
    }
   /* function imprimeIdadeFor(){
      for (var idade = 30; idade<=40; idade++){
        console.log('idade dentro do for: ', idade);
      }
      console.log('idade fora do for: ', idade);
    }*/
     /*function imprimeIdadeFor(){
      for (let idade = 30; idade<=40; idade++){
        console.log('idade dentro do for: ', idade);
      }
      console.log('idade fora do for: ', idade);
  }*/

  var a = 10;
  let b = 20;
  function bar(){
   var a =30;
   let b = 40;
   if(true) {
    var a = 50;
    let b = 60
    console.log('variavel a dentro do if: ',a);
    console.log('variavel b dentro do if: ',b);

   }
   console.log('variavel a dentro do função: ',a);
   console.log('variavel b dentro do função: ',b);
   bar();
   console.log('variavel a fora do if: ',a);
   console.log('variavel b fora do if: ',b);
  }
imprimeIdade();
//imprimeIdadeFor();
  }
  ngOnInit(): void {}
}
