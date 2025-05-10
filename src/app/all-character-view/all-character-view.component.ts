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

import {Component, signal} from '@angular/core';
import {DuneCharacter} from '../domain/dunedle.model';
import {enumListDisplayFunction} from '../common/utils';
import { DuneCharacterStore } from '../domain/dune-character.store';

@Component({
  standalone: true,
  selector: 'app-all-character-view',
  templateUrl: './all-character-view.component.html',
  styleUrl: './all-character-view.component.css'
})
export class AllCharacterViewComponent {
  entities = signal<DuneCharacter[]>([]);

  constructor(readonly duneCharacterStore: DuneCharacterStore) {
    this.entities.set(duneCharacterStore.characters);
  }

    protected readonly enumListDisplayFunction = enumListDisplayFunction;
}
