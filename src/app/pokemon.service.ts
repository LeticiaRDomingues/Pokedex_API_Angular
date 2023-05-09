import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokedex } from './pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokedex>{
    return this.http.get<Pokedex>(`https://pokeapi.co/api/v2/pokemon/${id}`);

  }
}
