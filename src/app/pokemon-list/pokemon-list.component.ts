import { Component } from '@angular/core';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { CommonModule } from '@angular/common';
import { PokemonService } from '../service/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.sass'
})
export class PokemonListComponent {
  pokemons = ['Bulbasaur', 'Ivysaur', 'Venosaur', 'Charmander'];
  constructor(private pokemonService: PokemonService) {}
}
