import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreakService {
  getStreakCounter(): number {
    const streakCounter = localStorage.getItem('streakCounter');

    if (streakCounter === null) {
      localStorage.setItem('streakCounter', '0');
      return 0;
    }

    return Number.parseInt(streakCounter);
  }

  increaseStreakCounter(): void {
    const lastStreakIncreaseItem = localStorage.getItem('lastStreakIncreaseTimestamp');

    let lastStreakIncreaseTimestamp = lastStreakIncreaseItem
      ? Number.parseInt(lastStreakIncreaseItem)
      : null;

    if (lastStreakIncreaseTimestamp !== null &&
      lastStreakIncreaseTimestamp === new Date().setHours(0, 0, 0, 0)) {

      return;
    }

    const streakCounterItem = localStorage.getItem('streakCounter');
    let streakCounter = Number.parseInt(streakCounterItem ?? '0');

    localStorage.setItem('streakCounter', streakCounter + 1 + '');
    localStorage.setItem('lastStreakIncreaseTimestamp', new Date().setHours(0, 0, 0, 0) + '');
  }
}
