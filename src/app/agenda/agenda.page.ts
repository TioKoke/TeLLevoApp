import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.listar();
  }

  lista_conductores = new Array();



  listar() {
    var datos = localStorage.getItem("datos");
    datos = datos.replace("[", "");
    datos = datos.replace("]", "");
    datos = datos.split("},{").join("};{");
    var arreglo = datos.split(";");
    for (let index = 0; index < arreglo.length; index++) {
      var reg = JSON.parse(arreglo[index]);
      this.lista_conductores.push(reg);
    }
  }
}
