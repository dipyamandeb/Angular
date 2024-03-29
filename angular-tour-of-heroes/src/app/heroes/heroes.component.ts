import { Component, OnInit } from '@angular/core';
// import { HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // heroes = HEROES;
  heroes: Hero[];
  // selectedHero: Hero;
  constructor(private heroService: HeroService) { }


  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }
  // getHeroes(): Observable<Hero[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }
}
