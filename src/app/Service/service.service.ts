import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libros } from 'src/app/Modelo/Libros';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getLibros()
  {
    return this.http.get<Libros[]>(this.baseApiUrl+'/api/Libros');
  }

  createLibros(libros:Libros)
  {
     return this.http.post<Libros>(this.baseApiUrl+'/api/Libros',libros);
  }
 
  getPersonaId(id:number) {
    return this.http.get<Libros>(this.baseApiUrl+"/"+id);
  }
  updatePersona(libros:Libros) {
    return this.http.put<Libros>(this.baseApiUrl+"/"+libros.id,libros);
  }
  DeletePersonaId(id:number) {
    return this.http.delete<Libros>(this.baseApiUrl+"/"+id);
  }
}
