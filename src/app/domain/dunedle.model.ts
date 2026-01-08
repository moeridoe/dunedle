/**
 * © 2025 moeridoe
 * Licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

export enum Category { GENDER, HEIGHT, HAIRCOLOR, FACTION, BOOKS}
export type Book = 'DUNE' | 'DUNE_MESSIAH' | 'CHILDREN_OF_DUNE' | 'DUNE_GOD_EMPEROR';
export type Faction = 'ATREIDES' | 'HARKONNEN' | 'CORRINO' | 'IX' | 'TLEILAX' | 'FREMEN' | 'BENE_GESSERIT' | 'MENTAT' | 'NONE';
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type HairColor = 'BLACK' | 'DARK_BROWN' | 'BLONDE' | 'AUBURN' | 'RED' | 'GREY' | 'VARIABLE' | 'UNSPECIFIED' | 'NONE';
export interface DuneCharacter {
  name: string;
  genders: Gender[];
  height: number;
  hairColors: HairColor[];
  factions: Faction[];
  books: Book[];
}
export enum EvaluationResult { WRONG = 0, CORRECT = 1, PARTIALLY_CORRECT = 2, TOO_HIGH = -1, TOO_LOW = -2 }
export type GuessResponse = {guessedCharacter: DuneCharacter, guessEvaluation: Map<Category, EvaluationResult>};
