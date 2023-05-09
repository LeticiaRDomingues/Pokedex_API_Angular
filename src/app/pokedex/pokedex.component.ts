
import { PokemonService } from './../pokemon.service';
import { Component } from '@angular/core';
import { Pokedex } from '../pokedex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  pokemon: Pokedex = {} as Pokedex;
  Id: number = 1;
  MAX: number = 1010;

  constructor(private pokemonService : PokemonService){ }

  ngOnInit():void{
    this.loadPokedex();
  }

  loadPokedex(): void{
    this.pokemonService.getPokemon(this.Id).subscribe(
      {
        next : pokemon => this.pokemon = pokemon

      }
    );
  }

  getImgPokemon(){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.Id}.png`;
  }

  abilitiesPokemon(){
    return this.pokemon.abilities.map(a => a.ability.name).join(' | ');
  }

  ProximoPokemon(){
    if (this.Id < this.MAX){
      this.Id++;
    }
    else{
      this.Id = 1;
    }
    this.loadPokedex();
  }


  AnteriorPokemon(){
    if (this.Id > 1){
      this.Id--;
    }
    else{
      this.Id = this.MAX;
    }
    this.loadPokedex();
  }


}
