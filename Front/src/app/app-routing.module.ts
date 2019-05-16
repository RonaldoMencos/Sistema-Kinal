import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GuardarAnimalComponent } from './components/guardar-animal/guardar-animal.component';
import { BuscarAnimalComponent } from './components/buscar-animal/buscar-animal.component';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { GuardarEncargadoComponent } from './components/guardar-encargado/guardar-encargado.component';
import { BuscarEncargadoComponent } from './components/buscar-encargado/buscar-encargado.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'animal', component: AnimalComponent},
  {path: 'guardar-animal', component: GuardarAnimalComponent},
  {path: 'buscar-animal', component: BuscarAnimalComponent},
  {path: 'encargado', component: EncargadoComponent},
  {path: 'guardar-encargado', component: GuardarEncargadoComponent},
  {path: 'buscar-encargado', component: BuscarEncargadoComponent},


  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
