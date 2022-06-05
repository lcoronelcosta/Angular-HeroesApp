import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private endPoint: string = environment.api;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.endPoint }/heroes`);
  }

  getHeroe(id:string): Observable<Heroe>{
    return this.http.get<Heroe>(`${ this.endPoint }/heroes/${id}`);
  }

  getSugerencias( termino: string ): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.endPoint }/heroes?q=${ termino }&_limit=5`);
  }
}
