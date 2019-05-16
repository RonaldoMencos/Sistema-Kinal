import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal/animal'
import { RestService } from '../../services/rest.service'
declare var $ : any;

@Component({
  selector: 'app-person',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  animal: Animal;
  animales= [];
  constructor(public rest: RestService) { 
    this.rest.setAnimal(this.animal);
    this.animal = new Animal('','','','');
  }

  ngOnInit() {
    this.getAnimal();
    
 
    
  }

  

   getAnimal(){
     this.rest.getAnimal().subscribe(res =>{
       console.log(res);
       this.animales = res.animales;
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
