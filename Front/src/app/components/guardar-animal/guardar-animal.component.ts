import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal/animal'
import { RestService } from '../../services/rest.service'
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-guardar-animal',
  templateUrl: './guardar-animal.component.html',
  styleUrls: ['./guardar-animal.component.scss']
})
export class GuardarAnimalComponent implements OnInit {

  animal: Animal;
  animales= [];
  constructor(public rest: RestService) { 
    this.rest.setAnimal(this.animal);
    this.animal = new Animal('','','','');
  }

  ngOnInit() {
  }
  onSubmit(){
    this.rest.setAnimal(this.animal).subscribe(res=>{
    
      console.log(res);
    });
   }

}
