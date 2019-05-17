import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 5000
    })
  }

}
