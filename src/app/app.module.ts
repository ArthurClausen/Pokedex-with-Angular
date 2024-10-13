import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PokemonService } from "./service/pokemon.service";


@NgModule({
    declarations: [AppComponent, PokemonListComponent, PokemonCardComponent],
    imports: [BrowserModule, CommonModule, HttpClientModule],
    providers:[PokemonService],
    bootstrap: [AppComponent],
})

export class AppModule { }