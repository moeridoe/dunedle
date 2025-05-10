/*
 * This file is part of Dunedle.
 *
 * Copyright (C) 2025 moeridoe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import randomSeed from 'random-seed';
import {Category, DuneCharacter, GuessResponse} from './dunedle.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuneCharacterStore {
  characters: DuneCharacter[] = [
    {name: 'Paul Atreides (Muad\'Dib, Prophet)', genders: ['MALE'], height: 180, hairColors: ['DARK_BROWN'], factions: ['ATREIDES', 'BENE_GESSERITH', 'FREMEN', 'MENTAT'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Leto I Atreides', genders: ['MALE'], height: 188, hairColors: ['DARK_BROWN'], factions: ['ATREIDES'], books: ['DUNE']},
    {name: 'Lady Jessica', genders: ['FEMALE'], height: 175, hairColors: ['AUBURN'], factions: ['ATREIDES', 'BENE_GESSERITH'], books: ['DUNE', 'CHILDREN_OF_DUNE']},
    {name: 'Vladimir Harkonnen', genders: ['MALE'], height: 193, hairColors: ['RED', 'NONE'], factions: ['HARKONNEN'], books: ['DUNE']},
    {name: 'Chani', genders: ['FEMALE'], height: 165, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE', 'DUNE_MESSIAH']},
    {name: 'Stilgar', genders: ['MALE'], height: 183, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Duncan Idaho (Hayt)', genders: ['MALE'], height: 185, hairColors: ['BLACK'], factions: ['MENTAT'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Dr. Wellington Yueh', genders: ['MALE'], height: 175, hairColors: ['BLACK'], factions: ['ATREIDES'], books: ['DUNE']},
    {name: 'Gurney Halleck', genders: ['MALE'], height: 175, hairColors: ['BLACK', 'GREY'], factions: ['ATREIDES'], books: ['DUNE', 'CHILDREN_OF_DUNE']},
    {name: 'Feyd-Rautha Harkonnen', genders: ['MALE'], height: 183, hairColors: ['DARK_BROWN', 'NONE'], factions: ['HARKONNEN'], books: ['DUNE']},
    {name: 'Glossu Rabban Harkonnen', genders: ['MALE'], height: 195, hairColors: ['DARK_BROWN', 'NONE'], factions: ['HARKONNEN'], books: ['DUNE']},
    {name: 'Gaius Helen Mohiam', genders: ['FEMALE'], height: 170, hairColors: ['GREY'], factions: ['BENE_GESSERITH'], books: ['DUNE', 'DUNE_MESSIAH']},
    {name: 'Princess Irulan', genders: ['FEMALE'], height: 175, hairColors: ['BLONDE'], factions: ['CORRINO', 'BENE_GESSERITH'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Shaddam IV  Corrino', genders: ['MALE'], height: 175, hairColors: ['BLONDE'], factions: ['CORRINO'], books: ['DUNE']},
    {name: 'Thufir Hawat', genders: ['MALE'], height: 175, hairColors: ['GREY'], factions: ['MENTAT'], books: ['DUNE']},
    {name: 'Count Hasimir Fenring', genders: ['MALE'], height: 170, hairColors: ['BLACK'], factions: ['HARKONNEN'], books: ['DUNE']},
    {name: 'Margot Fenring', genders: ['FEMALE'], height: 170, hairColors: ['BLONDE'], factions: ['HARKONNEN', 'BENE_GESSERITH'], books: ['DUNE']},
    {name: 'Piter De Vries', genders: ['MALE'], height: 180, hairColors: ['NONE'], factions: ['MENTAT'], books: ['DUNE']},
    {name: 'Alia Atreides', genders: ['FEMALE'], height: 170, hairColors: ['AUBURN'], factions: ['ATREIDES', 'BENE_GESSERITH'], books: ['DUNE', 'DUNE_MESSIAH', 'CHILDREN_OF_DUNE']},
    {name: 'Shadout Mapes', genders: ['FEMALE'], height: 160, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE']},
    {name: 'Liet-Kynes', genders: ['MALE'], height: 180, hairColors: ['GREY'], factions: ['FREMEN'], books: ['DUNE']},
    {name: 'Ramallo', genders: ['FEMALE'], height: 160, hairColors: ['GREY', 'NONE'], factions: ['FREMEN'], books: ['DUNE']},
    {name: 'Jamis', genders: ['MALE'], height: 178, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE']},
    {name: 'Harah', genders: ['FEMALE'], height: 165, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE', 'CHILDREN_OF_DUNE']},
    {name: 'Otheym', genders: ['MALE'], height: 170, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE', 'DUNE_MESSIAH']},
    {name: 'Korba', genders: ['MALE'], height: 175, hairColors: ['NONE'], factions: ['FREMEN'], books: ['DUNE', 'DUNE_MESSIAH']},
    {name: 'Captain Aramsham', genders: ['MALE'], height: 178, hairColors: ['UNSPECIFIED'], factions: ['CORRINO'], books: ['DUNE']},
    {name: 'Iakin Nefud', genders: ['MALE'], height: 180, hairColors: ['RED'], factions: ['HARKONNEN'], books: ['DUNE']},

    {name: 'Scytale', genders: ['MALE'], height: 0, hairColors: ['VARIABLE'], factions: ['TLEILAX'], books: ['DUNE_MESSIAH']},
    {name: 'Edric', genders: ['MALE'], height: 180, hairColors: ['NONE'], factions: ['NONE'], books: ['DUNE_MESSIAH']},
    {name: 'Bijaz', genders: ['MALE'], height: 120, hairColors: ['UNSPECIFIED'], factions: ['TLEILAX'], books: ['DUNE_MESSIAH']},
    {name: 'Lichna', genders: ['FEMALE'], height: 165, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['DUNE_MESSIAH']},
    {name: 'Farok', genders: ['MALE'], height: 170, hairColors: ['UNSPECIFIED'], factions: ['FREMEN'], books: ['DUNE_MESSIAH']},

    {name: 'Princess Wensicia', genders: ['FEMALE'], height: 172, hairColors: ['BLONDE'], factions: ['CORRINO'], books: ['CHILDREN_OF_DUNE']},
    {name: 'Leto II Atreides', genders: ['MALE', 'OTHER'], height: 700, hairColors: ['DARK_BROWN', 'NONE'], factions: ['ATREIDES', 'FREMEN', 'BENE_GESSERITH'], books: ['CHILDREN_OF_DUNE', 'DUNE_GOD_EMPEROR']},
    {name: 'Ghanima Atreides', genders: ['FEMALE'], height: 165, hairColors: ['AUBURN'], factions: ['ATREIDES', 'FREMEN', 'BENE_GESSERITH'], books: ['CHILDREN_OF_DUNE']},
    {name: 'Tyekanik', genders: ['MALE'], height: 178, hairColors: ['BLACK'], factions: ['CORRINO'], books: ['CHILDREN_OF_DUNE']},
    {name: 'Farad\'n (Harq al\'Ada)', genders: ['MALE'], height: 180, hairColors: ['BLONDE'], factions: ['CORRINO', 'BENE_GESSERITH'], books: ['CHILDREN_OF_DUNE']},
    {name: 'Javid', genders: ['MALE'], height: 180, hairColors: ['BLACK'], factions: ['FREMEN'], books: ['CHILDREN_OF_DUNE']},

    {name: 'Siona Atreides', genders: ['FEMALE'], height: 170, hairColors: ['DARK_BROWN'], factions: ['ATREIDES'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Hwi Noree', genders: ['FEMALE'], height: 170, hairColors: ['BLACK'], factions: ['IX'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Anteac', genders: ['FEMALE'], height: 170, hairColors: ['UNSPECIFIED'], factions: ['BENE_GESSERITH', 'MENTAT'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Moneo Atreides', genders: ['MALE'], height: 180, hairColors: ['DARK_BROWN'], factions: ['ATREIDES'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Nayla', genders: ['FEMALE'], height: 185, hairColors: ['UNSPECIFIED'], factions: ['NONE'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Chenoeh', genders: ['FEMALE'], height: 170, hairColors: ['UNSPECIFIED'], factions: ['BENE_GESSERITH'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Malky', genders: ['MALE'], height: 175, hairColors: ['BLACK'], factions: ['IX'], books: ['DUNE_GOD_EMPEROR']},
    {name: 'Luyseyal', genders: ['FEMALE'], height: 170, hairColors: ['UNSPECIFIED'], factions: ['BENE_GESSERITH'], books: ['DUNE_GOD_EMPEROR']},
  ]
  seedOfToday: number = new Date().setHours(0,0,0,0);
  seedOfYesterday: number = new Date().setHours(0,0,0,0) - 24*60*60*1000; // minus a day in ms
  getCharacterWithSeed = (seed: number): DuneCharacter => {
    const rand = randomSeed.create(seed + '');
    return this.characters[rand(this.characters.length)];
  }
  todaysCharacter: DuneCharacter = this.getCharacterWithSeed(this.seedOfToday);
  yesterdaysCharacter: DuneCharacter = this.getCharacterWithSeed(this.seedOfYesterday);

  compareGuess = (guess: DuneCharacter): GuessResponse => {
    let evalList: Map<Category, number> = new Map();
    evalList.set(Category.GENDER, this.compareLists(this.todaysCharacter.genders, guess.genders));
    evalList.set(Category.HEIGHT, this.compareInteger(this.todaysCharacter.height, guess.height));
    evalList.set(Category.HAIRCOLOR, this.compareLists(this.todaysCharacter.hairColors, guess.hairColors));
    evalList.set(Category.FACTION, this.compareLists(this.todaysCharacter.factions, guess.factions));
    evalList.set(Category.BOOKS, this.compareLists(this.todaysCharacter.books, guess.books));
    return {guessedCharacter: guess, guessEvaluation: evalList};
  }

  compareInteger(target: number, guess: number): number {
    if (target == guess) return 1;
    else if(target < guess) return -1;
    else if(target > guess) return -2;
    else return 0;
  }

  compareLists(targetList: any[], guessedList: any[]): number {
    if(JSON.stringify(targetList) == JSON.stringify(guessedList) || (targetList.length == 0 && guessedList.length == 0)) {
      return 1;
    }

    for(let elem of guessedList) {
      if(targetList.includes(elem)) {
        return 2;
      }
    }

    return 0;
  }
}
