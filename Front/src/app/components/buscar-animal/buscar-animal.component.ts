import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-buscar-animal',
  templateUrl: './buscar-animal.component.html',
  styleUrls: ['./buscar-animal.component.scss']
})
export class BuscarAnimalComponent implements OnInit {

  search: string;
  animales =[];

  constructor(public rest: RestService) { 
   
  }

  ngOnInit() {
    this.onSubmit();
    console.log(this.onSubmit());
  }


  onSubmit(){
    this.rest.searchAnimal(this.search).subscribe((res) => {
      if(!res){
          console.log();
      }else{
       this.animales = res.animales;
        console.log(this.animales)
  
      } 
    });
  }

}
