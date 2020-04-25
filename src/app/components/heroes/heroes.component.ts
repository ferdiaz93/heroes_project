import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.services';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesServices) { 


  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHores();
    console.log(this.heroes)
  }

}
