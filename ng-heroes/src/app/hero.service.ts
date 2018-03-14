import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
  
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }
  
  /*getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }*/
  
  
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      /*.pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );*/
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }
  
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
