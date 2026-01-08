/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Component, computed, signal} from '@angular/core';
import {CharacterSelectionComponent} from '../character-selection/character-selection.component';
import {Category, DuneCharacter, EvaluationResult, GuessResponse} from '../../domain/dunedle.model';
import {NgClass} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {WinDialogComponent} from '../win-dialog/win-dialog.component';
import {enumListDisplayFunction} from '../../common/utils';
import {HelpDialogComponent} from '../help-dialog/help-dialog.component';
import {DuneCharacterService} from '../../services/dune-character.service';

@Component({
  standalone: true,
  selector: 'app-dunedle',
  imports: [
    CharacterSelectionComponent,
    NgClass
  ],
  templateUrl: './dunedle.component.html',
  styleUrl: './dunedle.component.scss',
})
export class DunedleComponent {
  guesses = signal<GuessResponse[]>([]);
  guessedCharacters = computed(() =>
    this.guesses().map(value => value.guessedCharacter)
  );
  editable = signal<boolean>(true);
  yesterdaysCharacter = signal<DuneCharacter>(<DuneCharacter>{});

  constructor(private readonly matDialog: MatDialog, readonly duneCharacterService: DuneCharacterService) {
    this.yesterdaysCharacter.set(duneCharacterService.yesterdaysCharacter);
  }

  onGuess(guessResponse: GuessResponse) {
    this.guesses.set([guessResponse, ...this.guesses()]);
    if (this.checkWin(guessResponse)) {
      this.onWin();
    }
  }

  checkWin(guessResponse: GuessResponse) {
    return Array.from(guessResponse.guessEvaluation.values()).every(elem => elem === EvaluationResult.CORRECT);
  }

  onWin() {
    this.editable.set(false);
    setTimeout(() => this.matDialog.open(WinDialogComponent), 2500);
  }

  onHelpClick() {
    this.matDialog.open(HelpDialogComponent);
  }

  getClassFor(evalMap: Map<Category, EvaluationResult>, category: Category) {
    const evalVal: EvaluationResult | undefined = evalMap.get(category);
    if (!evalVal) return 'wrong';

    if (evalVal == EvaluationResult.CORRECT) return 'correct';
    if (evalVal == EvaluationResult.PARTIALLY_CORRECT) return 'partially-correct';
    return 'wrong';
  }

  // makes these accessible in the template
  protected readonly enumListDisplayFunction = enumListDisplayFunction;
  protected readonly Category = Category;
  protected readonly EvaluationResult = EvaluationResult;
}
