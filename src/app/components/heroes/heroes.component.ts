import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesServices, Heroe } from '../../services/heroes.services';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesServices, private router:Router) { 


  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHores();
    console.log(this.heroes)
  }

  viewHero(index){
    this.router.navigate(['/heroe', index])
  }

}
