import { Component, OnInit } from '@angular/core';
import { Encargado } from 'src/app/models/encargado/encargado'
import { RestService } from '../../services/rest.service'
declare const $:any;

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.scss']
})
export class EncargadoComponent implements OnInit {

  encargado: Encargado;
  encargados= [];
  animal: string;
  animales = [];
  constructor(public rest: RestService) { 
    this.rest.setAnimal(this.encargado);
    this.encargado = new Encargado('','','',['']);
  }

  ngOnInit() {
    this.getEncargado();

   }

  

   getEncargado(){
     this.rest.getEncargado().subscribe(res =>{
       console.log(res);
       this.encargados = res.encargados
       $(document).ready( function () {
        $('#hola').DataTable();
      } );

     })
   }



  getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  }

}


