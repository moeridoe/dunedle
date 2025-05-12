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

import {Component, input, output, signal} from '@angular/core';
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatOption
} from "@angular/material/autocomplete";
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DuneCharacter, GuessResponse} from '../../domain/dunedle.model';
import {MatButton} from '@angular/material/button';
import {DuneCharacterStore} from '../../domain/dune-character.store';
import {isDuneCharacter} from '../../common/utils';

@Component({
  selector: 'app-character-selection',
  imports: [
    MatAutocomplete,
    MatAutocompleteModule,
    MatAutocompleteTrigger,
    MatFormField,
    MatInput,
    MatOption,
    ReactiveFormsModule,
    FormsModule,
    MatButton
  ],
  templateUrl: './character-selection.component.html',
  styleUrl: './character-selection.component.css'
})
export class CharacterSelectionComponent {
  editable = input<boolean>(true);
  guessedCharacters = input<DuneCharacter[]>([]);
  newGuessResponse = output<GuessResponse>();

  inputGuess: DuneCharacter | null = null;
  allOptions = signal<DuneCharacter[]>([]);
  filteredOptions = [...this.allOptions()];

  constructor(private readonly duneCharacterStore: DuneCharacterStore) {
      this.allOptions.set(duneCharacterStore.characters);
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredOptions = this.allOptions().filter(opt =>
      !this.guessedCharacters().includes(opt) && opt.name.toLowerCase().includes(value)
    );
  }

  onOptionSelected(event: any) {
    this.inputGuess = event.option.value;
  }

  onSubmit() {
    if(this.inputGuess == null || !isDuneCharacter(this.inputGuess)) {
      return;
    }
    this.newGuessResponse.emit(this.duneCharacterStore.compareGuess(this.inputGuess));
    this.inputGuess = null;
    this.filteredOptions = [];
  }

  displayFn = (character: DuneCharacter | null) => {
    return character == null ? '' : character.name;
  }
}
