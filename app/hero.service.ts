/**
 * Created by andrewbilgore on 1/31/16.
 */
import {Injectable} from 'angular2/core';
import {HEROES} from './data/app.data.Heroes'
import {Hero} from './hero';
@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES),2000)
        );
    }
}