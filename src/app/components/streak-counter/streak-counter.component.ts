/**
 * © 2026 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Component, input} from '@angular/core';

@Component({
  selector: 'app-streak-counter',
  imports: [],
  templateUrl: './streak-counter.component.html',
  styleUrl: './streak-counter.component.scss',
})
export class StreakCounterComponent {
  streakCounter = input<number>(0);
}
