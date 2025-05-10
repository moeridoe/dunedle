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
