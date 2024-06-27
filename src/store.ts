//what is it ?
//behaviroSubject store most recent value and made it easy to use
import { BehaviorSubject, map } from 'rxjs';

export interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  power?: number;
}
const rawPokeMon$ = new BehaviorSubject<Pokemon[]>([]);

//Map came from rxjs
export const pokenMonWithPower$ = rawPokeMon$.pipe(
  map((pokenMon) =>
    pokenMon.map((p) => ({
      ...p,
      power:
        p.hp +
        p.attack +
        p.defense +
        p.special_attack +
        p.special_defense +
        p.speed,
    }))
  )
);

fetch('./pokemon-simplified.json')
  .then((res) => res.json())
  .then((data) => rawPokeMon$.next(data));
