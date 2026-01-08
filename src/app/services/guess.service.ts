/**
 * © 2026 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Category, DuneCharacter, EvaluationResult, GuessResponse} from '../domain/dunedle.model';
import {DuneCharacterService} from './dune-character.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuessService {
  constructor(private readonly duneCharacterService: DuneCharacterService) {}

  public compareGuess(guess: DuneCharacter): GuessResponse {
    let evalList: Map<Category, EvaluationResult> = new Map();
    evalList.set(Category.GENDER, this.compareLists(this.duneCharacterService.todaysCharacter.genders, guess.genders));
    evalList.set(Category.HEIGHT, this.compareInteger(this.duneCharacterService.todaysCharacter.height, guess.height));
    evalList.set(Category.HAIRCOLOR, this.compareLists(this.duneCharacterService.todaysCharacter.hairColors, guess.hairColors));
    evalList.set(Category.FACTION, this.compareLists(this.duneCharacterService.todaysCharacter.factions, guess.factions));
    evalList.set(Category.BOOKS, this.compareLists(this.duneCharacterService.todaysCharacter.books, guess.books));
    return {guessedCharacter: guess, guessEvaluation: evalList};
  }

  private compareInteger(target: number, guess: number): EvaluationResult {
    if (target == guess) return EvaluationResult.CORRECT;
    else if(target < guess) return EvaluationResult.TOO_HIGH;
    else if(target > guess) return EvaluationResult.TOO_LOW;
    else return EvaluationResult.WRONG;
  }

  private compareLists(targetList: any[], guessedList: any[]): EvaluationResult {
    if(JSON.stringify(targetList) == JSON.stringify(guessedList) || (targetList.length == 0 && guessedList.length == 0)) {
      return EvaluationResult.CORRECT;
    }

    for(let elem of guessedList) {
      if(targetList.includes(elem)) {
        return EvaluationResult.PARTIALLY_CORRECT;
      }
    }

    return EvaluationResult.WRONG;
  }
}
