import { Component, Input } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.sass'
})
export class PokemonCardComponent {
  @Input()
  pokemon: string;

  @Input()
  numero: number;

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}
