/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Component, computed, signal} from '@angular/core';
import {CharacterSelectionComponent} from './character-selection/character-selection.component';
import {Category, DuneCharacter, GuessResponse} from '../domain/dunedle.model';
import {NgClass} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';
import {WinDialogComponent} from './win-dialog/win-dialog.component';
import {enumListDisplayFunction} from '../common/utils';
import {DuneCharacterStore} from '../domain/dune-character.store';
import {HelpDialogComponent} from '../help-dialog/help-dialog.component';

@Component({
  standalone: true,
  selector: 'app-dunedle',
  imports: [
    CharacterSelectionComponent,
    MatIcon,
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

  constructor(private readonly matDialog: MatDialog, readonly duneCharacterStore: DuneCharacterStore) {
    this.yesterdaysCharacter.set(duneCharacterStore.yesterdaysCharacter);
  }

  onGuess(guessResponse: GuessResponse) {
    this.guesses.set([guessResponse, ...this.guesses()]);
    if (this.checkWin(guessResponse)) {
      this.onWin();
    }
  }

  checkWin(guessResponse: GuessResponse) {
    return Array.from(guessResponse.guessEvaluation.values()).every(elem => elem === 1);
  }

  onWin() {
    this.editable.set(false);
    this.matDialog.open(WinDialogComponent);
  }

  onHelpClick() {
    this.matDialog.open(HelpDialogComponent);
  }

  getClassFor(evalMap: Map<Category, number>, category: Category) {
    const evalVal: number | undefined = evalMap.get(category);
    if (!evalVal) return 'wrong';

    if (evalVal == 1) return 'correct';
    if (evalVal == 2) return 'partially-correct';
    return 'wrong';
  }

  protected readonly enumListDisplayFunction = enumListDisplayFunction;
  protected readonly Category = Category;
}
