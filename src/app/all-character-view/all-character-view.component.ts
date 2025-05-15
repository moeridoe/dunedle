/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

import {Component, signal} from '@angular/core';
import {DuneCharacter} from '../domain/dunedle.model';
import {enumListDisplayFunction} from '../common/utils';
import { DuneCharacterStore } from '../domain/dune-character.store';

@Component({
  standalone: true,
  selector: 'app-all-character-view',
  templateUrl: './all-character-view.component.html',
  styleUrl: './all-character-view.component.scss'
})
export class AllCharacterViewComponent {
  entities = signal<DuneCharacter[]>([]);

  constructor(readonly duneCharacterStore: DuneCharacterStore) {
    this.entities.set(duneCharacterStore.characters);
  }

    protected readonly enumListDisplayFunction = enumListDisplayFunction;
}
