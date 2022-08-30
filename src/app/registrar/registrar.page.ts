import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  // crear las variables que permitan recuperar
  // los datos del HTML (vinculacion)
  nombre: String;
  matricula: String;
  modelo: number;

  constructor() { }

  // metodo de inicio de la pagina
  ngOnInit() {
  }


  // creacion de un arreglo con la lista de conductores
  lista_conductores = new Array();

  grabar(){
    var existe = localStorage.getItem("datos");
    if (existe!=null) {
      this.lista_conductores=JSON.parse(existe);
    }
    // objeto de tipo JSON
    var reg= {
      nombre: this.nombre,
      matricula: this.matricula,
      modelo: this.modelo
    };
    // agregar un reg al arreglo
    this.lista_conductores.push(reg);
    console.log(this.lista_conductores);
    localStorage.setItem("datos", JSON.stringify(this.lista_conductores));

  }

}
