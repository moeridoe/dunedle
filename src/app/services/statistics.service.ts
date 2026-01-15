/**
 * © 2026 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Injectable} from '@angular/core';
import {GET_STORAGE_ITEM_OR_SET_ZERO, ONE_DAY_MS, TODAY} from '../common/utils';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  get winCounter(): number {
    return GET_STORAGE_ITEM_OR_SET_ZERO('winCounter');
  }

  get averageGuesses(): number {
    return GET_STORAGE_ITEM_OR_SET_ZERO('averageGuesses');
  }

  get streakCounter(): number {
    if(this.isOnNewStreak()) {
      localStorage.setItem('streakCounter', '0');
    }
    return GET_STORAGE_ITEM_OR_SET_ZERO('streakCounter');
  }

  get lastStreakIncreaseTimestamp(): number | null {
    const lastStreakIncreaseItem = localStorage.getItem('lastStreakIncreaseTimestamp');
    return lastStreakIncreaseItem ? Number.parseInt(lastStreakIncreaseItem) : null;
  }

  get longestStreak(): number {
    return GET_STORAGE_ITEM_OR_SET_ZERO('longestStreak');
  }

  get oneHits(): number {
    return GET_STORAGE_ITEM_OR_SET_ZERO('oneHits');
  }

  get mostGuesses(): number {
    return GET_STORAGE_ITEM_OR_SET_ZERO('mostGuesses');
  }

  get hardestCharacter(): string {
    return localStorage.getItem('hardestCharacter') ?? 'N/A';
  }

  updateStatisticsOnWin(guesses: number, characterName: string): void {
    if (this.hasAlreadyWonToday()) {
      return;
    }

    localStorage.setItem('averageGuesses', Math.round(((this.averageGuesses * this.winCounter) + guesses) / (this.winCounter + 1)).toFixed(1));
    localStorage.setItem('winCounter', (this.winCounter + 1).toString());
    if (guesses === 1) {
      localStorage.setItem('oneHits', (this.oneHits + 1).toString());
    }
    if (guesses > this.mostGuesses) {
      localStorage.setItem('mostGuesses', guesses.toString());
      localStorage.setItem('hardestCharacter', characterName);
    }
    if (this.isOnNewStreak()) {
      localStorage.setItem('streakCounter', '1');
    } else {
      localStorage.setItem('streakCounter', (this.streakCounter + 1).toString());
    }
    localStorage.setItem('lastStreakIncreaseTimestamp', TODAY.toString());
    if (this.streakCounter > this.longestStreak) {
      localStorage.setItem('longestStreak', this.streakCounter.toString());
    }
  }

  isOnNewStreak(): boolean {
    const lastStreakIncreaseItem = this.lastStreakIncreaseTimestamp;

    return lastStreakIncreaseItem != null &&
      lastStreakIncreaseItem < TODAY - ONE_DAY_MS;
  }

  hasAlreadyWonToday(): boolean {
    const lastStreakIncreaseItem = this.lastStreakIncreaseTimestamp;

    return lastStreakIncreaseItem != null &&
      lastStreakIncreaseItem === TODAY;
  }
}
