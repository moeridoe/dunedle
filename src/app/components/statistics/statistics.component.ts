/**
 * © 2026 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import { Component } from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent {
  winCounter: number;
  averageGuesses: number;
  streakCounter: number;
  longestStreak: number;
  oneHits: number;
  mostGuesses: number;
  hardestCharacter: string;

  constructor(private statisticsService: StatisticsService) {
    this.winCounter = this.statisticsService.winCounter
    this.averageGuesses = this.statisticsService.averageGuesses;
    this.streakCounter = this.statisticsService.streakCounter;
    this.longestStreak = this.statisticsService.longestStreak;
    this.oneHits = this.statisticsService.oneHits;
    this.mostGuesses = this.statisticsService.mostGuesses;
    this.hardestCharacter = this.statisticsService.hardestCharacter;
  }
}
