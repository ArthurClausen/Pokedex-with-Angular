import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: any[] = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async  carregarPokemons() {
    const requisicao = await lastValueFrom(
      this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
    );

    this.pokemons = requisicao.results;
  }
}