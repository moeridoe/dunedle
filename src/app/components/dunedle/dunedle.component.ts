/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {NgClass} from '@angular/common';
import {Component, computed, signal} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {ENUM_LIST_DISPLAY_FN} from '../../common/utils';
import {Category, DuneCharacter, EvaluationResult, GuessResponse} from '../../domain/dunedle.model';
import {DuneCharacterService} from '../../services/dune-character.service';

import {CharacterSelectionComponent} from '../character-selection/character-selection.component';
import {HelpDialogComponent} from '../help-dialog/help-dialog.component';
import {WinDialogComponent} from '../win-dialog/win-dialog.component';
import {StreakCounterComponent} from '../streak-counter/streak-counter.component';
import {StatisticsService} from '../../services/statistics.service';
import {StatisticsComponent} from '../statistics/statistics.component';

@Component({
  standalone: true,
  selector: 'app-dunedle',
  imports: [
    CharacterSelectionComponent,
    NgClass,
    StatisticsComponent,
    StreakCounterComponent
  ],
  templateUrl: './dunedle.component.html',
  styleUrl: './dunedle.component.scss',
})
export class DunedleComponent {
  editable = signal<boolean>(true);
  guesses = signal<GuessResponse[]>([]);
  guessedCharacters = computed(() =>
    this.guesses().map(value => value.guessedCharacter)
  );
  streakCounter = signal<number>(0);
  yesterdaysCharacter = signal<DuneCharacter>(<DuneCharacter>{});

  constructor(
    private readonly matDialog: MatDialog,
    private readonly statisticsService: StatisticsService,
    private readonly duneCharacterService: DuneCharacterService) {

    this.streakCounter.set(this.statisticsService.streakCounter)
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
    this.statisticsService.updateStatisticsOnWin(this.guesses().length, this.duneCharacterService.todaysCharacter.name);
    setTimeout(() => {
      this.matDialog.open(WinDialogComponent);
      this.streakCounter.set(this.statisticsService.streakCounter);
    }, 2500);
  }

  onHelpClick() {
    this.matDialog.open(HelpDialogComponent);
  }

  onStatisticsClick() {
    this.matDialog.open(StatisticsComponent);
  }

  getClassFor(evalMap: Map<Category, EvaluationResult>, category: Category) {
    const evalVal: EvaluationResult | undefined = evalMap.get(category);
    if (!evalVal) return 'wrong';

    if (evalVal == EvaluationResult.CORRECT) return 'correct';
    if (evalVal == EvaluationResult.PARTIALLY_CORRECT) return 'partially-correct';
    return 'wrong';
  }

  // makes these accessible in the template
  protected readonly enumListDisplayFunction = ENUM_LIST_DISPLAY_FN;
  protected readonly Category = Category;
  protected readonly EvaluationResult = EvaluationResult;
}
