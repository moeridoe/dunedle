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

import {Component, computed, signal} from '@angular/core';
import {CharacterSelectionComponent} from './character-selection/character-selection.component';
import {Category, DuneCharacter, GuessResponse} from '../domain/dunedle.model';
import {NgClass} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {WinDialogComponent} from './win-dialog/win-dialog.component';
import {enumListDisplayFunction} from '../common/utils';
import {DuneCharacterStore} from '../domain/dune-character.store';

@Component({
  selector: 'app-dunedle',
  imports: [
    CharacterSelectionComponent,
    MatIconModule,
    NgClass
  ],
  templateUrl: './dunedle.component.html',
  styleUrl: './dunedle.component.css'
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
    this.guesses.set([...this.guesses(), guessResponse]);
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
