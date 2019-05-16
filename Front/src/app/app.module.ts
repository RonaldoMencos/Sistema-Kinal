import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './components/animal/animal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { GuardarAnimalComponent } from './components/guardar-animal/guardar-animal.component';
import { BuscarAnimalComponent } from './components/buscar-animal/buscar-animal.component';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { GuardarEncargadoComponent } from './components/guardar-encargado/guardar-encargado.component';
import { BuscarEncargadoComponent } from './components/buscar-encargado/buscar-encargado.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    InicioComponent,
    GuardarAnimalComponent,
    BuscarAnimalComponent,
    EncargadoComponent,
    GuardarEncargadoComponent,
    BuscarEncargadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
