/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
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
  styleUrl: './character-selection.component.scss'
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
      !this.guessedCharacters().includes(opt)
      && opt.name.split(' ').some(word => word.replace(/[(,)]/g, '').toLowerCase().startsWith(value))
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
