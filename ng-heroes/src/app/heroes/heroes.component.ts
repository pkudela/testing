import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // array with type "Hero[]"
  heroes: Hero[];
  
  // property with type "Hero" from hero.ts
  //selectedHero: Hero;
  

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  
  // function to choose selected item
  /*onSelect(val: Hero): void {
    this.selectedHero = val;
  }*/
  
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

}
