/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import { Routes } from '@angular/router';
import {AllCharacterViewComponent} from './all-character-view/all-character-view.component';
import { DunedleComponent } from './dunedle/dunedle.component';

export const routes: Routes = [
  {
    path: 'browse',
    component: AllCharacterViewComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: DunedleComponent
  }
];
