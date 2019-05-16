import { Component, OnInit } from '@angular/core';
import { Encargado } from 'src/app/models/encargado/encargado'
import { RestService } from '../../services/rest.service'

@Component({
  selector: 'app-guardar-encargado',
  templateUrl: './guardar-encargado.component.html',
  styleUrls: ['./guardar-encargado.component.scss']
})
export class GuardarEncargadoComponent implements OnInit {

  encargado: Encargado;
  encargados= [];
  animales = [0];
  constructor(public rest: RestService) { 
    this.rest.setEncargado(this.encargado);
    this.encargado = new Encargado('','','',['']);
  }

  ngOnInit() {
    this.getAnimal();
  }

  

   getAnimal(){
     this.rest.getAnimal().subscribe(res =>{
       console.log(res);
       this.animales = res.animales
     })
   }

  onSubmit(){
    this.rest.setEncargado(this.encargado).subscribe(res=>{
    
      console.log(res);
    });
   }

}
