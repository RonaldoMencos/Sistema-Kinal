import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';


@Component({
  selector: 'app-buscar-encargado',
  templateUrl: './buscar-encargado.component.html',
  styleUrls: ['./buscar-encargado.component.scss']
})
export class BuscarEncargadoComponent implements OnInit {

  search: string;
  results = [];
  animales= [];

  constructor(public rest: RestService) { 
   
  }

  ngOnInit() {
    this.onSubmit();
    console.log(this.onSubmit());
  }


  onSubmit(){
    this.rest.listarAnimal(this.search).subscribe((res) => {
      if(!res){
          console.log();
      }else{
      //this.results = res.results;
     //  this.animales = res.animales;
       console.log(this.results);
        console.log(this.animales);
      }
    }); 
  }

}
