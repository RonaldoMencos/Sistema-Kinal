import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})

export class RestService {
  public endpoint = 'http://localhost:3968/v1'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
mensaje = 'Guardar person ejecutado';

  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  getAnimal(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-animales',this.httpOptions).pipe(map(this.extractData));

  }

  setAnimal(guardar_animal) {
    console.log(this.mensaje)
    var params = JSON.stringify(guardar_animal);
    return this.http.post(this.endpoint + '/guardar-animal', params, this.httpOptions).pipe(map(this.extractData));
  }

  setEncargado(guardar_encargado) {
    console.log(this.mensaje)
    var params = JSON.stringify(guardar_encargado);
    return this.http.post(this.endpoint + '/guardar-encargado', params, this.httpOptions).pipe(map(this.extractData));
  }

  getEncargado(): Observable<any>{
    return this.http.get(this.endpoint + '/mostrar-encargado',this.httpOptions).pipe(map(this.extractData));

  }

  listarAnimal(search): Observable<any>{
    return this.http.post(this.endpoint + '/buscar-encargado', {search}, this.httpOptions).pipe(map(this.extractData));
  }

  searchAnimal(search):Observable<any>{
    return this.http.post(this.endpoint + '/buscar-animales', {search}, this.httpOptions).pipe(map(this.extractData));
  }

  
}
