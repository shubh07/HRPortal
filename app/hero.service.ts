import { Injectable } from '@angular/core';

import { HEROES } from './mock-heros';
import { Hero } from './hero';

@Injectable()
export class HeroService {
  getHeroes() {
    //return HEROES;
 return Promise.resolve(HEROES); 
 }
 getHeroesSlowly() {
  return new Promise<Hero[]>(resolve =>
    setTimeout(() => resolve(HEROES), 8000) // 2 seconds
  );
}
}