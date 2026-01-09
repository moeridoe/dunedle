/**
 * © 2026 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Injectable} from '@angular/core';
import randomSeed from 'random-seed';

import {DuneCharacter} from '../domain/dunedle.model';
import {DUNE_ALL_CHARACTER_DATA} from '../domain/dune-character-data';

@Injectable({
  providedIn: 'root'
})
export class DuneCharacterService {
  readonly seedOfToday: number = new Date().setHours(0,0,0,0);
  readonly seedOfYesterday: number = new Date().setHours(0,0,0,0) - 24*60*60*1000; // minus a day in ms

  private getCharacterWithSeed(seed: number): DuneCharacter {
    const rand = randomSeed.create(seed + '');
    return this.allCharacters[rand(this.allCharacters.length)];
  }

  get allCharacters(): DuneCharacter[] {
    return DUNE_ALL_CHARACTER_DATA;
  }

  get todaysCharacter(): DuneCharacter {
    return this.getCharacterWithSeed(this.seedOfToday);
  }

  get yesterdaysCharacter(): DuneCharacter {
    return this.getCharacterWithSeed(this.seedOfYesterday);
  }
}
